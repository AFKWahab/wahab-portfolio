import { Project } from "../../types/project";

export const vaeGanProject: Project = {
  id: "vae-gan",
  title: "VAE-GAN for Grayscale Image Colorization",
  shortDescription:
    "A variational autoencoder (VAE) and generative adversarial network (GAN) hybrid model for colorizing grayscale images.",
  fullDescription:
    "Advanced machine learning architecture combining VAEs and GANs with Wasserstein loss and skip connections for realistic image colorization.",
  abstract:
    "This work was a project I created with a study partner for our Deep Learning for Visual Recognition course. We received a 100/100 mark, and the best project of the semester. The work aims to advance colorization of grayscale images by improving realism, diversity and colorfulness. We train a new model that combines a Variational Auto-Encoder with a Generative Adversarial Network, implementing skip connections and Wasserstein loss to improve realism and training stability. We show that enhancing a base model with Wasserstein loss and skip-connections significantly improves training stability and visual fidelity, resulting in a 23.7% higher Inception Score.",
  githubUrl:
    "https://gitlab.au.dk/au667387/deep-learning-for-visual-recognition-project",
  startDate: "2024-01-15",
  endDate: "2024-06-30",
  status: "completed",
  tags: ["Machine Learning", "Computer Vision", "GANs", "VAE", "Deep Learning"],
  category: "machine-learning",
  keyFeatures: [
    "VAE-GAN hybrid architecture for image colorization",
    "Wasserstein loss for improved training stability",
    "Skip connections for better feature preservation",
    "PatchGAN discriminator for high-frequency detail enforcement",
    "Perceptual evaluation with 36.6% human fool rate",
  ],
  sections: [
    {
      id: "problem-statement",
      title: "Problem Statement",
      order: 1,
      type: "text",
      content: {
        text: "Colorization of grayscale images is a difficult but impactful task in computer vision. The task involves producing believable color information such that a recipient is compelled into accepting the artificially colorized image as real. Traditional approaches rely heavily on human annotations, while fully autonomous methods face challenges including unstable training, visual artifacts, reduced saturation, and lack of diversity in produced colors.",
        subsections: [
          {
            id: "challenges",
            title: "Key Challenges",
            content:
              "Autonomous colorization models must overcome several technical hurdles: maintaining training stability in adversarial networks, producing realistic colors that fool human perception, ensuring diverse colorizations rather than mode collapse, and avoiding common artifacts like desaturated patches and chromatic noise.",
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
        text: "Our approach combines a Variational Auto-Encoder as the generator within a GAN framework, enhanced with skip connections and Wasserstein loss for improved stability and realism.",
        subsections: [
          {
            id: "vae-theory",
            title: "Variational Auto-Encoder Foundation",
            content:
              "A VAE encodes inputs into a probabilistic latent distribution parameterized by mean μ and standard deviation σ. The reparameterization trick enables gradient-based optimization:",
            math: [
              {
                id: "reparam-trick",
                latex:
                  "z = \\mu + \\sigma \\epsilon, \\quad \\epsilon \\sim \\mathcal{N}(0, 1)",
                description:
                  "Reparameterization trick for sampling from latent distribution",
                displayMode: true,
              },
            ],
          },
          {
            id: "vae-loss",
            title: "VAE Objective Function",
            content:
              "The VAE optimizes a combination of reconstruction accuracy and latent space regularization:",
            math: [
              {
                id: "vae-loss",
                latex:
                  "\\mathcal{L}_{\\text{VAE}} = \\mathcal{L}_{\\text{recon}} + \\mathcal{L}_{\\text{KL}} = -\\mathbb{E}_{q(z|x)} [\\log p(x|z)] + D_{\\text{KL}}(q(z|x) \\| p(z))",
                description:
                  "Complete VAE loss function with reconstruction and KL divergence terms",
                displayMode: true,
              },
            ],
          },
          {
            id: "wasserstein-loss",
            title: "Wasserstein Loss",
            content:
              "Traditional GAN training suffers from gradient saturation. Wasserstein loss addresses this by reformulating the discriminator as a critic that outputs real-valued scores rather than probabilities, approximating the Earth-Mover distance between real and generated distributions.",
            math: [
              {
                id: "wasserstein",
                latex: "\\mathcal{L}_D = D(x) - D(G(z))",
                description: "Wasserstein discriminator loss",
                displayMode: false,
              },
              {
                id: "generator-loss",
                latex: "\\mathcal{L}_G = D(G(z))",
                description: "Generator loss under Wasserstein formulation",
                displayMode: false,
              },
            ],
          },
        ],
        images: [
          {
            id: "architecture",
            src: "/images/vae-gan/model_architecture.drawio.png",
            alt: "VAE-GAN Architecture Diagram",
            caption:
              "Complete model architecture showing VAE encoder-decoder with skip connections and PatchGAN discriminator",
          },
        ],
      },
    },
    {
      id: "results",
      title: "Results & Evaluation",
      order: 3,
      type: "results",
      content: {
        text: "Our model was evaluated using both quantitative metrics and a perceptual study with human subjects. The results demonstrate significant improvements over baseline approaches.",
        metrics: [
          {
            name: "Inception Score",
            value: "20.01",
            description: "Measures quality and diversity of generated images",
            comparison: {
              baseline: "16.17",
              improvement: "23.7%",
            },
          },
          {
            name: "Human Fool Rate",
            value: "36.6%",
            description:
              "Percentage of humans who mistook generated images for real",
            comparison: {
              baseline: "22.5% (pix2pix)",
              improvement: "62.7%",
            },
          },
          {
            name: "FID Score",
            value: "9.90",
            description: "Fréchet Inception Distance - lower is better",
          },
          {
            name: "L1 Pixel Accuracy",
            value: "0.17",
            description: "Per-pixel reconstruction accuracy",
          },
        ],
        subsections: [
          {
            id: "training-stability",
            title: "Training Stability Analysis",
            content:
              "The enhanced model with Wasserstein loss showed significantly more stable training compared to the baseline VAE-GAN. The training curves demonstrate fewer major fluctuations and more consistent convergence patterns.",
          },
          {
            id: "perceptual-study",
            title: "Perceptual Study Results",
            content:
              "We conducted a fool-test with 17 participants evaluating 50 randomly sampled validation images. Each participant viewed image pairs (real vs. generated) for 1 second and attempted to identify the real image.",
          },
          {
            id: "color-diversity",
            title: "Color Diversity Analysis",
            content:
              "Analysis of the hue distribution in generated colorizations reveals limited diversity compared to ground truth samples. The model tends to produce similar colorizations across multiple generations of the same input.",
          },
        ],
        customVisualizations: [
          {
            type: "comparison-table",
            data: {
              title: "Perceptual Study Sample Results",
              items: [
                {
                  id: "16",
                  originalImage:
                    "/images/vae-gan/noteworthyExamples/original_16.png",
                  generatedImage:
                    "/images/vae-gan/noteworthyExamples/generated_16.png",
                  percentage: "17.6%",
                },
                {
                  id: "17",
                  originalImage:
                    "/images/vae-gan/noteworthyExamples/original_17.png",
                  generatedImage:
                    "/images/vae-gan/noteworthyExamples/generated_17.png",
                  percentage: "64.7%",
                },
                {
                  id: "14",
                  originalImage:
                    "/images/vae-gan/noteworthyExamples/original_14.png",
                  generatedImage:
                    "/images/vae-gan/noteworthyExamples/generated_14.png",
                  percentage: "47.1%",
                },
                {
                  id: "37",
                  originalImage:
                    "/images/vae-gan/noteworthyExamples/original_37.png",
                  generatedImage:
                    "/images/vae-gan/noteworthyExamples/generated_37.png",
                  percentage: "52.9%",
                },
                {
                  id: "39",
                  originalImage:
                    "/images/vae-gan/noteworthyExamples/original_39.png",
                  generatedImage:
                    "/images/vae-gan/noteworthyExamples/generated_39.png",
                  percentage: "23.5%",
                },
                {
                  id: "47",
                  originalImage:
                    "/images/vae-gan/noteworthyExamples/original_47.png",
                  generatedImage:
                    "/images/vae-gan/noteworthyExamples/generated_47.png",
                  percentage: "29.4%",
                },
              ],
              caption:
                "Hand-picked examples from the perceptual study showing the percentage of participants who incorrectly labeled the generated image as real. Higher percentages indicate more realistic colorizations.",
            },
          },
          {
            type: "training-chart",
            data: {
              title: "Training Stability: Enhanced Model vs Baseline",
              charts: [
                {
                  title: "Enhanced Model (Ours)",
                  dataPath: "/data/vae_gan/training_data.dat",
                  lines: [
                    {
                      key: "AVG_IS",
                      name: "Inception Score",
                      color: "#ff0000ff",
                      strokeWidth: 3,
                    },
                    {
                      key: "Val_L1_loss",
                      name: "Reconstruction Loss",
                      color: "#33ff00ff",
                      strokeDasharray: "5,5",
                      strokeWidth: 3,
                    },
                    {
                      key: "D_loss",
                      name: "Discriminator Loss",
                      color: "#f97316",
                    },
                    {
                      key: "G_loss",
                      name: "Generator Loss",
                      color: "#14b8a6",
                    },
                  ],
                },
                {
                  title: "Basic VAE-GAN Model",
                  dataPath: "/data/vae_gan/training_data_basic.dat",
                  lines: [
                    {
                      key: "AVG_IS",
                      name: "Inception Score",
                      color: "#ff0000ff",
                      strokeWidth: 3,
                    },
                    {
                      key: "Val_L1_loss",
                      name: "Reconstruction Loss",
                      color: "#33ff00ff",
                      strokeDasharray: "5,5",
                      strokeWidth: 3,
                    },
                    {
                      key: "D_loss",
                      name: "Discriminator Loss",
                      color: "#f97316",
                    },
                    {
                      key: "G_loss",
                      name: "Generator Loss",
                      color: "#14b8a6",
                    },
                  ],
                },
              ],
              caption:
                "Training curves comparing our enhanced model (left) with the baseline VAE-GAN (right). Our model shows significantly more stable convergence with fewer oscillations.",
            },
          },
          {
            type: "histogram",
            data: {
              title: "Hue Distribution: Generated vs Ground Truth",
              dataPath: "/data/vae_gan/histogram_sample_40.dat",
              caption:
                "Comparison of hue distributions between ground truth images and multiple generated samples. The model produces consistent but limited color diversity across different generation attempts.",
            },
          },
        ],
      },
    },
  ],
};
