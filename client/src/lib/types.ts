// Type definitions for blog posts, projects, and other data structures

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedDate: Date;
  imageUrl?: string;
  readTime: number;
  category: string;
  featured: boolean;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  status: "In Progress" | "Completed" | "Ongoing" | "Planned";
  githubUrl?: string;
  demoUrl?: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ResumeProject {
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeData {
  name: string;
  title: string;
  education: Education[];
  skills: Skill[];
  projects: ResumeProject[];
  certifications: Certification[];
}
