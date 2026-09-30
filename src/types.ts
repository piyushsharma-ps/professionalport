export type SkillLevel = 'Foundation Built' | 'Actively Learning' | 'Foundational Study' | 'Active Practice';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  description?: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface FocusArea {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  subPoints: string[];
}

export interface TimelineMilestone {
  year: string;
  tag: string;
  title: string;
  description: string;
  keyGoals: string[];
  status: 'In Progress' | 'Upcoming' | 'Future Vision';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI / ML Projects' | 'Data Projects' | 'AI Agent Projects' | 'Automation Projects' | 'Finance + AI Ideas' | 'Real Estate + Technology Ideas';
  description: string;
  detailedVision: string;
  technologies: string[];
  status: 'In Active Development' | 'Architecture & Design' | 'Conceptual Research';
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface VisionPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusElements: string[];
}
