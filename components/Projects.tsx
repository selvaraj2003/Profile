"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/types/portfolio";
import {
  ExternalLink,
  ArrowRight,
  BarChart3,
  CloudCog,
  ShoppingBag,
  CheckCircle2,
  FolderGit2,
  Code2
} from "lucide-react";

interface ProjectsProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack Python" },
    { id: "devops", label: "DevOps & Cloud" }
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case "BarChart3":
        return <BarChart3 className="w-6 h-6 text-blue-600" />;
      case "CloudCog":
        return <CloudCog className="w-6 h-6 text-cyan-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-emerald-600" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
              Production Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Scalable Python backends, reactive web clients, and automated cloud deployments.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200/80 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${activeCategory === cat.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-3d-tilt bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header Banner */}
                <div
                  className={`h-48 p-6 bg-gradient-to-br ${project.gradient} border-b border-slate-100 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center border border-white/60">
                      {getProjectIcon(project.icon)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-slate-800 shadow-sm border border-slate-100">
                      {project.category === "fullstack" ? "Full Stack" : "DevOps"}
                    </span>
                  </div>

                  <div className="z-10">
                    {project.metrics && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-semibold shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  {/* Decorative Background Element */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {project.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explore Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      title="View Source Code"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      title="Direct Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
