/**
 * Server-side email notification for security assessment leads.
 * 
 * Uses Resend directly via fetch to avoid TypeScript import complications
 * with the third-party SDK. RESEND_API_KEY is read only on the server.
 */

"use server";

import type { Lead } from "@/lib/leads";

/**
 * Send a lead notification email via Resend API.
 * 
 * @param lead The validated lead record (only safe metadata).
 * @returns Promise resolving to Resend API response, or throwing on failure.
 * 
 * Security: RESEND_API_KEY is read from process.env only on the server.
 * Never exposed to client, never used with NEXT_PUBLIC_ or VITE_ prefix.
 */
export async function sendLeadNotification(lead: Lead): Promise<any> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.trim() === "") {
    console.warn(
      "[sendLeadNotification] RESEND_API_KEY not configured – email notifications disabled"
    );
    throw new Error("RESEND_API_KEY not configured");
  }

  const responseresult = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || "Portfolio Inquiries <onboarding@resend.dev>",
      to: process.env.LEAD_NOTIFICATION_EMAIL || "hrudyansh80@gmail.com",
      reply_to: lead.workEmail,
      subject: `[NEW SECURITY INQUIRY] ${lead.referenceId} — ${lead.company || lead.name}`,
      html: leadEmailHtml(lead),
      text: leadEmailText(lead),
    }),
  });

  const data = await responseresult.json();

  if (!responseresult.ok) {
    console.error(
      "[sendLeadNotification] Resend API error:",
      data.error || "Unknown Resend error"
    );
    throw new Error(
      `Failed to send lead notification email: ${data.error?.message || "Unknown error"}`
    );
  }

  return data;
}

/**
 * Render the email body as HTML.
 */
function leadEmailHtml(lead: Lead): string {
  const date = new Date(lead.timestamp).toLocaleString();
  const scope = lead.scope.join(", ");

  return `
    <h2>New security assessment inquiry</h2>
    <p><strong>Reference ID:</strong> ${lead.referenceId}</p>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Work email:</strong> ${lead.workEmail}</p>
    <p><strong>Company:</strong> ${lead.company || "—"}</p>
    <p><strong>Assessment type:</strong> ${lead.assessmentType}</p>
    <p><strong>Application URL:</strong> ${lead.applicationUrl || "—"}</p>
    <p><strong>Scope:</strong> ${scope || "—"}</p>
    <p><strong>Message:</strong> ${lead.message || "—"}</p>
    <p><strong>Received:</strong> ${date}</p>
  `;
}

/**
 * Render the email body as plain text.
 */
function leadEmailText(lead: Lead): string {
  const date = new Date(lead.timestamp).toLocaleString();
  const scope = lead.scope.join(", ");

  return `
    New security assessment inquiry

    Reference ID: ${lead.referenceId}
    Name: ${lead.name}
    Work email: ${lead.workEmail}
    Company: ${lead.company || "—"}
    Assessment type: ${lead.assessmentType}
    Application URL: ${lead.applicationUrl || "—"}
    Scope: ${scope || "—"}
    Message: ${lead.message || "—"}
    Received: ${date}
  `;
}