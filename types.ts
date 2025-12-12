export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  period?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  year?: string;
  details?: string[];
}

export interface Award {
  id: string;
  title: string;
  year: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}