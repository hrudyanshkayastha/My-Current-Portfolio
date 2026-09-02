export interface IntelligenceDomain {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  iconName: string;
}

export const AGLETRAS_DATA = {
  name: "Agletras",
  subtitle: "AI-Powered Research & Intelligence Platform",
  tagline: "Autonomous Market, OSINT, & Strategic Intelligence Workflows",
  role: "Co-Founder & Technical Lead",
  period: "June 2026 • Present",
  overview:
    "Agletras is an advanced intelligence platform engineered to transform massive, noisy, and unstructured public data streams into structured, high-signal intelligence. Designed for decision-makers and founders, it connects open-source intelligence (OSINT), market trends, competitor movements, and audience signals into dynamic knowledge graphs.",
  pillars: [
    {
      id: "market-intelligence",
      title: "Market & Competitive Intelligence",
      description: "Automated tracking of industry shifts, competitive positioning, product launches, pricing shifts, and strategic developments.",
      capabilities: [
        "Continuous competitor telemetry & feature diffing",
        "Market sentiment & whitespace discovery",
        "Regulatory & macroeconomic shift tracking",
      ],
      iconName: "TrendingUp",
    },
    {
      id: "osint-automation",
      title: "OSINT & Multi-Source Ingestion",
      description: "Autonomous harvesting and synthesis of public data, registries, technical repositories, discussion forums, and disclosures.",
      capabilities: [
        "Automated open-source intelligence aggregation",
        "Entity resolution & relationship extraction",
        "Noise filtering & signal-to-noise optimization",
      ],
      iconName: "Globe",
    },
    {
      id: "audience-research",
      title: "Audience & Customer Signal Analysis",
      description: "Deep qualitative and quantitative analysis of user behavior, friction points, community discussions, and unmet demands.",
      capabilities: [
        "Unstructured user feedback synthesis",
        "Intent & sentiment cluster mapping",
        "Persona & ICP behavioral modeling",
      ],
      iconName: "Users",
    },
    {
      id: "trend-discovery",
      title: "Emerging Trend & Opportunity Discovery",
      description: "Early-stage pattern recognition across cross-domain technological shifts, market anomalies, and emerging technology vectors.",
      capabilities: [
        "Cross-domain signal clustering",
        "Velocity & momentum tracking for tech trends",
        "Automated strategic executive briefs",
      ],
      iconName: "Sparkles",
    },
  ] as IntelligenceDomain[],
  architecture: [
    {
      step: "01. INGEST",
      title: "Multi-Source Harvester",
      detail: "Concurrent connectors collecting web, technical, social, and registry telemetry.",
    },
    {
      step: "02. EXTRACT",
      title: "Entity & Semantic Graph",
      detail: "NLP pipelines resolving entities, claims, relationships, and temporal changes.",
    },
    {
      step: "03. REASON",
      title: "Autonomous Synthesis",
      detail: "Multi-agent LLM workflows corroborating facts and identifying strategic inflection points.",
    },
    {
      step: "04. DELIVER",
      title: "Actionable Intelligence",
      detail: "Automated executive digests, real-time trigger alerts, and interactive graph explorations.",
    },
  ],
  technologies: [
    "Python",
    "Multi-Agent AI Workflows",
    "Knowledge Graphs",
    "OSINT Automation",
    "Vector Embeddings",
    "REST & Async Pipelines",
    "Data Pipelines",
  ],
};
