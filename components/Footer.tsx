"use client";

import React from "react";
import { FooterData } from "@/types/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Globe,
  Code2,
  Share2,
  MessageSquare,
  Home,
  User,
  FolderGit2,
  Cpu,
  Briefcase,
  Layout,
  Cloud,
  Layers,
  Database,
  Terminal
} from "lucide-react";
import Image from "next/image";

interface FooterProps {
  data?: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const brandName = data?.brandName || "Portfolio";
  const description =
    data?.description ||
    "Building modern digital experiences with clean design, scalable Python architectures, and powerful cloud automation.";
  const socials = data?.socials || [
    { platform: "Twitter / X", url: "https://twitter.com", icon: "Twitter" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { platform: "GitHub", url: "https://github.com/selvaraj2003", icon: "Github" },
    { platform: "Email", url: "mailto:selvaraj2003@example.com", icon: "Mail" }
  ];
  const quickLinks = data?.quickLinks || [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];
  const services = data?.services || [
    "Full Stack Web Development",
    "Python & FastAPI Architecture",
    "Cloud & DevOps Solutions",
    "Docker & Kubernetes Clusters",
    "Database & Microservices",
    "CI/CD Pipeline Automation"
  ];
  const contactInfo = data?.contactInfo || {
    email: "selvaraj2003@example.com",
    phone: "+91 (Contact on Request)",
    location: "India",
    ctaLabel: "Get in Touch",
    ctaHref: "#contact"
  };
  const copyrightText = data?.copyrightText || "© 2026 Portfolio. All rights reserved.";

  const getQuickLinkIcon = (label: string) => {
    const lower = label.toLowerCase();
    switch (lower) {
      case "home":
        return <Home className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />;
      case "about":
        return <User className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />;
      case "projects":
        return <FolderGit2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />;
      case "skills":
        return <Cpu className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />;
      case "experience":
        return <Briefcase className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />;
      case "contact":
        return <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />;
      default:
        return <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />;
    }
  };

  const getServiceIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layout className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />;
      case 1:
        return <Code2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />;
      case 2:
        return <Cloud className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />;
      case 3:
        return <Layers className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />;
      case 4:
        return <Database className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />;
      case 5:
        return <Terminal className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />;
      default:
        return <Code2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />;
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Twitter":
        return <Share2 className="w-4 h-4" />;
      case "Linkedin":
        return <Globe className="w-4 h-4" />;
      case "Github":
        return <Code2 className="w-4 h-4" />;
      case "Mail":
        return <Mail className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-5">
            {/* Brand Logo */}
            <a href="#home" className="inline-flex items-center group">
              <div className="w-10 h-10 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/selvaraj-logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  style={{ width: "auto", height: "auto" }}
                  className="w-10 h-10 object-contain drop-shadow-sm"
                />
              </div>
            </a>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              {description}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium group"
                  >
                    {getQuickLinkIcon(link.label)}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-500 font-medium">
                  {getServiceIcon(idx)}
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Contact
            </h4>

            <div className="space-y-3 text-sm">
              {/* Email Item */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium truncate"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-slate-600 font-medium">
                  {contactInfo.phone}
                </span>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-slate-600 font-medium">
                  {contactInfo.location}
                </span>
              </div>
            </div>

            {/* Get in Touch CTA Button */}
            <div className="pt-2">
              <a
                href={contactInfo.ctaHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                <span>{contactInfo.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Sub-Footer Divider & Bottom Row */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            {copyrightText}
          </div>

          {/* Social Media Icons in Bottom-Right */}
          <div className="flex items-center gap-2.5">
            {socials.map((soc) => (
              <a
                key={soc.platform}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                title={soc.platform}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all duration-200 border border-slate-200/60 shadow-xs hover:scale-110"
              >
                {getSocialIcon(soc.icon)}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
