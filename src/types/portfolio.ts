export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  photoUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  status: "en-cours" | "terminé" | "en-pause";
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  availability: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  skillCategories: SkillCategory[];
  contactInfo: ContactInfo;
}
