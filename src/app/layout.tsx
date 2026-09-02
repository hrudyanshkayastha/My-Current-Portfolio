import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hrudyansh Kayastha | AI & Cybersecurity Engineer",
  description:
    "Personal 3D Engineering Portfolio of Hrudyansh Kayastha. Founder @ Kerynth (ALCDP-X Autonomous Cyber Defense), Co-Founder @ Agletras (AI Research Intelligence), and Security Engineer specializing in Web & API Security Assessments.",
  keywords: [
    "Hrudyansh Kayastha",
    "Cybersecurity Engineer",
    "AI Security",
    "Autonomous Cyber Defense",
    "ALCDP-X",
    "Kerynth",
    "Agletras",
    "Web Application Security",
    "API Security Assessment",
    "Detection Engineering",
    "OSINT Automation",
    "Linux Security",
  ],
  authors: [{ name: "Hrudyansh Kayastha", url: "https://github.com/hrudyanshkayastha" }],
  creator: "Hrudyansh Kayastha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hrudyansh.dev",
    title: "Hrudyansh Kayastha | AI & Cybersecurity Engineer",
    description:
      "Interactive 3D Engineering Portfolio of Hrudyansh Kayastha. Founder @ Kerynth, Co-Founder @ Agletras, Web & API Security Assessments.",
    siteName: "Hrudyansh Kayastha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrudyansh Kayastha | AI & Cybersecurity Engineer",
    description:
      "Interactive 3D Engineering Portfolio of Hrudyansh Kayastha. Autonomous Cyber Defense (ALCDP-X) and AI Research Intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#060910",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#060910] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
