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
  
  // New detailed content fields
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
  // Text content with optional math
  text?: string;
  
  // Math equations (LaTeX strings)
  equations?: MathEquation[];
  
  // Images with captions
  images?: ProjectImage[];
  
  // Code blocks
  code?: CodeBlock[];
  
  // Results/metrics
  metrics?: Metric[];
  
  // Sub-sections for complex sections
  subsections?: SubSection[];
  
  // Custom visualizations (for LaTeX-generated content)
  customVisualizations?: CustomVisualization[];
}

export interface MathEquation {
  id: string;
  latex: string;
  label?: string;
  description?: string;
  displayMode?: boolean; // true for block equations, false for inline
}

export interface ProjectImage {
  id: string;
  src: string; // path to image
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

export interface CustomVisualization {
  type: 'comparison-table' | 'training-chart' | 'histogram' | 'custom';
  data: any; // Flexible data structure for different visualization types
}