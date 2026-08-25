"use client";

import React from "react";
import { SkillCategory } from "@/types/portfolio";
import { Code2, Cpu, Layout, Database, Check } from "lucide-react";

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-blue-600" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-emerald-600" />;
      case "Database":
        return <Database className="w-6 h-6 text-amber-600" />;
      default:
        return <Code2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills &amp; Technical Capabilities
          </h2>
          <p className="text-base text-slate-600 mt-3">
            A comprehensive overview of programming languages, frameworks, cloud engines, and databases I utilize daily.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl border flex items-center justify-between transition-all duration-200 ${skill.highlight
                          ? "bg-blue-50/40 border-blue-200/80 text-slate-900 font-semibold"
                          : "bg-slate-50/60 border-slate-200/60 text-slate-700 font-medium"
                        } hover:scale-[1.02] hover:bg-white hover:border-blue-300 hover:shadow-sm`}
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm truncate">{skill.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
