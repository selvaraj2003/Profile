"use client";

import React from "react";
import { ExperienceItem } from "@/types/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience &amp; Milestones
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Production contributions, cloud infrastructure automation, and engineering track record.
          </p>
        </div>

        {/* Timeline List */}
        <div className="w-full space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-slate-200">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative flex items-start gap-4 sm:gap-8 group"
            >
              {/* Timeline Indicator Dot */}
              <div
                className={`w-8 h-8 sm:w-16 sm:h-16 rounded-2xl flex-shrink-0 flex items-center justify-center border shadow-sm z-10 transition-transform duration-200 group-hover:scale-105 ${item.isCurrent
                    ? "bg-blue-600 border-blue-500 text-white shadow-blue-500/20"
                    : "bg-white border-slate-200 text-slate-600"
                  }`}
              >
                <Briefcase className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>

              {/* Card Content */}
              <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4">

                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-1">
                  {item.highlights.map((point, pidx) => (
                    <div key={pidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {tech}
                    </span>
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
