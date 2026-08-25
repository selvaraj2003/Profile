"use client";

import React from "react";

export function HeroSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center text-center space-y-6">
      <div className="h-14 w-3/4 max-w-lg rounded-2xl skeleton-shimmer" />
      <div className="h-8 w-2/3 max-w-md rounded-xl skeleton-shimmer" />
      <div className="space-y-2 pt-2 w-full max-w-xl flex flex-col items-center">
        <div className="h-4 w-full rounded skeleton-shimmer" />
        <div className="h-4 w-4/5 rounded skeleton-shimmer" />
      </div>
      <div className="flex gap-4 pt-4">
        <div className="h-12 w-36 rounded-xl skeleton-shimmer" />
        <div className="h-12 w-36 rounded-xl skeleton-shimmer" />
      </div>
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-28 rounded-2xl skeleton-shimmer" />
        <div className="h-28 rounded-2xl skeleton-shimmer" />
      </div>
    </div>
  );
}

export function MarqueeSkeleton() {
  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="flex gap-4 max-w-7xl mx-auto px-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-16 w-48 rounded-xl skeleton-shimmer flex-shrink-0" />
        ))}
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="flex justify-between items-center">
        <div className="h-8 w-56 rounded-lg skeleton-shimmer" />
        <div className="h-6 w-24 rounded-lg skeleton-shimmer" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-96 rounded-2xl skeleton-shimmer" />
        ))}
      </div>
    </div>
  );
}

export function SkillsSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="h-8 w-48 rounded-lg skeleton-shimmer mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-56 rounded-2xl skeleton-shimmer" />
        ))}
      </div>
    </div>
  );
}

export function PortfolioSkeletonPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col animate-pulse">
      {/* Navbar Skeleton */}
      <div className="h-20 border-b border-slate-200 bg-white/70 px-8 flex items-center justify-between">
        <div className="h-8 w-36 rounded-lg skeleton-shimmer" />
        <div className="hidden md:flex gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-16 rounded skeleton-shimmer" />
          ))}
        </div>
        <div className="h-10 w-32 rounded-xl skeleton-shimmer" />
      </div>

      <HeroSkeleton />
      <StatsSkeleton />
      <ProjectsSkeleton />
      <SkillsSkeleton />
    </div>
  );
}
