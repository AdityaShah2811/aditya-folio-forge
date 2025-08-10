export interface HeroData {
  name: string;
  title: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface AboutHighlight {
  icon: string; // lucide icon name
  text: string;
  color?: string; // tailwind class string
}

export interface AboutData {
  paragraphs: string[];
  highlights: AboutHighlight[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  type: string;
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon?: string; // lucide icon name
  metrics: Record<string, string>;
  codeUrl?: string;
  externalUrl?: string;
}

export interface ContactData {
  email: string;
  phone: string;
  location: string;
  socials: { name: string; icon: string; url: string }[];
}

export interface ProfileData {
  hero: HeroData;
  about: AboutData;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  contact: ContactData;
}
