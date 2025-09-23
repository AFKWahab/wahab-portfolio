export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  keyFeatures: string[];
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export {};