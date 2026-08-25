"use client";

import React from "react";
import { AboutData } from "@/types/portfolio";
import {
  Server,
  Layers,
  Layout,
  Cloud,
  Quote,
  Sparkles,
  ShieldCheck,
  Cpu
} from "lucide-react";

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  const getHighlightConfig = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return {
          icon: <Server className="w-5 h-5 text-blue-600" />,
          bg: "bg-blue-50 border-blue-200/80 text-blue-700",
          tagBg: "bg-blue-50/80 text-blue-700 border-blue-100 hover:bg-blue-100/80",
          accentHover: "hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5",
          iconBg: "group-hover:bg-blue-50 group-hover:border-blue-200"
        };
      case "Layers":
        return {
          icon: <Layers className="w-5 h-5 text-indigo-600" />,
          bg: "bg-indigo-50 border-indigo-200/80 text-indigo-700",
          tagBg: "bg-indigo-50/80 text-indigo-700 border-indigo-100 hover:bg-indigo-100/80",
          accentHover: "hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5",
          iconBg: "group-hover:bg-indigo-50 group-hover:border-indigo-200"
        };
      case "Layout":
        return {
          icon: <Layout className="w-5 h-5 text-emerald-600" />,
          bg: "bg-emerald-50 border-emerald-200/80 text-emerald-700",
          tagBg: "bg-emerald-50/80 text-emerald-700 border-emerald-100 hover:bg-emerald-100/80",
          accentHover: "hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5",
          iconBg: "group-hover:bg-emerald-50 group-hover:border-emerald-200"
        };
      case "Cloud":
        return {
          icon: <Cloud className="w-5 h-5 text-amber-600" />,
          bg: "bg-amber-50 border-amber-200/80 text-amber-700",
          tagBg: "bg-amber-50/80 text-amber-700 border-amber-100 hover:bg-amber-100/80",
          accentHover: "hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/5",
          iconBg: "group-hover:bg-amber-50 group-hover:border-amber-200"
        };
      default:
        return {
          icon: <Cpu className="w-5 h-5 text-blue-600" />,
          bg: "bg-blue-50 border-blue-200/80 text-blue-700",
          tagBg: "bg-blue-50/80 text-blue-700 border-blue-100 hover:bg-blue-100/80",
          accentHover: "hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5",
          iconBg: "group-hover:bg-blue-50 group-hover:border-blue-200"
        };
    }
  };

  const coreValues = data.coreValues || [
    { label: "Clean Architecture", metric: "Production-Ready" },
    { label: "API Performance", metric: "Sub-50ms Latency" },
    { label: "Deployment Uptime", metric: "Zero-Downtime" }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/60 relative border-t border-slate-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-xs transition-transform duration-200 hover:scale-105">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>About Me &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {data.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">

          {/* Left Column: Narrative, Core Values & Quote Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            {/* Story Paragraphs */}
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              {data.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "font-medium text-slate-700 text-base sm:text-lg leading-relaxed" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Core Values / Engineering Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-xs flex flex-col justify-center text-center hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                    {val.label}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-blue-600 mt-0.5">
                    {val.metric}
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Philosophy Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-blue-200/80 shadow-xs relative overflow-hidden group hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50/80 rounded-bl-full -z-0 opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <Quote className="w-8 h-8 text-blue-400 absolute top-4 right-4 opacity-40 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />

              <div className="relative z-10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Engineering Creed</span>
                </div>
                <p className="text-sm sm:text-base font-semibold italic text-slate-800 leading-relaxed">
                  &ldquo;{data.philosophy.quote}&rdquo;
                </p>
                <div className="text-xs font-bold text-slate-600 pt-1">
                  — {data.philosophy.author}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Enriched Capability Cards with Minimal Animations */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.highlights.map((item, idx) => {
              const cfg = getHighlightConfig(item.icon);
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between space-y-4 group ${cfg.accentHover}`}
                >
                  {/* Top Row: Icon + Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300 ${cfg.iconBg}`}>
                      {cfg.icon}
                    </div>
                    {item.badge && (
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border transition-colors duration-200 ${cfg.bg}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Middle: Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: Tech Stack Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border transition-all duration-200 hover:scale-105 ${cfg.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
