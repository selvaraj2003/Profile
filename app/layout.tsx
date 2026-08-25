import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selvaraj Iyyappan | Full Stack Python Developer & DevOps Engineer",
  description:
    "Professional portfolio of Selvaraj Iyyappan. Full Stack Python Developer (FastAPI, Django) and DevOps Engineer specializing in scalable cloud architectures, Kubernetes, Docker, and reactive web applications.",
  keywords: [
    "Selvaraj Iyyappan",
    "Full Stack Python Developer",
    "DevOps Engineer",
    "FastAPI",
    "Django",
    "Kubernetes",
    "Docker",
    "AWS",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Selvaraj Iyyappan" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-500 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
