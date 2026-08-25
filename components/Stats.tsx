"use client";

import React from "react";
import { MetricItem } from "@/types/portfolio";
import { FolderGit2, Trophy, ArrowUpRight, Sparkles } from "lucide-react";

interface StatsProps {
  metrics: MetricItem[];
}

export default function Stats({ metrics }: StatsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FolderGit2":
        return <FolderGit2 className="w-6 h-6 text-blue-600" />;
      case "Trophy":
        return <Trophy className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-6 sm:py-10 -mt-6 sm:-mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-blue-600/10 transition-all duration-300">
                  {getIcon(item.iconName)}
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-1">
                    {item.value}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-800">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {item.sublabel}
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex w-9 h-9 rounded-full bg-slate-50 border border-slate-200 items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
