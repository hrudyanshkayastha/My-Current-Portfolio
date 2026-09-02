export interface ArchitectureStage {
  stage: "OBSERVE" | "UNDERSTAND" | "DECIDE" | "ACT" | "VERIFY";
  title: string;
  description: string;
  components: string[];
  metrics?: string;
}

export interface BenchmarkMetric {
  label: string;
  value: string;
  description: string;
  verificationMethod: string;
}

export interface SystemComponent {
  name: string;
  category: "Ingestion" | "Correlation" | "Intelligence" | "Response" | "Presentation";
  description: string;
  status: "IMPLEMENTED" | "IN_DEVELOPMENT" | "RESEARCH";
  tech: string[];
}

export const ALCDPX_DATA = {
  name: "ALCDP-X",
  subtitle: "Autonomous Linux Cyber Defense Platform",
  tagline: "Experimental SOC Engine & Autonomous Response Loop",
  company: "Kerynth",
  overview:
    "ALCDP-X is a modular cybersecurity defense platform engineered to simulate, detect, correlate, and autonomously respond to attacker progression in Linux environments. Operating beyond static SIEM rules, it correlates disparate multi-stage signals into coherent attack chains across the full MITRE ATT&CK matrix.",
  
  reproducibleMetrics: [
    {
      value: "10,000+",
      label: "Telemetry Events Ingested",
      description: "Synthetic Linux auditd, syslog, and auth.log streams parsed with sub-millisecond throughput.",
      verificationMethod: "In-memory event_store.py benchmark testsuite",
    },
    {
      value: "27",
      label: "Attack Scenarios Validated",
      description: "Simulated multi-stage Linux intrusion progressions executed against sandbox environments.",
      verificationMethod: "Deterministic scenario replay engine",
    },
    {
      value: "18",
      label: "MITRE ATT&CK Techniques",
      description: "Sub-techniques mapped including T1078, T1059.004, T1053.003, and T1548.001.",
      verificationMethod: "MITRE matrix compliance mapping matrix",
    },
    {
      value: "12",
      label: "Attack Chains Correlated",
      description: "Disjoint host signals grouped into stateful incident narratives across temporal windows.",
      verificationMethod: "Session correlation heuristic test suite",
    },
    {
      value: "5",
      label: "Automated SOAR Policies",
      description: "Policy-driven containment actions tested: IP quarantine, process kill, session revoke.",
      verificationMethod: "Simulated containment hook regression tests",
    },
    {
      value: "< 80ms",
      label: "Simulated MTTC",
      description: "Mean time to contain from high-confidence risk threshold breach to firewall isolation.",
      verificationMethod: "End-to-end telemetry-to-response timer",
    },
  ] as BenchmarkMetric[],

  loop: [
    {
      stage: "OBSERVE",
      title: "Telemetry & Ingestion",
      description: "Real-time capture of Linux kernel events, auth logs, SSH sessions, and network telemetry into an in-memory event store.",
      components: ["event_store.py", "geoip_lookup.py", "Linux Auditd / Auth Collector"],
      metrics: "Sub-millisecond ingestion & parsing",
    },
    {
      stage: "UNDERSTAND",
      title: "Correlation & Threat Modeling",
      description: "Session-based correlation logic, attack chain construction, and multi-vector campaign progression detection.",
      components: ["attack_chain.py", "campaign_engine.py", "attack_path_engine.py"],
      metrics: "Multi-stage session correlation",
    },
    {
      stage: "DECIDE",
      title: "Risk Engine & Triage",
      description: "Automated incident generation, severity scoring, IOC reputation enrichment, and MITRE ATT&CK tactic mapping.",
      components: ["threat_engine.py", "severity.py", "ip_reputation.py"],
      metrics: "Deterministic triage & threat scoring",
    },
    {
      stage: "ACT",
      title: "Automated Containment (SOAR)",
      description: "Orchestrated tactical response execution, IP blocking state management, and isolation workflows.",
      components: ["soar/engine.py", "state/blocked_ips.json", "Firewall / Iptables hooks"],
      metrics: "Zero-latency automated containment",
    },
    {
      stage: "VERIFY",
      title: "Response Invariant Verification",
      description: "Automated post-action validation ensuring containment effectiveness and state integrity without regressions.",
      components: ["test_release_invariants.py", "Verification DSL", "State Audit"],
      metrics: "Provable response validation",
    },
  ] as ArchitectureStage[],

  statusBreakdown: {
    implemented: [
      {
        name: "In-Memory Event Store & Ingestion",
        category: "Ingestion",
        description: "Fast in-memory event processing pipeline for high-throughput Linux security telemetry and session tracking.",
        status: "IMPLEMENTED",
        tech: ["Python", "Flask", "SQLite", "SQLAlchemy"],
      },
      {
        name: "Session Correlation & Campaign Engine",
        category: "Correlation",
        description: "Stateful session correlation logic modeling attacker behavior progression and grouping disjoint security signals.",
        status: "IMPLEMENTED",
        tech: ["Python", "Heuristic Correlation", "Session Store"],
      },
      {
        name: "Automated Incident Generation & Scoring",
        category: "Intelligence",
        description: "Dynamic incident synthesizer transforming correlated events into actionable findings with severity matrix.",
        status: "IMPLEMENTED",
        tech: ["Severity Classifier", "Threat Engine", "IOC Matcher"],
      },
      {
        name: "Simulated SOAR Response Engine",
        category: "Response",
        description: "Automated containment dispatcher with IP reputation checks and local blocking state persistence.",
        status: "IMPLEMENTED",
        tech: ["SOAR Engine", "JSON State Store", "Firewall Hooks"],
      },
      {
        name: "Live SOC Operator Dashboard",
        category: "Presentation",
        description: "Real-time interactive SOC telemetry monitor with dynamic charting, session feeds, and incident management.",
        status: "IMPLEMENTED",
        tech: ["Flask", "Chart.js", "REST Endpoints"],
      },
    ] as SystemComponent[],

    inDevelopment: [
      {
        name: "Redis Streams Distributed Event Bus",
        category: "Ingestion",
        description: "Decoupled horizontal event pub/sub pipeline enabling distributed telemetry collection across multiple host agents.",
        status: "IN_DEVELOPMENT",
        tech: ["Redis Streams", "Docker", "Async Python"],
      },
      {
        name: "Graph-Based Attack-Path Compiler",
        category: "Intelligence",
        description: "Directed acyclic graph (DAG) compiler evaluating multi-step lateral movement and privilege escalation paths.",
        status: "IN_DEVELOPMENT",
        tech: ["Graph Theory", "MITRE ATT&CK Matrix", "Network Topology"],
      },
      {
        name: "Behavioral DSL & Linux Hardening Rules",
        category: "Intelligence",
        description: "Domain-specific policy language for defining declarative kernel-level detection rules and security invariants.",
        status: "IN_DEVELOPMENT",
        tech: ["DSL Compiler", "Linux Audit Subsystem", "PyTest Testsuite"],
      },
    ] as SystemComponent[],

    research: [
      {
        name: "Multi-Agent Autonomous LLM Triage Layer",
        category: "Intelligence",
        description: "Cooperating AI agents performing deep root-cause hypothesis generation and autonomous forensic reasoning.",
        status: "RESEARCH",
        tech: ["Autonomous Reasoning", "Forensics Graphs", "LLM Guardrails"],
      },
      {
        name: "Autonomous Rollback & State Healing",
        category: "Response",
        description: "Zero-loss automated rollback for erroneous containment actions based on formal state verification invariants.",
        status: "RESEARCH",
        tech: ["Invariant Verification", "State Snapshotting", "eBPF"],
      },
    ] as SystemComponent[],
  },
  technologies: [
    "Python",
    "Flask",
    "SQLAlchemy",
    "SQLite",
    "Redis Streams",
    "Docker",
    "Linux Systems",
    "Detection Engineering",
    "MITRE ATT&CK",
    "SOAR Workflows",
  ],
};
