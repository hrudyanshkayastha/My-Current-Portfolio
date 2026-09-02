import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Lead, LeadProvider } from "./types";

export type { LeadProvider };

let supabaseInstance: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (supabaseInstance) return supabaseInstance;

  const url =
    process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const secretKey =
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !secretKey || secretKey.trim() === "") {
    throw new Error(
      "Missing Supabase server configuration: SUPABASE_URL or SUPABASE_SECRET_KEY is undefined in .env.local"
    );
  }

  try {
    supabaseInstance = createClient(url, secretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
    return supabaseInstance;
  } catch (err) {
    console.error("[Lead Provider] failed to initialise Supabase client:", err);
    throw err;
  }
}

export class SupabaseLeadProvider implements LeadProvider {
  async save(lead: Lead): Promise<void> {
    const supabase = getSupabaseClient();

    const { error } = await supabase
      .from("assessment_inquiries")
      .insert({
        reference_id: lead.referenceId,
        timestamp: lead.timestamp,
        name: lead.name,
        work_email: lead.workEmail,
        company: lead.company,
        application_url: lead.applicationUrl,
        assessment_type: lead.assessmentType,
        scope: lead.scope,
        metadata: lead.metadata,
      });

    if (error) {
      console.error("[SupabaseLeadProvider] Database INSERT error:", error);
      throw new Error(
        `Database error persisting assessment inquiry: ${error.message || "Unknown Supabase error"}`
      );
    }
  }
}

export class StubLeadProvider implements LeadProvider {
  private leads: Lead[] = [];

  async save(lead: Lead): Promise<void> {
    this.leads.push(lead);
  }
}

class DelegatingLeadProvider implements LeadProvider {
  async save(lead: Lead): Promise<void> {
    const providerEnv = process.env.LEAD_PROVIDER?.toLowerCase();

    if (providerEnv === "supabase") {
      const supabaseProvider = new SupabaseLeadProvider();
      await supabaseProvider.save(lead);
      return;
    }

    const stub = new StubLeadProvider();
    await stub.save(lead);
  }
}

export const leadProvider: LeadProvider = new DelegatingLeadProvider();