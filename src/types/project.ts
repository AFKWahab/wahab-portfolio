// Updated types/project.ts
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
  abstract?: string;
  sections?: ProjectSection[];
  tags?: string[];
  category?: 'machine-learning' | 'web-development' | 'computer-vision' | 'bioinformatics';
}

export interface ProjectSection {
  id: string;
  title: string;
  order: number;
  type: 'text' | 'math' | 'image' | 'code' | 'results';
  content: SectionContent;
}

export interface SectionContent {
  text?: string;
  equations?: MathEquation[];
  images?: ProjectImage[];
  code?: CodeBlock[];
  metrics?: Metric[];
  subsections?: SubSection[];
}

export interface MathEquation {
  id: string;
  latex: string;
  label?: string;
  description?: string;
  displayMode?: boolean;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
}

export interface CodeBlock {
  id: string;
  language: string;
  code: string;
  description?: string;
}

export interface Metric {
  name: string;
  value: string | number;
  description?: string;
  comparison?: {
    baseline: string | number;
    improvement: string;
  };
}

export interface SubSection {
  id: string;
  title: string;
  content: string;
  math?: MathEquation[];
  images?: ProjectImage[];
}