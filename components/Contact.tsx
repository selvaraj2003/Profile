"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactData } from "@/types/portfolio";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Globe,
  Code2
} from "lucide-react";

interface ContactProps {
  data: ContactData;
}

export default function Contact({ data }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setFeedbackMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    const isPlaceholderKey =
      !publicKey ||
      publicKey === "user_public_key_here" ||
      serviceId === "service_portfolio";

    try {
      if (isPlaceholderKey) {
        // Fallback simulation mode for testing when real EmailJS keys are not yet configured
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus("success");
        setFeedbackMessage("Message sent successfully! (Demo mode: Connect your EmailJS keys in .env.local for live dispatch)");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Live EmailJS dispatch
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || "Portfolio Contact Form Message",
            message: formData.message,
            to_name: "Selvaraj Iyyappan",
          },
          publicKey
        );

        setStatus("success");
        setFeedbackMessage("Thank you! Your message has been sent successfully. I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err: unknown) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setFeedbackMessage("Failed to send message. Please email me directly at " + data.email);
    }
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "Github":
        return <Code2 className="w-4 h-4" />;
      case "Linkedin":
        return <Globe className="w-4 h-4" />;
      case "Mail":
        return <Mail className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
            {data.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {data.title}
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-slate-50/90 rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-sm h-full flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  {/* Email Item */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Email Address</div>
                      <a
                        href={`mailto:${data.email}`}
                        className="text-sm sm:text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                      >
                        {data.email}
                      </a>
                    </div>
                  </div>

                  {/* Location Item */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100/80 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Location</div>
                      <div className="text-sm sm:text-base font-semibold text-slate-800">
                        {data.location}
                      </div>
                    </div>
                  </div>

                  {/* Working Hours & Response */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Working Hours</div>
                      <div className="text-sm font-semibold text-slate-800">
                        {data.workingHours}
                      </div>
                      <div className="text-xs text-emerald-600 font-medium mt-0.5">
                        ✓ {data.responseTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Connect on Socials
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {data.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm text-xs font-semibold transition-all duration-200"
                    >
                      {getSocialIcon(social.icon)}
                      <span>{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: EmailJS Contact Form */}
          <div className="lg:col-span-7 h-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-sm h-full flex flex-col justify-between space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300/80 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300/80 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Python Project or DevOps Consultation"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300/80 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your project, timeline, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300/80 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400 resize-y"
                ></textarea>
              </div>

              {/* Status Alert Banner */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
