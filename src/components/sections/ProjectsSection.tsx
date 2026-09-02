"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { PROJECTS, ProjectItem } from "@/data/projects";
import { TechBadge } from "../ui/TechBadge";
import { CaseStudyModal } from "../ui/CaseStudyModal";
import { Shield, Lock, Terminal, ArrowRight, ExternalLink, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { label: "ALL WORK", value: "ALL" },
    { label: "CYBER DEFENSE", value: "CYBER_DEFENSE" },
    { label: "WEB SECURITY", value: "WEB_SECURITY" },
    { label: "API SECURITY", value: "API_SECURITY" },
    { label: "AUTOMATION", value: "AUTOMATION" },
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" aria-label="Security Projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeader
        tag="Security Work & Engineering Case Studies"
        title="Technical Systems, Security Labs & Defense Platforms"
        subtitle="Explore detailed technical case studies spanning autonomous SOC engines, authorized penetration testing labs, API authorization audits, and security automation scripts."
        theme="cyan"
      />

      {/* Category Filter Filter Tabs */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={cn(
              "px-4 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap",
              selectedCategory === cat.value
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-md shadow-cyan-950/40"
                : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-850"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const isLab = project.projectType === "Controlled Lab Assessment";

          return (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-cyan-950/20 hover:-translate-y-1"
            >
              <div>
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                  <TechBadge variant={isLab ? "cyan" : "emerald"}>
                    {project.projectType}
                  </TechBadge>
                  <span className="font-mono text-xs text-slate-500 font-semibold">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors font-sans">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mt-4 line-clamp-3">
                  {project.overview}
                </p>
              </div>

              {/* Bottom Details & CTA */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <TechBadge key={idx} variant="slate" size="sm">
                      {tech}
                    </TechBadge>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono text-slate-500 self-center">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-cyan-400 font-semibold flex items-center gap-1.5 group-hover:underline">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
