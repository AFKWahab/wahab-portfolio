export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  keyFeatures: string[];
  status: "completed" | "ongoing" | "planned";
  abstract?: string;
  sections?: ProjectSection[];
  tags?: string[];
  category?:
    | "machine-learning"
    | "web-development"
    | "computer-vision"
    | "bioinformatics";
  showTableOfContents?: boolean;
}

export interface ProjectSection {
  id: string;
  title: string;
  order: number;
  type: "text" | "math" | "image" | "code" | "results";
  content: SectionContent;
}

export interface SectionContent {
  text?: string;
  equations?: MathEquation[];
  images?: ProjectImage[];
  code?: CodeBlock[];
  metrics?: Metric[];
  subsections?: SubSection[];
  customVisualizations?: CustomVisualization[];
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

export interface CustomVisualization {
  type:
    | "comparison-table"
    | "training-chart"
    | "histogram"
    | "benchmark-table"
    | "performance-chart"
    | "species-comparison"
    | "learning-curves"
    | "model-comparison"
    | "custom";
  data: any;
}

export interface BenchmarkSequence {
  id: string;
  length: number;
  optimal: number;
  aco: number;
  hart: number;
}

export interface BenchmarkTableData {
  title?: string;
  sequences: BenchmarkSequence[];
  caption?: string;
}

export interface PerformanceChartData {
  title?: string;
  chartImage: string;
  caption?: string;
}
