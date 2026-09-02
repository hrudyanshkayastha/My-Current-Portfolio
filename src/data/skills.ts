export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: "Proficient" | "Advanced" | "Core Competency";
    tags: string[];
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity & Offensive Assessment",
    description: "Core security engineering, vulnerability discovery, threat hunting, and web/API penetration testing.",
    iconName: "ShieldAlert",
    skills: [
      { name: "Web Application Security", level: "Advanced", tags: ["OWASP Top 10", "Burp Suite", "Auth & Session Security"] },
      { name: "API Security Assessment", level: "Advanced", tags: ["BOLA/IDOR", "JWT Security", "Rate Limiting", "REST/GraphQL"] },
      { name: "Threat Detection & Hunting", level: "Advanced", tags: ["IOC Analysis", "Behavioral Correlation", "Telemetry"] },
      { name: "Detection Engineering", level: "Proficient", tags: ["MITRE ATT&CK", "Custom Detection Rules", "DSL"] },
      { name: "Security Architecture Review", level: "Core Competency", tags: ["Access Control", "Threat Modeling", "Least Privilege"] },
      { name: "Network Security & Recon", level: "Proficient", tags: ["Nmap", "Wireshark", "Service Enumeration"] },
    ],
  },
  {
    id: "systems-linux",
    title: "Systems, Infrastructure & Linux",
    description: "Deep Linux OS security, container isolation, system monitoring, and infrastructure hardening.",
    iconName: "Server",
    skills: [
      { name: "Linux OS Internals & Hardening", level: "Advanced", tags: ["Permissions", "SSH Hardening", "Systemd Services", "Auditd"] },
      { name: "Container & Cloud Security", level: "Proficient", tags: ["Docker", "Isolation", "Secrets Management"] },
      { name: "Security Automation", level: "Advanced", tags: ["Python", "AsyncIO", "Bash Scripting", "REST APIs"] },
      { name: "Log Telemetry & Parsing", level: "Advanced", tags: ["Syslog", "Auth Logs", "Regex Engines", "SQLite"] },
      { name: "Production System Operations", level: "Proficient", tags: ["Migration", "Troubleshooting", "Reliability"] },
    ],
  },
  {
    id: "ai-defense",
    title: "AI & Autonomous Defense",
    description: "Architecting autonomous reasoning loops, attack-path modeling, and defensive AI governance.",
    iconName: "Cpu",
    skills: [
      { name: "Autonomous Defense Systems", level: "Advanced", tags: ["Observe-Understand-Decide-Act-Verify", "ALCDP-X"] },
      { name: "AI Security & Guardrails", level: "Proficient", tags: ["Prompt Injection Defense", "Invariant Verification"] },
      { name: "Attack-Path Modeling", level: "Proficient", tags: ["DAG Analysis", "Lateral Movement", "Risk Scoring"] },
      { name: "AI-Assisted Threat Triage", level: "Proficient", tags: ["Contextual Synthesis", "Incident Prioritization"] },
    ],
  },
  {
    id: "intelligence-osint",
    title: "Intelligence & OSINT Systems",
    description: "Multi-agent research pipelines, entity extraction, and automated market/competitive intelligence.",
    iconName: "Globe",
    skills: [
      { name: "OSINT Automation", level: "Advanced", tags: ["Public Data Harvesters", "Registry Scraping", "Entity Graphing"] },
      { name: "Competitive & Market Intelligence", level: "Advanced", tags: ["Strategic Signals", "Whitespace Detection"] },
      { name: "Research Automation Pipelines", level: "Proficient", tags: ["Multi-Agent Workflows", "Synthesis Briefs"] },
      { name: "Knowledge Graph Modeling", level: "Proficient", tags: ["Relational Data", "Trend Clustering"] },
    ],
  },
];
