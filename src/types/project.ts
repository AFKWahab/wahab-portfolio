export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'design' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  images: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  startDate: string;
  endDate?: string;
  challenges: string[];
  solutions: string[];
  keyFeatures: string[];
  myRole: string;
  teamSize?: number;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  type: 'hero' | 'screenshot' | 'mockup' | 'diagram' | 'other';
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}