export interface NavItem {
  name: string;
  href: string;
}

export interface NavbarData {
  brandName: string;
  brandTag: string;
  logoLetter: string;
  navLinks: NavItem[];
  cvButton: {
    label: string;
    href: string;
    downloadFilename: string;
  };
}

export interface ProfileData {
  name: string;
  roleBadge: string;
  primaryTitle: string;
  secondaryTitle: string;
  shortBio: string;
  location: string;
  availableForHire: boolean;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface MarqueeTool {
  id: string;
  name: string;
  category: string;
  color: string;
  bgColor: string;
  badge: string;
  iconType: string;
}

export interface SkillItem {
  name: string;
  level: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string; // 'fullstack' | 'devops' | 'ai' | 'cloud'
  tags: string[];
  features: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: string; // 'Full-time' | 'Contract' | 'Open Source'
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface AboutData {
  headline: string;
  paragraphs: string[];
  highlights: {
    title: string;
    description: string;
    icon: string;
    badge?: string;
    tags?: string[];
  }[];
  coreValues?: {
    label: string;
    metric: string;
  }[];
  philosophy: {
    quote: string;
    author: string;
  };
}

export interface ContactData {
  badge: string;
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  location: string;
  workingHours: string;
  responseTime: string;
  socials: {
    platform: string;
    username: string;
    url: string;
    icon: string;
  }[];
}

export interface FooterData {
  brandName: string;
  tagline: string;
  description: string;
  copyrightYear: number;
  copyrightText: string;
  designedWith: string;
  socials: {
    platform: string;
    url: string;
    icon: string;
  }[];
  quickLinks: {
    label: string;
    href: string;
  }[];
  services: string[];
  contactInfo: {
    email: string;
    phone: string;
    location: string;
    ctaLabel: string;
    ctaHref: string;
  };
  legalLinks: {
    label: string;
    href: string;
  }[];
}

export interface PortfolioData {
  navbar: NavbarData;
  profile: ProfileData;
  metrics: MetricItem[];
  marqueeTools: MarqueeTool[];
  about: AboutData;
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  contact: ContactData;
  footer: FooterData;
}
