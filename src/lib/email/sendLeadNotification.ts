import nodemailer from "nodemailer";
import type { Lead } from "@/lib/leads";

export type { Lead };

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Validates and sanitizes an email address to prevent SMTP header injection attacks.
 */
function sanitizeEmail(email: string): string | null {
  if (!email || typeof email !== "string") return null;
  // Reject any email containing CRLF or tab control characters (header injection attempt)
  if (/[\r\n\t]/.test(email)) return null;
  const cleaned = email.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleaned) ? cleaned : null;
}

/**
 * Escapes HTML characters in user input to prevent HTML injection in email clients.
 */
function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends a server-side notification email via Nodemailer using authenticated Gmail SMTP.
 * 
 * Target recipient: hrudyansh71@gmail.com
 * Reply-To: visitor validated work email
 * Credentials: read strictly from server-side environment variables.
 */
export async function sendLeadNotification(lead: Lead): Promise<EmailSendResult> {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE !== "false"; // true for port 465 SSL
  const user = process.env.SMTP_USER || "hrudyansh71@gmail.com";
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.ASSESSMENT_NOTIFICATION_EMAIL || "hrudyansh71@gmail.com";

  if (!pass || pass.trim() === "") {
    console.warn(
      "[sendLeadNotification] SMTP_PASS is not configured in server environment. Automatic email dispatch skipped."
    );
    return {
      success: false,
      error: "SMTP_PASS not configured",
    };
  }

  // Validate and sanitize Reply-To header to protect against header injection
  const validatedReplyTo = sanitizeEmail(lead.workEmail) || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // Serverless-friendly timeouts
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 8000,
  });

  const subject = `[SECURITY ASSESSMENT] New Enquiry - ${lead.referenceId}`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #060910; color: #f1f5f9; padding: 20px; }
    .card { background-color: #0b1120; border: 1px solid #1e293b; border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; }
    .header { background-color: #020617; border-bottom: 1px solid #1e293b; padding: 20px 24px; }
    .header h2 { margin: 0; color: #10b981; font-size: 18px; font-family: monospace; letter-spacing: 0.05em; }
    .ref-badge { display: inline-block; background-color: rgba(16, 185, 129, 0.15); color: #34d399; padding: 4px 10px; border-radius: 6px; font-family: monospace; font-size: 13px; font-weight: bold; margin-top: 6px; border: 1px solid rgba(16, 185, 129, 0.3); }
    .content { padding: 24px; }
    .field-row { margin-bottom: 16px; }
    .field-label { font-family: monospace; font-size: 11px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px; }
    .field-val { font-size: 14px; color: #e2e8f0; word-break: break-word; }
    .message-box { background-color: #020617; border: 1px solid #1e293b; border-radius: 8px; padding: 14px; font-size: 13px; color: #cbd5e1; white-space: pre-wrap; margin-top: 6px; }
    .footer { background-color: #020617; border-top: 1px solid #1e293b; padding: 14px 24px; font-size: 11px; font-family: monospace; color: #475569; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>🛡️ NEW SECURITY ASSESSMENT ENQUIRY</h2>
      <div class="ref-badge">REFERENCE ID: ${lead.referenceId}</div>
    </div>
    <div class="content">
      <div class="field-row">
        <div class="field-label">Name</div>
        <div class="field-val"><strong>${escapeHtml(lead.name)}</strong></div>
      </div>
      <div class="field-row">
        <div class="field-label">Work Email (Reply-To)</div>
        <div class="field-val"><a href="mailto:${escapeHtml(lead.workEmail)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(lead.workEmail)}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Company / Product</div>
        <div class="field-val">${escapeHtml(lead.company || "Not provided")}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Application / API Target URL</div>
        <div class="field-val">${lead.applicationUrl ? `<a href="${escapeHtml(lead.applicationUrl)}" style="color: #38bdf8;">${escapeHtml(lead.applicationUrl)}</a>` : "Not provided"}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Assessment Service Type</div>
        <div class="field-val"><span style="color: #34d399; font-weight: 600;">${escapeHtml(lead.assessmentType)}</span></div>
      </div>
      <div class="field-row">
        <div class="field-label">Project Scope &amp; Tech Stack</div>
        <div class="message-box">${escapeHtml(lead.message || "No additional scope message provided.")}</div>
      </div>
      <div class="field-row" style="margin-bottom: 0;">
        <div class="field-label">Received At</div>
        <div class="field-val" style="font-family: monospace; font-size: 12px; color: #94a3b8;">${new Date(lead.timestamp).toUTCString()} (IP: ${escapeHtml(lead.metadata?.ip || "Unknown")})</div>
      </div>
    </div>
    <div class="footer">
      Kerynth Security Ingestion Pipeline • Automated SMTP Dispatch
    </div>
  </div>
</body>
</html>
`;

  const textContent = `
NEW SECURITY ASSESSMENT ENQUIRY
===========================================
Reference ID:     ${lead.referenceId}
Name:             ${lead.name}
Work Email:       ${lead.workEmail}
Company:          ${lead.company || "Not provided"}
Application URL:  ${lead.applicationUrl || "Not provided"}
Assessment Type:  ${lead.assessmentType}
Submitted:        ${new Date(lead.timestamp).toUTCString()}
Client IP:        ${lead.metadata?.ip || "Unknown"}

Scope & Message:
-------------------------------------------
${lead.message || "No additional scope message provided."}

===========================================
Reply directly to this email to respond to the client.
`;

  try {
    const info = await transporter.sendMail({
      from: `"Kerynth Inquiries" <${user}>`,
      to: recipient,
      replyTo: validatedReplyTo,
      subject,
      text: textContent,
      html: htmlContent,
    });

    console.log(`[sendLeadNotification] Email dispatched successfully. Message ID: ${info.messageId}`);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (err: any) {
    // Log safe error without exposing credentials or passwords
    console.error(`[sendLeadNotification] SMTP dispatch error: ${err?.message || "Unknown error"}`);
    return {
      success: false,
      error: err?.message || "SMTP error",
    };
  }
}
