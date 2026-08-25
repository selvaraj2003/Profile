"use client";

import React, { useState, useEffect } from "react";
import { NavbarData } from "@/types/portfolio";
import {
  Download,
  Menu,
  X,
  ArrowUpRight,
  Code2,
  Home,
  User,
  FolderGit2,
  Cpu,
  Briefcase,
  Mail
} from "lucide-react";

import Image from "next/image";

interface NavbarProps {
  data: NavbarData;
}

export default function Navbar({ data }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const getNavLinkIcon = (name: string) => {
    const lower = name.toLowerCase();
    switch (lower) {
      case "home":
        return <Home className="w-4 h-4" />;
      case "about":
        return <User className="w-4 h-4" />;
      case "projects":
        return <FolderGit2 className="w-4 h-4" />;
      case "skills":
        return <Cpu className="w-4 h-4" />;
      case "experience":
        return <Briefcase className="w-4 h-4" />;
      case "contact":
        return <Mail className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = data.navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.navLinks]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = data.cvButton.href;
    link.download = data.cvButton.downloadFilename;
    link.target = "_blank";
    link.click();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5"
          : "bg-transparent border-b border-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          >
            <div className="h-10 w-auto relative flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/selvaraj-logo.png"
                alt="Selvaraj Logo"
                width={44}
                height={44}
                style={{ width: "auto", height: "auto" }}
                className="h-10 w-auto object-contain drop-shadow-sm"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {data.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors py-1 ${isActive
                      ? "text-blue-600 font-semibold"
                      : "text-slate-600 hover:text-blue-600"
                    }`}
                >
                  <span className={isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-600"}>
                    {getNavLinkIcon(link.name)}
                  </span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & CV */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{data.cvButton.label}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {data.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? "text-blue-600" : "text-slate-400"}>
                      {getNavLinkIcon(link.name)}
                    </span>
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadCV();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{data.cvButton.label}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
