import type { Lead } from "@/lib/leads";

export type { Lead } from "@/lib/leads";

/**
 * Generates a mailto: URL for a lead enquiry.
 *
 * The URL encodes the subject and body using standard URL encoding,
 * so special characters in any field are handled correctly by the
 * visitor's email client.
 *
 * @param lead The lead record containing enquiry details.
 * @returns A mailto: URL string that opens the visitor's email client.
 *
 * Example:
 *   generateMailtoUrl({ referenceId, name, ... }) →
 *   mailto:hrudyansh06@gmail.com?subject=...&body=...
 *
 * Security:
 * - Only ReferenceId, name, workEmail, company, applicationUrl,
 *   assessmentType, scope, and message are included.
 * - All values are URL-encoded by the function.
 * - No Resend API key, no external requests, no secrets.
 */
export function generateMailtoUrl(lead: Lead): string {
  const subject = encodeURIComponent(
    `Security Assessment Enquiry — ${lead.company || "Company"}`
  );

  // Build the email body with all enquiry details.
  // Each line is URL-encoded individually; the browser decodes them.
  const bodyLines = [
    `Hello Hrudyansh,`,
    "",
    `I would like to enquire about a security assessment.`,
    "",
    `Name: ${encodeURIComponent(lead.name || "")}`,
    `Company: ${encodeURIComponent(lead.company || "")}`,
    `Work Email: ${encodeURIComponent(lead.workEmail || "")}`,
    `Assessment Type: ${encodeURIComponent(lead.assessmentType || "")}`,
    `Application URL: ${encodeURIComponent(lead.applicationUrl || "")}`,
    `Scope: ${encodeURIComponent(lead.scope.join(", ") || "")}`,
    `Message: ${encodeURIComponent(lead.message || "")}`,
    "",
    `Regards,`,
  ];

  const body = encodeURIComponent(bodyLines.join("\r\n"));

  // The final mailto URL – the browser will open the default email client.
  return `mailto:hrudyansh06@gmail.com?subject=${subject}&body=${body}`;
}

/**
 * Returns just the email address portion of the mailto URL.
 * Useful as a fallback when JavaScript is disabled or the full
 * URL cannot be constructed.
 */
export function getEnquiryEmailAddress(): string {
  return "hrudyansh06@gmail.com";
}

/**
 * Sanitises a string for safe inclusion in an email body.
 * Removes or escapes characters that could break the mailto URL.
 */
export function sanitiseForEmail(input: string): string {
  return input
    .replace(/["']/g, "") // strip quotes that could break the URL
    .replace(/[\r\n]+/g, " ") // collapse newlines to spaces
    .trim();
}