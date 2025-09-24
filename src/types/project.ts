export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  keyFeatures: string[];
  status: 'completed' | 'ongoing' | 'planned';
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export {};