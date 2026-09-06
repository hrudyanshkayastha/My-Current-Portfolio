# Hrudyansh Kayastha

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:020617,50:0f172a,100:111827&height=220&section=header&text=HRUDYANSH%20KAYASTHA&fontSize=44&fontColor=ffffff&animation=fadeIn&fontAlignY=38" alt="Hrudyansh Kayastha Header" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=2800&pause=900&color=38BDF8&center=true&vCenter=true&width=850&lines=Founder+%40+Kerynth;AI+%26+Cybersecurity+Engineer;Building+Autonomous+Cyber+Defense;Security+Infrastructure+%7C+AI+%7C+Automation" alt="Typing SVG" />
</p>

<p align="center">
  <strong>Founder @ Kerynth &bull; AI & Cybersecurity Engineer &bull; Security Systems Builder</strong>
  <br />
  Building cybersecurity infrastructure, defensive automation, and AI-powered security systems.
</p>

<p align="center">
  <a href="https://hrudyansh.netlify.app/">
    <img src="https://img.shields.io/badge/Portfolio-hrudyansh.netlify.app-0f172a?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://www.linkedin.com/in/hrudyansh-kayastha/">
    <img src="https://img.shields.io/badge/LinkedIn-Hrudyansh%20Kayastha-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:hrudyansh71@gmail.com">
    <img src="https://img.shields.io/badge/Email-hrudyansh71%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://github.com/hrudyanshkayastha">
    <img src="https://img.shields.io/badge/GitHub-hrudyanshkayastha-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=hrudyanshkayastha&style=for-the-badge&color=0f172a" alt="Profile Views" />
</p>

---

## Who I Am

I am a founder and cybersecurity engineer focused on building practical, resilient security infrastructure rather than abstract research models. My work centers on the engineering required to detect threats, correlate fragmented telemetry, reason over attack lineage, and automate defensive containment.

My focus sits at the convergence of:
- **Cybersecurity Infrastructure**: Low-level telemetry ingestion, security architecture, and system hardening.
- **Detection Engineering**: Behavioral rules, stateful session correlation, and MITRE ATT&CK mapping.
- **Autonomous Cyber Defense**: Closed-loop observe &rarr; understand &rarr; decide &rarr; act &rarr; verify workflows.
- **AI & Automation**: Applied machine intelligence for triage, threat intelligence synthesis, and defensive decisions.
- **Application Security**: Rigorous manual and automated web & API vulnerability assessments.

```text
SIGNAL INGESTION ➔ STATEFUL CORRELATION ➔ ATTACK REASONING ➔ AUTOMATED ACTION ➔ INVARIANT VERIFICATION
```

---

## Kerynth

**Kerynth** is the security engineering initiative I founded to develop autonomous cyber defense infrastructure and intelligent operational security systems.

The objective is moving security operations away from noisy, fragmented alerts toward structured, context-aware detection, session correlation, automated containment, and cryptographic verification.

```text
                          KERYNTH
                             │
        ┌────────────────────┼────────────────────┐
        ▼                    ▼                    ▼
   DEFENSIVE CORE       AI INTELLIGENCE      SOAR AUTOMATION
   (Linux Telemetry)   (Threat Analysis)    (Automated Actions)
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼
                          ALCDP-X
                 Autonomous Linux Defense
```

---

## ALCDP-X

**Autonomous Linux Cyber Defense Platform (ALCDP-X)** is the flagship security defense platform engineered under Kerynth.

ALCDP-X ingests real-time host telemetry, reconstructs attack paths, dynamically calculates risk scores, and orchestrates policy-based containment actions with programmatic post-response verification.

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                        ALCDP-X OPERATIONAL LOOP                         │
├─────────────────────────────────────────────────────────────────────────┤
│  01. TELEMETRY    │ auditd, auth.log, sysmon, network socket telemetry  │
│  02. DETECTION    │ Behavioral Sigma rules & low-level anomaly models   │
│  03. CORRELATION  │ Stateful process-tree lineage & session tracking    │
│  04. RISK ENGINE  │ MITRE ATT&CK mapping & dynamic entity risk scoring  │
│  05. DECISION     │ Policy-driven rule engine (Observe ➔ Decide)        │
│  06. RESPONSE     │ Sub-second SOAR containment (IP/Process isolation)  │
│  07. VERIFICATION │ Invariant validation ensuring remediation success   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Validation & Evidence

ALCDP-X is continuously benchmarked across controlled, reproducible security attack scenarios in dedicated laboratory environments.

| Metric | Controlled Lab Benchmark | Description |
| :--- | :---: | :--- |
| **Telemetry Ingested** | **10,000+** | Synthetic Linux host events processed through stream pipelines |
| **Attack Scenarios** | **27** | Multi-vector simulated Linux attack procedures executed |
| **MITRE Techniques** | **18** | ATT&CK sub-techniques identified and mapped |
| **Attack Chains** | **12** | Multi-stage intrusion sequences correlated across sessions |
| **SOAR Policies** | **5** | Automated containment and process termination rules tested |
| **Simulated MTTC** | **< 80ms** | Mean Time to Containment from correlation trigger |

> **Validation Scope Notice:** These figures represent controlled, synthetic, reproducible laboratory validation environments and are not customer production or enterprise commercial metrics.

---

## Controlled Attack-Chain Validation

A benchmark multi-stage Linux intrusion chain validated within the ALCDP-X test harness:

```text
SSH Password Spray / Brute Force (T1110)
                 │
                 ▼
       Credential Abuse (T1078)
                 │
                 ▼
 Sudo Privilege Escalation / CVE-2021-3156 (T1068)
                 │
                 ▼
   Cron Job Persistence Established (T1053.003)
                 │
                 ▼
 Telemetry Ingestion (auditd + auth.log)
                 │
                 ▼
 Sigma Behavioral Rule Triggered (Parent: sshd ➔ Child: sudo)
                 │
                 ▼
 Stateful Session Correlation & Entity Risk Score = 92/100
                 │
                 ▼
 Automated Containment Triggered (<80ms MTTC)
                 │
                 ▼
 Post-Response DSL Verification (Process Terminated & Port Isolated)
```

---

## Security Engineering

### Defensive Security & Detection Engineering
- **Linux Security**: Hardening baselines, auditd rules, systemd integrity, kernel log auditing.
- **Detection Engineering**: Sigma behavioral rules, multi-stage session correlation, IOC enrichment.
- **Threat Intelligence**: MITRE ATT&CK framework alignment, attack surface mapping, telemetry analysis.
- **Incident Response**: Threat containment pipelines, dynamic entity risk models, artifact capture.

### Web & API Security Assessments
- **Web Applications**: OWASP Top 10, broken access controls, auth flaws, business logic exploitation.
- **API Security**: REST & GraphQL attack surfaces, BOLA/BFLA, JWT manipulation, schema validation, rate-limiting.
- **Exploit Validation**: Controlled vulnerability proof-of-concept development and remediation guidance.

### Security Automation & Infrastructure
- **Defensive Automation**: Python security tooling, log stream processors, SOAR response triggers.
- **Infrastructure**: Linux, Docker container isolation, PostgreSQL persistence, telemetry pipelines.

---

## AI × Cybersecurity

I build AI-assisted workflows where machine intelligence enhances detection fidelity, reduces analyst triage overhead, and accelerates decision support.

```text
HOST / API TELEMETRY ➔ BEHAVIORAL EXTRACTION ➔ RAG & LLM REASONING ➔ TRIAGE & CONTAINMENT DECISION
```

- **Threat Contextualization**: RAG pipelines indexing threat intelligence and MITRE mappings to explain complex log anomalies.
- **Automated Triage**: Extracting Indicators of Compromise (IoCs) and calculating confidence scores for tier-1 alert filtering.
- **Decision Support**: Generating structured incident timelines and remediation scripts for engineers.

---

## Engineering Stack

```text
Languages:          Python  •  TypeScript  •  JavaScript  •  SQL  •  Bash
Security Tooling:   auditd  •  Wireshark  •  Burp Suite  •  Nmap  •  ffuf  •  Amass  •  Kali Linux
Backend & Systems:  FastAPI  •  Flask  •  Node.js  •  Next.js  •  SQLAlchemy
Databases:          PostgreSQL  •  SQLite  •  Supabase  •  Redis Streams
DevOps & Cloud:     Docker  •  Linux (Ubuntu / Debian)  •  Git  •  GitHub Actions  •  Netlify
```

---

## Selected Projects

### [ALCDP-X (Autonomous Linux Cyber Defense Platform)](https://hrudyansh.netlify.app/#kerynth)
* **Purpose**: Flagship autonomous defense system providing real-time telemetry correlation, risk scoring, and automated containment.
* **Stack**: Python, Flask, Redis Streams, SQLAlchemy, Docker, auditd, Linux.
* **Impact**: Demonstrates sub-second automated threat neutralization across 27 simulated attack scenarios.

### [Web & API Security Assessment Methodology](https://hrudyansh.netlify.app/#methodology)
* **Purpose**: Commercial 8-stage assessment pipeline designed for startups and engineering teams.
* **Stack**: Next.js, TypeScript, PostgreSQL, Supabase, Tailwind CSS.
* **Impact**: Delivers evidence-based vulnerability verification, non-destructive testing, and remediation verification.

### [FIR Mitra](https://hrudyansh.netlify.app/#projects)
* **Purpose**: AI-assisted legal intelligence platform for rapid FIR analysis and workflow automation.
* **Stack**: Python, FastAPI, RAG, Knowledge Graphs, Next.js.
* **Impact**: Accelerates document triage and legal information retrieval with high precision.

### [CyberGyan CTF & Security Tooling](https://hrudyansh.netlify.app/#projects)
* **Purpose**: Network reconnaissance, packet inspection, and penetration testing utility suite.
* **Stack**: Python, Bash, Scapy, Socket API, Linux.
* **Impact**: Modular utilities for custom network fuzzing, payload analysis, and protocol security checks.

---

## Security Assessment Methodology

All professional assessment engagements adhere to strict technical rigor and ethical guidelines:

```text
01. Scope & Authorization ➔ 02. Reconnaissance ➔ 03. Attack Surface Mapping ➔ 04. Manual & Automated Testing
                                                                                        │
08. Remediation Retesting 🠄 07. Technical Reporting 🠄 06. Risk Assessment 🠄 05. Exploit Validation
```

### Ethical Standards & Rules of Engagement
- **Explicit Written Authorization**: Zero testing without mutual written agreements defining boundaries.
- **Non-Destructive Testing**: Payloads engineered to prove exploitability without risking data loss or service disruption.
- **Confidentiality & Safe Storage**: Findings, PoCs, and client data strictly encrypted with zero credential retention.
- **Remediation Verification**: Complimentary re-testing to ensure identified vulnerabilities are resolved before production.

---

## Engineering Philosophy

- **Systems Over Demos**: Build resilient, durable production software rather than surface-level prototypes.
- **Evidence Over Assumptions**: Base every detection and vulnerability claim on reproducible telemetry.
- **Automate the Repeatable**: Free human cognition by automating alert correlation and baseline triage.
- **Observability is Security**: A system you cannot observe is a system you cannot defend.
- **Controlled & Accountable**: Measure every defensive intervention with strict invariant verification.

---

## Current Mission

```text
   BUILD KERYNTH ➔ SHIP ALCDP-X ➔ DELIVER PRODUCTION VALUE ➔ ADVANCE AUTONOMOUS DEFENSE
```

My active focus is building Kerynth, hardening ALCDP-X, executing authorized security assessments for engineering teams, and advancing autonomous cybersecurity systems.

---

## GitHub Activity & Metrics

<p align="center">
  <img width="49%" src="https://github-readme-stats.vercel.app/api?username=hrudyanshkayastha&show_icons=true&theme=github_dark&hide_border=true&include_all_commits=true&count_private=true" alt="GitHub Stats" />
  <img width="49%" src="https://streak-stats.demolab.com/?user=hrudyanshkayastha&theme=github-dark-blue&hide_border=true" alt="GitHub Streak" />
</p>

<p align="center">
  <img width="49%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=hrudyanshkayastha&layout=compact&theme=github_dark&hide_border=true" alt="Top Languages" />
  <img width="49%" src="https://github-readme-activity-graph.vercel.app/graph?username=hrudyanshkayastha&theme=github-compact&hide_border=true" alt="Activity Graph" />
</p>

---

## Security Mindset

```text
THINK LIKE AN ATTACKER.
ENGINEER LIKE A DEFENDER.
VALIDATE LIKE A RESEARCHER.
SHIP LIKE A BUILDER.
```

---

## Connect & Direct Contact

<p align="center">
  <a href="https://hrudyansh.netlify.app/">
    <img src="https://img.shields.io/badge/PORTFOLIO-hrudyansh.netlify.app-0f172a?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio Link" />
  </a>
  <a href="https://www.linkedin.com/in/hrudyansh-kayastha/">
    <img src="https://img.shields.io/badge/LINKEDIN-Hrudyansh%20Kayastha-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Link" />
  </a>
  <a href="https://github.com/hrudyanshkayastha">
    <img src="https://img.shields.io/badge/GITHUB-hrudyanshkayastha-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Link" />
  </a>
  <a href="mailto:hrudyansh71@gmail.com">
    <img src="https://img.shields.io/badge/EMAIL-hrudyansh71%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Link" />
  </a>
</p>

<p align="center">
  <strong>Hrudyansh Kayastha</strong> &bull; Founder @ Kerynth &bull; AI & Cybersecurity Engineer
  <br />
  <a href="https://hrudyansh.netlify.app/">Explore Interactive 3D Portfolio &rarr;</a>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:111827,100:020617&height=120&section=footer" alt="Footer" />
</p>\n