"use client";

import React, { useState, useEffect } from "react";
import { defaultPortfolioData } from "@/lib/data";
import { PortfolioData } from "@/types/portfolio";
import { PortfolioSkeletonPage } from "@/components/SkeletonLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Graceful initial hydration delay for smooth skeleton demonstration
    const timer = setTimeout(() => {
      setData(defaultPortfolioData);
      setIsLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !data) {
    return <PortfolioSkeletonPage />;
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar data={data.navbar} />

      {/* 2. Hero Section */}
      <Hero data={data.profile} />

      {/* 3. 2 Key Stats Metrics (3+ Projects, 2+ Years Experience) */}
      <Stats metrics={data.metrics} />

      {/* 4. About Me & Architecture Philosophy */}
      <About data={data.about} />

      {/* 6. Featured Production Projects */}
      <Projects projects={data.projects} />

      {/* 7. Skills & Tech Stack Grid */}
      <Skills skills={data.skills} />

      {/* 8. Career Experience Timeline */}
      <Experience experience={data.experience} />

      {/* 9. Contact Section with EmailJS */}
      <Contact data={data.contact} />

      {/* 10. Footer */}
      <Footer data={data.footer} />
    </main>
  );
}
