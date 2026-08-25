"use client";

import React from "react";
import { ProfileData } from "@/types/portfolio";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  data: ProfileData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Attached Hero Background Image spanning behind Navbar */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <Image
          src="/hero-tools.webp"
          alt="Developer Tools Architecture Backdrop"
          fill
          priority
          className="object-cover sm:object-contain object-center opacity-30 scale-105"
        />
        {/* Soft Radial Fade for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />
      </div>

      {/* Main Centered Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center my-auto">
        <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">

          {/* Name & Titles with Light Staggered Entrance Animations */}
          <div className="space-y-3">
            <span className="block text-xl sm:text-2xl font-medium text-slate-500 tracking-tight animate-hero-1">
              Hi, I&apos;m
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] animate-hero-2">
              {data.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 pt-1 animate-hero-3">
              <span className="text-blue-600">{data.primaryTitle}</span>{" "}
              <span className="text-slate-900">{data.secondaryTitle}</span>
            </h2>
          </div>

          {/* Short Bio */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl pt-1 animate-hero-4">
            {data.shortBio}
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-3 animate-hero-5">
            <a
              href={data.ctaPrimary.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 active:scale-[0.98] transition-all duration-200"
            >
              <span>{data.ctaPrimary.label}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={data.ctaSecondary.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white/95 border border-slate-300 text-slate-800 font-semibold shadow-xs hover:bg-white hover:border-slate-400 active:scale-[0.98] transition-all duration-200 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{data.ctaSecondary.label}</span>
            </a>
          </div>

          {/* Availability Indicator */}
          {data.availableForHire && (
            <div className="pt-3 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 animate-hero-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles &amp; Cloud Engagements</span>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
