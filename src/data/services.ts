export interface EvidenceModel {
  evidence: string;
  method: string;
  deliverable: string;
  outcome: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  targetAudience: string;
  problem: string;
  evidenceModel: EvidenceModel;
  assessmentScope: string[];
  deliverables: string[];
  timeframe: string;
  engagementProcess: string[];
  ctaText: string;
}

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: "web-security",
    title: "Web Application Security Assessment",
    subtitle: "Thorough manual and tool-assisted vulnerability assessment aligned with OWASP Top 10.",
    badge: "Primary Service",
    targetAudience: "Startups launching MVPs, SaaS products handling sensitive data, and engineering teams preparing for enterprise security reviews.",
    problem:
      "Automated vulnerability scanners miss complex multi-step authorization flaws, business-logic bypasses, and chained attack vectors. A single undetected IDOR or broken access control can expose entire tenant databases.",
    evidenceModel: {
      evidence: "Controlled web lab auditing multi-tier session lifecycle, tenant IDOR, and second-order injection with verified remediation patches.",
      method: "Authenticated manual heuristic testing, state manipulation, and deep business logic inspection aligned with OWASP Top 10.",
      deliverable: "Prioritized technical vulnerability report + reproducible cURL PoCs + exact framework-level remediation guidance.",
      outcome: "Verified flaw closure so your engineering team can deploy securely without critical exposure.",
    },
    assessmentScope: [
      "Authentication & session lifecycle (JWT, cookies, OAuth, password reset flows)",
      "Authorization & privilege escalation (BOLA, IDOR, vertical & horizontal access flaws)",
      "Server-side input validation & injection (SQLi, XSS, SSRF, Command Injection)",
      "Business-logic flaw exploration & workflow state tampering",
      "Sensitive data exposure & security configuration audit",
      "Security headers, CORS policies & CSRF mitigation review",
    ],
    deliverables: [
      "Executive Summary: High-level risk score, business impact, and priority matrix for founders & stakeholders.",
      "Technical Findings: Granular vulnerability entries with CVSS-aligned severity ratings.",
      "Proof-of-Concept Evidence: Step-by-step reproduction steps, request/response headers, and cURL commands.",
      "Developer Remediation: Exact code & framework-level guidance to eliminate vulnerabilities at the root.",
      "Retest Report: Complimentary re-verification testing to confirm full flaw closure post-patching.",
    ],
    timeframe: "3 - 7 Business Days (Scope-dependent)",
    engagementProcess: [
      "01. Scope & Rules of Engagement agreement with explicit written authorization",
      "02. Deep-dive manual heuristic testing and non-destructive exploitation",
      "03. Delivery of detailed report and optional technical debrief walkthrough",
      "04. Verification re-testing once development team applies patches",
    ],
    ctaText: "Request Web Assessment",
  },
  {
    id: "api-security",
    title: "API Security Assessment",
    subtitle: "Granular authorization, rate-limiting, and attack-surface audit for REST & GraphQL microservices.",
    badge: "High Demand",
    targetAudience: "Fintech, healthtech, and B2B SaaS platforms with mission-critical REST/GraphQL APIs and third-party integrations.",
    problem:
      "APIs power modern frontend and mobile clients but often expose underlying database entities directly. Improper endpoint authorization (BOLA/BFLA) and mass assignment vulnerabilities allow attackers to manipulate tenant records without touching the UI.",
    evidenceModel: {
      evidence: "Controlled REST & microservice API security lab demonstrating BOLA/BFLA elimination and strict DTO whitelisting.",
      method: "Authenticated route enumeration, JWT claim tampering, rate-limiting stress testing, and multi-tenant boundary inspection.",
      deliverable: "API Endpoint Risk Matrix + automated Postman/cURL test cases + gateway middleware fix specifications.",
      outcome: "Hardened microservice authorization boundaries and zero-trust API access controls.",
    },
    assessmentScope: [
      "API attack surface discovery & hidden/undocumented endpoint enumeration",
      "Broken Object Level Authorization (BOLA / IDOR) across multi-tenant boundaries",
      "Broken Function Level Authorization (BFLA) on administrative endpoints",
      "Token & session cryptographic validation (JWT algorithm confusion, expiry enforcement)",
      "Rate limiting, throttling & automated abuse / brute-force resistance",
      "Mass assignment & excessive data exposure inspection",
      "API parameter pollution, schema fuzzing & race condition testing",
    ],
    deliverables: [
      "Full API Endpoint Risk & Vulnerability Matrix across all audited routes.",
      "Role & Tenancy Boundary Audit: Detailed matrix of user permissions vs accessible resources.",
      "Reproduction Payloads: Automated Postman/cURL test cases for each finding.",
      "Gateway & Code-Level Fixes: Recommendations for middleware, DTO whitelisting, and rate-limiting.",
      "Verification Re-test: Confirmation audit verifying patched endpoints.",
    ],
    timeframe: "3 - 5 Business Days (Scope-dependent)",
    engagementProcess: [
      "01. API documentation / Postman collection review and authorization sign-off",
      "02. Systematic boundary testing across authenticated user roles and privilege tiers",
      "03. Delivery of actionable technical findings and remediation guide",
      "04. Post-remediation verification re-testing",
    ],
    ctaText: "Request API Assessment",
  },
  {
    id: "security-automation",
    title: "Security Automation & Telemetry Engineering",
    subtitle: "Custom Python automation scripts, log telemetry parsers, and automated detection workflows.",
    badge: "Secondary Service",
    targetAudience: "DevSecOps teams, system administrators, and engineering organizations needing scalable security checks.",
    problem:
      "Manual log inspections, repetitive threat intelligence lookups, and unmonitored server baselines consume hours of engineering time, leaving systems vulnerable to slow-moving intrusions.",
    evidenceModel: {
      evidence: "Production-tested Python telemetry ingestion pipelines and Linux auditd baseline parsers.",
      method: "Asynchronous log stream parsing, regex anomaly rule compilation, and containerized alert dispatching.",
      deliverable: "Modular Python scripts + Docker/systemd deployment runbooks + alert dispatch playbooks.",
      outcome: "Automated threat detection and over 70% reduction in manual log review overhead.",
    },
    assessmentScope: [
      "Custom Python security automation scripts tailored to your infrastructure",
      "Automated Linux server baseline auditing & SSH hardening checks",
      "Log telemetry ingestion & anomaly detection scripts (Syslog, Auth, Nginx)",
      "Automated IOC enrichment & threat intelligence reputation lookup feeds",
      "Custom detection rule development (MITRE ATT&CK aligned)",
      "Automated Markdown/HTML security audit report compilers",
    ],
    deliverables: [
      "Production-Ready Python Scripts: Clean, modular, well-documented code with zero bloat.",
      "Deployment Runbooks: Easy integration via Docker, systemd timers, or cron jobs.",
      "Custom Regex & Alert Rules: High-precision anomaly detection patterns.",
      "Technical Documentation & Maintenance Guide.",
    ],
    timeframe: "Flexible / Milestone-based",
    engagementProcess: [
      "01. Requirements definition and infrastructure workflow mapping",
      "02. Script development, unit testing, and sandbox verification",
      "03. Deployment assistance, runbook delivery, and handover walkthrough",
    ],
    ctaText: "Request Security Automation",
  },
];
