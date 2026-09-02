export interface Lead {
  referenceId: string;
  timestamp: string;
  name: string;
  workEmail: string;
  company: string | null;
  applicationUrl: string | null;
  assessmentType: string;
  scope: string[];
  metadata: {
    userAgent?: string;
    ip?: string;
  };
}

export interface LeadProvider {
  save(lead: Lead): Promise<void>;
  initialise?(): Promise<void>;
  shutdown?(): Promise<void>;
}