export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: "Founding" | "Leadership" | "Engineering" | "Support";
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  highlights?: string[];
}

export const PROFILE = {
  name: "Hrudyansh Kayastha",
  headline: "AI & Cybersecurity Engineer",
  tagline: "Founder @ Kerynth • Co-Founder & Technical Lead @ Agletras",
  shortBio:
    "Building intelligent, resilient systems across cybersecurity, autonomous defense, research intelligence, and production engineering. Specialized in web & API security, Linux infrastructure, detection engineering, and autonomous telemetry analysis.",
  fullBio:
    "I engineer systems that continuously collect signals, connect disparate evidence, reason over complex information, identify critical threats or opportunities, and enable high-confidence decisions. As the Founder of Kerynth, I architect autonomous cyber defense platforms (ALCDP-X). As Co-Founder & Technical Lead at Agletras, I build AI-powered research and intelligence engines.",
  location: "Nashik, Maharashtra, India",
  email: "hrudyansh06@gmail.com",
  socialLinks: {
    github: "https://github.com/hrudyanshkayastha",
    linkedin: "https://www.linkedin.com/in/hrudyansh-kayastha",
    email: "mailto:hrudyansh06@gmail.com",
  },
  roles: [
    {
      title: "Founder",
      organization: "Kerynth",
      period: "January 2026 • Present",
      focus: "AI-native cybersecurity, Autonomous Cyber Defense, Intelligent Security Infrastructure",
      flagship: "ALCDP-X",
    },
    {
      title: "Co-Founder & Technical Lead",
      organization: "Agletras",
      period: "June 2026 • Present",
      focus: "AI-powered Research & Intelligence, OSINT, Market & Competitive Intelligence",
      flagship: "Agletras Intelligence Engine",
    },
  ],
  experience: [
    {
      company: "Kerynth",
      role: "Founder",
      period: "January 2026 • Present",
      type: "Founding",
      description:
        "Founded an AI-native cybersecurity company focused on autonomous cyber defense and intelligent security infrastructure. Architected and lead development of ALCDP-X.",
      highlights: [
        "Architected ALCDP-X (Autonomous Linux Cyber Defense Platform) with an Observe -> Understand -> Decide -> Act -> Verify operational loop.",
        "Built modular real-time telemetry ingestion, session-based event correlation, and automated incident generation engines.",
        "Engineered automated SOAR response mechanisms with IP reputation tracking, risk scoring, and attack-path modeling.",
      ],
      technologies: ["Python", "Flask", "SQLAlchemy", "SQLite", "Redis Streams", "Docker", "Linux", "Detection Engineering", "MITRE ATT&CK"],
    },
    {
      company: "Agletras",
      role: "Co-Founder & Technical Lead",
      period: "June 2026 • Present",
      type: "Leadership",
      description:
        "Co-founded and lead technical architecture for an AI-powered research and intelligence platform transforming complex unstructured data into actionable strategic insights.",
      highlights: [
        "Designed multi-agent intelligence pipelines for automated market research, competitive tracking, and audience discovery.",
        "Integrated OSINT gathering workflows and trend discovery systems with autonomous synthesis models.",
        "Architected production-grade data pipelines supporting continuous research and strategic intelligence operations.",
      ],
      technologies: ["Python", "AI Workflows", "OSINT", "Knowledge Graphs", "REST APIs", "Automated Pipelines"],
    },
    {
      company: "Bits and Bytes Services",
      role: "Technical Support Specialist",
      period: "August 2023 • September 2025",
      type: "Support",
      description:
        "Provided core technical support, systems maintenance, hardware/software troubleshooting, and seamless IT infrastructure migration assistance.",
      highlights: [
        "Managed day-to-day enterprise IT infrastructure, hardware troubleshooting, and network diagnostics.",
        "Executed secure workstation and server data migration procedures with minimal operational downtime.",
        "Enforced security hygiene, operating system patch management, and endpoint compliance protocols.",
      ],
      technologies: ["Linux", "Windows Server", "Networking", "System Migration", "Troubleshooting", "Security Compliance"],
    },
  ] as ExperienceItem[],
  education: [
    {
      institution: "K.K. Wagh Institute of Engineering Education & Research",
      degree: "Associate of Science - AS",
      field: "Cyber Security",
      period: "2024 • 2027",
      highlights: [
        "Core coursework in Network Security, Cryptography, Web Application Vulnerabilities, Systems Hardening, and Operating Systems Internals.",
        "Active technical research in autonomous defensive systems and threat correlation architectures.",
      ],
    },
  ] as EducationItem[],
};
