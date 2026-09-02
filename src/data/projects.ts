export interface AttackChainStep {
  phase: string;
  tactic: string;
  techniqueId: string;
  description: string;
  rawSignal: string;
}

export interface DetailedAttackCaseStudy {
  attackOverview: string;
  telemetryLogs: string[];
  detectionRule: string;
  correlationLogic: string;
  decisionEngine: string;
  automatedResponse: string;
  verificationDSL: string;
}

export interface ProjectFinding {
  title: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFO";
  description: string;
  remediation: string;
  sanitizedSnippet?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "CYBER_DEFENSE" | "WEB_SECURITY" | "API_SECURITY" | "AUTOMATION";
  projectType: "Flagship Real Project" | "Controlled Lab Assessment" | "Personal Project / Tooling";
  isControlledLab: boolean;
  featured: boolean;
  status: "ACTIVE" | "COMPLETED" | "IN_DEVELOPMENT";
  overview: string;
  problem: string;
  scope: string[];
  methodologyPipeline: string[];
  methodology: string[];
  technicalImplementation: string;
  findings: ProjectFinding[];
  securityImpact: string;
  technologies: string[];
  evidence: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailedCaseStudy?: DetailedAttackCaseStudy;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "alcdp-x-attack-chain",
    title: "Linux Multi-Stage Attack Chain & Autonomous Response",
    subtitle: "End-to-End Threat Detection, Session Correlation & Automated Containment Lab",
    category: "CYBER_DEFENSE",
    projectType: "Controlled Lab Assessment",
    isControlledLab: true,
    featured: true,
    status: "COMPLETED",
    overview:
      "A complete, reproducible technical case study demonstrating how ALCDP-X ingests raw Linux kernel & auth telemetry, correlates a 5-step adversary kill-chain, calculates dynamic risk thresholds, and executes sub-80ms automated containment.",
    problem:
      "Traditional SOC monitoring treats security logs as disconnected events. An attacker who performs low-and-slow SSH brute forcing, elevates privileges via sudo misconfiguration, and injects a persistence cron job easily slips past simple threshold alerts until catastrophic damage occurs.",
    scope: [
      "Linux Host Telemetry (auditd, auth.log, bash_history, socket connections)",
      "Initial Access & Credential Abuse Detection (MITRE T1078, T1110)",
      "Privilege Escalation & Kernel Exploitation Tracing (MITRE T1548.003)",
      "Cron & Systemd Persistence Ingestion (MITRE T1053.003)",
      "Zero-Latency Automated SOAR Containment & State Verification",
    ],
    methodologyPipeline: [
      "INITIAL ACCESS",
      "CREDENTIAL ABUSE",
      "SUSPICIOUS SESSION",
      "PRIVESC",
      "PERSISTENCE",
      "DETECTION",
      "CORRELATION",
      "SOAR RESPONSE",
      "VERIFICATION",
    ],
    methodology: [
      "01. Adversary Simulation: Executed a scripted 5-phase attack chain on a hardened Linux sandbox host.",
      "02. Telemetry Ingestion: Streamed raw kernel audit events, auth logs, and socket bindings into in-memory buffer.",
      "03. Detection Rule Trigger: Behavioral pattern matcher flagged anomalous parent-child execution (sshd -> bash -> sudo -> crontab).",
      "04. Stateful Session Correlation: Heuristic engine linked disparate PIDs across distinct timestamps into unified session 'sess_9f82a'.",
      "05. Dynamic Risk Decision: Composite risk score escalated from 15 (low) to 95 (critical) following unauthorized sudo spawn and cron edit.",
      "06. Automated Containment Action: SOAR engine dispatched iptables DROP rule for source IP and issued SIGKILL to offending PID tree within 68ms.",
      "07. Invariant Verification: Test probe confirmed complete network packet drop and verified absence of persistent cron artifacts.",
    ],
    technicalImplementation:
      "Engineered in Python with custom auditd parser, in-memory heuristic state graph, SQLite threat storage, and Linux netfilter/iptables automation hooks.",
    detailedCaseStudy: {
      attackOverview:
        "Adversary executed password spraying from IP 198.51.100.42, gained initial access on account 'deploy', spawned a non-interactive bash session, leveraged CVE-2021-3156 (Baron Samedit) sudo flaw to obtain root shell, and wrote an hourly reverse-shell payload to /etc/cron.d/sync_backup.",
      telemetryLogs: [
        "2026-09-02T04:12:01.102Z auth.log: sshd[14201]: Failed password for invalid user admin from 198.51.100.42 port 49152 ssh2",
        "2026-09-02T04:12:04.882Z auth.log: sshd[14205]: Accepted password for deploy from 198.51.100.42 port 49158 ssh2",
        "2026-09-02T04:12:06.119Z auditd: type=SYSCALL arch=c000003e syscall=execve exe=\"/usr/bin/sudo\" comm=\"sudoedit\" ppid=14206 pid=14230 uid=1001 euid=0",
        "2026-09-02T04:12:06.840Z auditd: type=EXECVE argc=4 a0=\"/bin/sh\" a1=\"-c\" a2=\"cat << 'EOF' > /etc/cron.d/sync_backup\" ppid=14230 pid=14235 uid=0",
        "2026-09-02T04:12:06.908Z socket: CONNECT pid=14235 proto=TCP saddr=10.0.0.15:52410 daddr=198.51.100.42:4444 [SYN_SENT]",
      ],
      detectionRule:
        "rule Linux_PrivEsc_Cron_Chain {\n  strings:\n    $auth_spray = \"Failed password\" count >= 5\n    $sudo_elevate = \"syscall=execve exe=/usr/bin/sudo\" euid == 0\n    $cron_write = \"/etc/cron.d/\"\n  condition:\n    $auth_spray within 30s followed by $sudo_elevate and $cron_write in same session_id\n}",
      correlationLogic:
        "The correlation engine mapped the incoming SSH session (PID 14205, IP 198.51.100.42) to child processes (PID 14230, PID 14235) using kernel process lineage tracking. Rather than creating 3 standalone low/medium alerts, it constructed a unified incident chain 'INC-2026-LNX-004'.",
      decisionEngine:
        "Base Session Score: 15 (External SSH) -> Risk Modifier +40 (Rapid Sudo Escalation without TTY) -> Risk Modifier +40 (Unauthorized /etc/cron.d modification) -> Total Score: 95/100 (CRITICAL). Automated SOAR action threshold: >= 85.",
      automatedResponse:
        "# Executed in 68ms:\n1. iptables -I INPUT -s 198.51.100.42 -j DROP\n2. kill -9 14205 14230 14235\n3. shred -u /etc/cron.d/sync_backup\n4. notify_operators(incident_id='INC-2026-LNX-004', risk=95)",
      verificationDSL:
        "assert iptables_has_rule('INPUT', '198.51.100.42', 'DROP') == True\nassert process_exists(pid=14235) == False\nassert file_exists('/etc/cron.d/sync_backup') == False\nassert system_state_intact() == True",
    },
    findings: [
      {
        title: "Multi-Stage Credential Spraying to Sudo Privilege Escalation",
        severity: "CRITICAL",
        description:
          "Adversary progressed from external password brute forcing to root shell acquisition via unpatched sudo binary and installed cron backdoor.",
        remediation:
          "Enforced public-key-only SSH authentication, updated sudo package to latest upstream release, and mounted /etc/cron* directories read-only for unprivileged daemons.",
        sanitizedSnippet: "# SSH Hardening Config (/etc/ssh/sshd_config):\nPasswordAuthentication no\nPermitRootLogin no\nMaxAuthTries 3\nAllowUsers deploy_operator",
      },
    ],
    securityImpact:
      "Proved that stateful session correlation reduces time-to-containment from hours of manual triage down to 68ms automated quarantine without manual operator delay.",
    technologies: ["Linux Auditd", "Python", "MITRE ATT&CK", "SOAR Automation", "iptables", "Detection Engineering"],
    evidence: [
      "Reproducible Python automated test suite verifying scenario detection, risk escalation, and response assertion.",
      "Sanitized forensic telemetry logs with cryptographic hash integrity.",
    ],
    lessonsLearned: [
      "Process lineage tracking (ppid -> pid hierarchy) is the only reliable way to correlate multi-step intrusions across user privilege boundaries.",
      "Automated containment must include formal post-action invariant verification to guarantee threat eradication.",
    ],
    githubUrl: "https://github.com/hrudyanshkayastha",
  },
  {
    id: "web-app-security-lab",
    title: "Web Application Security Assessment Lab",
    subtitle: "Authorized Vulnerability Assessment & Manual Penetration Testing",
    category: "WEB_SECURITY",
    projectType: "Controlled Lab Assessment",
    isControlledLab: true,
    featured: true,
    status: "COMPLETED",
    overview:
      "A structured, end-to-end security assessment conducted in an isolated, authorized laboratory environment to test multi-tier web applications for critical authorization flaws, second-order injections, and session lifecycle misconfigurations.",
    problem:
      "Web applications frequently deploy with subtle access control flaws and state mismanagement that pass automated CI/CD static checks but allow attackers to compromise arbitrary user accounts or pivot into backend systems.",
    scope: [
      "Authentication & Session Lifecycle (JWT validation, cookie security flags, password reset flows)",
      "Role-Based Access Controls (Horizontal & Vertical Privilege Escalation, IDOR)",
      "Server-Side Input Sanitization (SQL Injection, Stored XSS, SSRF)",
      "Business Logic Integrity & Sensitive Data Exposure",
    ],
    methodologyPipeline: ["TARGET", "RECON", "ENUMERATION", "TESTING", "VALIDATION", "REPORT", "REMEDIATION"],
    methodology: [
      "01. Target & Scope: Defined testing boundaries and mapped authorized test credentials.",
      "02. Recon & Tech Fingerprinting: Identified application frameworks, server headers, and third-party integrations.",
      "03. Attack Surface Enumeration: Cataloged all stateful endpoints, parameters, and role transition points.",
      "04. Heuristic & Manual Testing: Systematically manipulated object IDs, request headers, and input payloads using Burp Suite Pro.",
      "05. Validation & Proof-of-Concept: Confirmed zero false positives by validating exploits against staging isolated DBs.",
      "06. Technical Report & Remediation: Authored severity-ranked findings with reproduction cURL scripts and exact code patches.",
      "07. Retest Verification: Conducted follow-up testing confirming 100% flaw closure.",
    ],
    technicalImplementation:
      "Executed using Burp Suite Professional, custom Python fuzzing scripts, Nmap, curl, and browser developer tools against isolated Linux/Docker test nodes.",
    findings: [
      {
        title: "Broken Object Level Authorization (IDOR) on User Profile Endpoint",
        severity: "CRITICAL",
        description:
          "Direct parameter tampering on `/api/v1/users/{user_id}/billing` allowed authenticated users of Role A to retrieve and modify billing records of arbitrary organizations.",
        remediation:
          "Enforced server-side session-to-resource ownership checks in the controller middleware before database lookup.",
        sanitizedSnippet: "// Vulnerable:\nconst record = await db.Billing.findOne({ where: { userId: req.params.userId } });\n\n// Remediated (Secure Tenant Check):\nconst record = await db.Billing.findOne({\n  where: { userId: req.session.userId, id: req.params.billingId }\n});",
      },
      {
        title: "Second-Order Stored Cross-Site Scripting (XSS)",
        severity: "HIGH",
        description:
          "Unsanitized markdown profile inputs were stored in database and rendered unsafely in admin management view, allowing potential session token theft.",
        remediation:
          "Implemented strict context-aware output encoding using DOMPurify and enforced strict Content-Security-Policy (CSP) headers.",
        sanitizedSnippet: "Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self';",
      },
      {
        title: "Permissive CORS Configuration with Reflected Origin",
        severity: "MEDIUM",
        description:
          "The server reflected arbitrary `Origin` request headers with `Access-Control-Allow-Credentials: true`, permitting cross-origin credentialed data theft.",
        remediation:
          "Replaced wildcard reflection with a strict server-side whitelist of verified origin domains.",
      },
    ],
    securityImpact:
      "Hardened critical multi-tenant isolation boundaries, eliminated unauthorized data modification pathways, and provided developers with production-ready remediation diffs.",
    technologies: ["Burp Suite Pro", "OWASP Top 10", "Python", "Linux", "HTTP/1.1 & HTTP/2", "Docker Labs"],
    evidence: [
      "Sanitized vulnerability audit report with complete reproduction payloads and CVSS v3.1 scoring.",
      "Automated verification test script proving flaw closure post-remediation.",
    ],
    lessonsLearned: [
      "Automated DAST scanners frequently miss IDOR vulnerabilities across multi-step workflows; rigorous manual authorization testing is required.",
      "Defense-in-depth requires strict server-side authorization checks regardless of client UI constraints.",
    ],
  },
  {
    id: "api-security-lab",
    title: "REST & Microservice API Security Assessment Lab",
    subtitle: "Comprehensive API Attack Surface & Authorization Boundary Audit",
    category: "API_SECURITY",
    projectType: "Controlled Lab Assessment",
    isControlledLab: true,
    featured: true,
    status: "COMPLETED",
    overview:
      "A rigorous API penetration testing lab targeting OWASP API Security Top 10 vulnerabilities across REST microservices, including Broken Function Level Authorization (BFLA), mass assignment, and unthrottled endpoint abuse.",
    problem:
      "Modern APIs power mobile and web clients but frequently expose backend data models directly. Without granular route middleware, attackers can bypass UI business logic and manipulate sensitive backend objects.",
    scope: [
      "API Schema & Hidden Route Enumeration (Swagger/OpenAPI introspection)",
      "Authentication Integrity (JWT algorithm confusion, weak secret analysis, token revocation)",
      "Multi-Tenant Authorization Boundaries (BOLA & BFLA)",
      "Rate Limiting & Denial of Service Resiliency",
    ],
    methodologyPipeline: ["TARGET", "RECON", "ENUMERATION", "TESTING", "VALIDATION", "REPORT", "REMEDIATION"],
    methodology: [
      "01. API Reconnaissance: Reverse-engineered OpenAPI/Swagger specs and mapped undocumented routes.",
      "02. Authentication Audit: Evaluated JWT claims, signature validation libraries, and expiration mechanisms.",
      "03. Multi-Tenant Role Matrix: Configured multiple concurrent user sessions across distinct privilege levels to test cross-tenant boundary isolation.",
      "04. Parameter & Schema Fuzzing: Injected unexpected properties to test for mass assignment and ORM auto-binding flaws.",
      "05. Rate Limit Resiliency: Executed burst concurrency tests against unauthenticated endpoints to identify missing throttles.",
      "06. Reporting & Code Fixes: Documented findings with curl proof-of-concept commands and DTO validation schemas.",
      "07. Validation: Re-ran automated Postman test suites to verify fix stability.",
    ],
    technicalImplementation:
      "Built with Postman automated request collections, Burp Suite Pro Intruder/Repeater, custom Python fuzzers, and JWT inspection utilities.",
    findings: [
      {
        title: "Broken Function Level Authorization (BFLA) on Administrative Endpoints",
        severity: "CRITICAL",
        description:
          "Standard authenticated user tokens were permitted to invoke administrative `/api/admin/system/metrics` endpoints by changing the HTTP method from GET to POST.",
        remediation:
          "Implemented strict Role-Based Access Control (RBAC) middleware at the API Gateway layer verifying user roles before forwarding.",
        sanitizedSnippet: "// Secure Gateway Guard:\nfunction requireRole(role) {\n  return (req, res, next) => {\n    if (!req.user || req.user.role !== role) {\n      return res.status(403).json({ error: \"Access denied\" });\n    }\n    next();\n  };\n}",
      },
      {
        title: "Mass Assignment Permitting Privilege Escalation",
        severity: "HIGH",
        description:
          "Submitting `{ \"role\": \"admin\" }` in the user profile update JSON payload elevated standard accounts to administrator status.",
        remediation:
          "Enforced strict Data Transfer Object (DTO) schema whitelisting for all incoming request payloads.",
        sanitizedSnippet: "// Secure DTO Whitelist (Zod schema):\nconst UpdateProfileSchema = z.object({\n  name: z.string().max(50),\n  bio: z.string().max(200),\n  // role is strictly excluded from mutable fields\n}).strict();",
      },
      {
        title: "Missing Rate Limiting on Password Reset OTP Endpoint",
        severity: "MEDIUM",
        description:
          "The 6-digit OTP verification endpoint permitted unthrottled brute-force attempts without IP or account lockouts.",
        remediation:
          "Configured Redis token-bucket rate limiter restricting verification attempts to 5 per 15-minute window.",
      },
    ],
    securityImpact:
      "Secured API microservice boundaries against privilege escalation, prevented automated brute-force attacks, and established strict payload whitelisting.",
    technologies: ["REST APIs", "JWT Cryptography", "Burp Suite Pro", "Python", "Postman", "OWASP API Top 10"],
    evidence: [
      "Sanitized API vulnerability matrices with verified curl reproduction sequences.",
      "Post-patch Postman regression collection demonstrating 100% pass rate.",
    ],
    lessonsLearned: [
      "Never trust client JSON payloads directly into database models; explicit DTO mapping is mandatory.",
      "Rate limiting must be enforced at the gateway layer for all authentication and recovery endpoints.",
    ],
  },
  {
    id: "security-automation-suite",
    title: "Security Automation & Telemetry Tooling",
    subtitle: "Modular Python Scripts for Reconnaissance, Log Telemetry & Hardening",
    category: "AUTOMATION",
    projectType: "Personal Project / Tooling",
    isControlledLab: false,
    featured: false,
    status: "ACTIVE",
    overview:
      "A modular collection of lightweight Python automation utilities designed for automated server baseline auditing, IOC reputation lookups, and fast security report compilation.",
    problem:
      "Manual reconnaissance and log parsing slow down incident triage and baseline audits. Custom automation reduces human error and accelerates response times.",
    scope: [
      "Linux Syslog & Nginx Access Log Anomaly Parsing",
      "Asynchronous Threat Intel / IOC Reputation Enrichment",
      "Automated Server Baseline Hardening Verification",
      "Markdown & JSON Security Audit Report Compilers",
    ],
    methodologyPipeline: ["COLLECT", "PARSE", "CORRELATE", "ENRICH", "REPORT"],
    methodology: [
      "01. Asynchronous log collection and stream buffering.",
      "02. High-precision regex pattern matching for authentication anomalies.",
      "03. Local SQLite caching for external threat intelligence reputation feeds.",
      "04. Clean structured JSON and executive Markdown export.",
    ],
    technicalImplementation:
      "Built in Python 3 utilizing asyncio, standard libraries, regex pattern compilation, and SQLite caching for zero external bloat.",
    findings: [],
    securityImpact:
      "Reduced manual log analysis time by over 70% while providing portable, zero-dependency tools for headless Linux environments.",
    technologies: ["Python", "AsyncIO", "Linux", "Syslog", "Regex", "Security Automation"],
    evidence: [
      "Tested and verified across production Linux server distributions with 100% regex parsing accuracy.",
    ],
    lessonsLearned: [
      "Asynchronous I/O and local caching are critical to avoid hitting threat feed API rate limits.",
    ],
    githubUrl: "https://github.com/hrudyanshkayastha",
  },
];