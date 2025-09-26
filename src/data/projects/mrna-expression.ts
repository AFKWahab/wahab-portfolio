import { Project } from "../../types/project";

export const mrnaExpressionProject: Project = {
  id: "mrna-expression-prediction",
  title: "Predicting mRNA Expression Levels Using Deep Learning",
  shortDescription:
    "Master's thesis exploring deep learning approaches to predict gene expression from DNA sequences, achieving state-of-the-art results through transformer embeddings and novel architectures.",
  fullDescription:
    "A comprehensive investigation into predicting mRNA expression levels directly from genomic sequences using modern deep learning techniques. This research bridges computational biology and machine learning to understand gene regulation.",
  abstract:
    "This master's thesis presents a comprehensive implementation and investigation of mRNA expression prediction using deep learning techniques. The research encompasses implementing and evaluating prior work (Xpresso and TExCNN models), developing novel architectures that achieve competitive performance, and extending these approaches to non-human species. The work demonstrates that combining DNABERT-2 transformer embeddings with biological metadata can explain nearly 80% of variance in human gene expression, outperforming previous approaches while requiring less computational resources.",
  githubUrl: "https://github.com/AFWAhab/Masters-Thesis/",
  startDate: "2025-01-01",
  endDate: "2025-06-30",
  status: "completed",
  tags: [
    "Deep Learning",
    "Bioinformatics",
    "Transformers",
    "Gene Expression",
    "DNABERT",
    "CNN",
    "Graph Neural Networks",
  ],
  category: "machine-learning",
  showTableOfContents: true,
  keyFeatures: [
    "Achieved R² of 0.778 on human gene expression prediction, surpassing TExCNN baseline",
    "Implemented and evaluated Xpresso CNN and TExCNN transformer-based models",
    "Developed multi-kernel CNN with attention pooling optimized via Optuna",
    "Extended models to predict expression in zebrafish and pig genomes",
    "Integrated transcription factor binding and CpG island data for enhanced predictions",
    "Explored graph attention networks using Hi-C chromatin interaction data",
  ],
  sections: [
    {
      id: "motivation",
      title: "Motivation & Problem Statement",
      order: 1,
      type: "text",
      content: {
        text: "Understanding how DNA sequences determine gene expression levels is fundamental to biology and medicine. While the human genome was sequenced over two decades ago, predicting which genes are active and to what degree remains a significant challenge. This thesis tackles this problem using modern deep learning approaches.",
        subsections: [
          {
            id: "biological-significance",
            title: "The Biological Challenge",
            content:
              "Gene expression - the process by which information from a gene is used to synthesize functional gene products like proteins - is regulated by complex mechanisms. The expression level of a gene determines how much of its product is produced, directly impacting cellular function. Accurately predicting these levels from DNA sequences alone could revolutionize our understanding of genetic diseases, drug development, and personalized medicine.",
            images: [
              {
                id: "gene-expression-overview",
                src: "/images/mrna-expression/dna_structure.png",
                alt: "DNA Structure and Gene Expression",
                caption:
                  "The flow from DNA to RNA to proteins, showing how genetic information is expressed in cells.",
                width: "60%",
              },
            ],
          },
          {
            id: "computational-challenge",
            title: "The Computational Challenge",
            content:
              "Predicting mRNA expression from DNA sequences is inherently complex because regulatory elements can be located thousands of base pairs away from the genes they control. Traditional approaches using convolutional neural networks were limited to analyzing sequences of about 20kb around genes, missing crucial long-range interactions. This thesis explores how modern transformer architectures can capture these distant relationships.",
          },
        ],
      },
    },
    {
      id: "technical-approach",
      title: "Technical Approach",
      order: 2,
      type: "text",
      content: {
        text: "The research progressed through three main phases: replicating existing state-of-the-art models, developing improved architectures, and extending the approaches to non-human species.",
        subsections: [
          {
            id: "model-replication",
            title: "Reproducing State-of-the-Art",
            content:
              "I began by implementing two landmark models: Xpresso (a CNN-based approach) and TExCNN (which leverages pre-trained DNA language models). Successfully reproducing Xpresso achieved an R² of 0.53, validating the implementation. However, TExCNN proved less reproducible, achieving only R² of 0.57 versus the reported 0.77, highlighting reproducibility challenges in the field.",
          },
          {
            id: "dnabert-embeddings",
            title: "DNABERT-2: Learning DNA Language",
            content:
              'DNABERT-2 is a transformer model pre-trained on DNA sequences, treating genomic sequences as a "language" where regulatory motifs are like words and their interactions form grammar. Unlike simple one-hot encoding, DNABERT-2 captures complex patterns and long-range dependencies in DNA.',
            math: [
              {
                id: "embedding-transformation",
                latex:
                  "Z = \\text{Encoder}(X_{\\text{k-mer}} + P) \\in \\mathbb{R}^{n \\times d_{\\text{model}}}",
                description:
                  "Contextual embeddings where each position incorporates information from the entire sequence",
                displayMode: true,
              },
            ],
          },
          {
            id: "feature-engineering",
            title: "Biological Feature Integration",
            content:
              "Beyond raw sequences, I incorporated multiple biological signals that influence gene expression. Transcription factor (TF) binding data proved particularly valuable - these proteins regulate gene expression by binding to specific DNA sequences. Adding 181 TF binding features increased R² from 0.585 to 0.751, demonstrating that sequence alone cannot capture all regulatory information.",
            images: [
              {
                id: "tss-illustration",
                src: "/images/mrna-expression/TSS_overview.png",
                alt: "Transcription Start Site",
                caption:
                  "The transcription start site (TSS) and surrounding regulatory elements that influence gene expression.",
                width: "70%",
              },
            ],
          },
        ],
      },
    },
    {
      id: "novel-architectures",
      title: "Novel Model Architectures",
      order: 3,
      type: "text",
      content: {
        text: "The core contribution of this thesis is the development of new architectures that achieve competitive performance while being more computationally efficient than existing approaches.",
        subsections: [
          {
            id: "baseline-models",
            title: "Establishing Baselines",
            content:
              "Initial experiments confirmed that gene expression prediction is fundamentally non-linear. Ridge regression on DNABERT embeddings achieved near-zero R², while XGBoost gradient boosting reached R² of 0.756 with transcription factor data. This established that tree-based models could capture non-linear patterns but suggested neural networks might perform better.",
          },
          {
            id: "dual-branch-architecture",
            title: "Dual-Branch Neural Network",
            content:
              "I developed a dual-branch architecture that processes sequence embeddings and biological metadata through separate pathways before fusion. This design allows each data type to be processed optimally before combination. The architecture evolved through multiple iterations, each addressing specific limitations.",
            images: [
              {
                id: "model-architecture",
                src: "/images/mrna-expression/model_architecture.png",
                alt: "Dual-Branch Architecture",
                caption:
                  "The dual-branch architecture processes DNABERT embeddings and metadata separately before fusion for prediction.",
                width: "80%",
              },
            ],
          },
          {
            id: "multi-kernel-cnn",
            title: "Multi-Kernel CNN with Attention",
            content:
              "The final architecture employs multiple convolutional kernels (3, 7, 11) with different dilation rates to capture regulatory motifs at various scales. A key innovation is replacing max-pooling with learned attention pooling, allowing the model to adaptively weight different positions rather than simply taking the maximum.",
            math: [
              {
                id: "attention-pooling",
                latex:
                  "h_j = \\frac{\\sum_i \\exp(\\mathbf{x}_i \\cdot \\mathbf{w}_j) \\mathbf{x}_{ij}}{\\sum_i \\exp(\\mathbf{x}_i \\cdot \\mathbf{w}_j)}",
                description:
                  "Attention pooling computes a weighted sum where weights are learned",
                displayMode: true,
              },
            ],
          },
        ],
      },
    },
    {
      id: "results",
      title: "Results & Performance",
      order: 4,
      type: "results",
      content: {
        text: "The developed models achieved state-of-the-art performance on human gene expression prediction while demonstrating the importance of biological context beyond raw DNA sequences.",
        metrics: [
          {
            name: "Best Model R²",
            value: "0.778",
            description: "Coefficient of determination on test set",
            comparison: {
              baseline: "0.77 (TExCNN)",
              improvement: "+1.0%",
            },
          },
          {
            name: "XGBoost Performance",
            value: "0.756",
            description: "Tree-based model with TF data",
            comparison: {
              baseline: "0.585 (embeddings only)",
              improvement: "+29.2%",
            },
          },
          {
            name: "Training Time",
            value: "35 min",
            description: "Full hyperparameter optimization",
            comparison: {
              baseline: "3+ hours (TExCNN)",
              improvement: "5x faster",
            },
          },
          {
            name: "MSE Reduction",
            value: "40%",
            description: "Error reduction with TF data",
            comparison: {
              baseline: "0.413",
              improvement: "to 0.248",
            },
          },
        ],
        customVisualizations: [
          {
            type: "model-comparison",
            data: {
              title: "Architecture Evolution and Performance",
              models: [
                {
                  name: "Ridge Regression",
                  r2: 0.02,
                  mse: 2.33,
                  params: "14K",
                },
                {
                  name: "XGBoost (embeddings)",
                  r2: 0.585,
                  mse: 0.413,
                  params: "~1M",
                },
                {
                  name: "XGBoost (+ TF)",
                  r2: 0.751,
                  mse: 0.248,
                  params: "~1M",
                },
                {
                  name: "Dual-Branch MLP",
                  r2: 0.616,
                  mse: 0.382,
                  params: "1.1M",
                },
                {
                  name: "MLP + TF + CpG",
                  r2: 0.744,
                  mse: 0.255,
                  params: "1.1M",
                },
                {
                  name: "Multi-Kernel CNN",
                  r2: 0.778,
                  mse: 0.221,
                  params: "0.8M",
                },
              ],
              caption:
                "Progressive improvement through architecture refinement and feature engineering. Note how the CNN achieves best performance with fewer parameters.",
            },
          },
          {
            type: "species-comparison",
            data: {
              title: "Cross-Species Performance Comparison",
              species: [
                {
                  name: "Human",
                  xpresso: 0.54,
                  texcnn: 0.61,
                  ours: 0.778,
                  baseline: 0.18,
                },
                {
                  name: "Mouse",
                  xpresso: 0.52,
                  texcnn: 0.58,
                  ours: "-",
                  baseline: 0.16,
                },
                {
                  name: "Pig",
                  xpresso: "-",
                  texcnn: 0.35,
                  ours: 0.34,
                  baseline: 0.2,
                },
                {
                  name: "Zebrafish",
                  xpresso: 0.09,
                  texcnn: 0.14,
                  ours: 0.32,
                  baseline: 0.11,
                },
              ],
              caption:
                "Performance degrades with evolutionary distance from humans. Our graph attention network (0.32) performs best on zebrafish by incorporating chromatin interaction data.",
            },
          },
          {
            type: "learning-curves",
            data: {
              title: "Training Dynamics: Impact of Biological Features",
              description:
                "Learning curves showing how transcription factor data accelerates convergence and improves final performance.",
              curves: [
                { label: "DNABERT only", color: "#ef4444", finalR2: 0.585 },
                {
                  label: "+ Half-life features",
                  color: "#f97316",
                  finalR2: 0.587,
                },
                { label: "+ TF binding", color: "#22c55e", finalR2: 0.751 },
              ],
            },
          },
        ],
      },
    },
  ],
};