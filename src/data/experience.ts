export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "vis-commodities-current",
    position: "Software Developer",
    company: "Vis Commodities",
    startDate: "2024-11",
    endDate: "2025-10",
    description:
      "Full-stack development & DevOps role focusing on ETL pipelines, cloud infrastructure, and analytics tools. Built comprehensive Azure-based solutions including Kubernetes clusters.",
    technologies: [
      "Python",
      "React",
      "Azure",
      "Kubernetes",
      "Docker",
      "TimescaleDB",
    ],
    achievements: [
      "Setup ETL pipelines with Kubernetes, Helm, Dagster, and TimescaleDB on Azure",
      "Managing our AKS cluster, including setting up CI/CD pipelines, and setting up pipelines for other developers to deploy onto the cluster",
      "Created trading analytics tool using React & Python, deployed through Azure webapps & functions",
      "Implemented energy market data scrapers for various european data providers",
      "Developed sideloaded Excel add-ins using office-js",
      "Developed and maintained internal pip packages for python",
      "Worked with RabbitMQ to retrieve our trades from the exchange",
    ],
  },
  {
    id: "mft-energy",
    position: "Junior Software Developer",
    company: "MFT Energy A/S",
    startDate: "2022-11",
    endDate: "2024-11",
    description:
      "Full-stack development role focusing on energy trading systems and data processing. Developed ETL processes, trading platform integrations, and Excel add-ins for traders to efficiently execute trades through multiple APIs.",
    technologies: [
      "C#",
      "React",
      "Azure Functions",
      "EF Core",
      "MSSQL",
      "Python",
      "REST APIs",
      "SOAP APIs",
    ],
    achievements: [
      "Developed ETL processes using Azure Functions and EF Core with MSSQL integration",
      "Built full-stack applications integrating REST/SOAP APIs and web scraping for energy market data",
      "Created Excel add-ins in React and C# enabling spreadsheet-based trading",
      "Maintained and deployed applications on Azure cloud platform",
      "Developed custom data processing solutions for energy market data",
    ],
  },
  {
    id: "msc-thesis",
    position: "Master's Thesis: mRNA Expression Prediction",
    company: "Aarhus University",
    startDate: "2025-01",
    endDate: "2025-06",
    description:
      "Research project on predicting mRNA expression levels using deep learning techniques. Evaluated sequence-based models, designed CNNs and Graph Neural Networks, and created replicable data pipelines for biological data processing. Achieved grade 12.",
    technologies: [
      "PyTorch",
      "Python",
      "Deep Learning",
      "Bioinformatics",
      "Graph Neural Networks",
      "Transformers",
    ],
    achievements: [
      "Evaluated and described earlier sequence-based deep learning models for mRNA prediction",
      "Designed CNNs and Graph Neural Networks for DNA sequence-based expression prediction",
      "Created fully replicable ETL pipeline for biological data preprocessing",
      "Experimented with transformer embeddings for capturing long-range dependencies",
      "Achieved top grade (12) for comprehensive research and implementation",
    ],
  },
  {
    id: "bsc-thesis",
    position: "Bachelor's Thesis: Shortest Path on OSM Data",
    company: "Aarhus University",
    startDate: "2023-01",
    endDate: "2023-06",
    description:
      "Research on optimizing shortest path computations using OpenStreetMap data. Implemented and compared multiple algorithms including Dijkstra, A*, ALT with various enhancements. Created interactive visualization system for real-time algorithm demonstration across Europe. Achieved grade 10.",
    technologies: [
      "Python",
      "Java",
      "PostgreSQL",
      "PostGIS",
      "React",
      "Algorithm Optimization",
    ],
    achievements: [
      "Implemented and optimized shortest path algorithms (Dijkstra, A*, ALT)",
      "Enhanced algorithms with shortcuts and space-filling curves for efficiency",
      "Used Python for data preprocessing and Java for core algorithm development",
      "Created React-based frontend for real-time algorithm visualization across Europe",
      "Managed geographical data using PostgreSQL and PostGIS",
    ],
  },
];

export const getExperienceById = (id: string): ExperienceItem | undefined => {
  return experiences.find((exp) => exp.id === id);
};
