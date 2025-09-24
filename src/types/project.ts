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
  
  // New technical content fields
  abstract?: string;
  techDetails?: TechnicalSection[];
  mathematics?: MathSection[];
  results?: ResultSection[];
  images?: ProjectImage[];
  tags?: string[];
  category?: 'machine-learning' | 'web-development' | 'computer-vision' | 'bioinformatics';
}

export interface TechnicalSection {
  id: string;
  title: string;
  content: string;
  math?: string[]; // LaTeX equations
  images?: string[]; // References to image IDs
  order: number;
}

export interface MathSection {
  id: string;
  title: string;
  equations: MathEquation[];
  explanation: string;
}

export interface MathEquation {
  id: string;
  latex: string;
  label?: string;
  description?: string;
}

export interface ResultSection {
  id: string;
  title: string;
  content: string;
  metrics?: Metric[];
  charts?: ChartData[];
  images?: string[];
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

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  type: 'figure' | 'chart' | 'result' | 'architecture';
}

export interface ChartData {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'scatter';
  data: any; // Chart.js compatible data
}