import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  repoLink?: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: LucideIcon;
}

export type SectionId = 
  | 'hero' 
  | 'about' 
  | 'fiber-sky' 
  | 'quiz' 
  | 'pionir' 
  | 'uiux' 
  | 'python' 
  | 'photography' 
  | 'contact';

export interface FileTab {
  id: SectionId;
  name: string;
  icon: string; // extension e.g. .tsx, .py, .css
  language: string; // for status bar
}