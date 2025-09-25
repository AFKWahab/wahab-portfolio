// Fixed data/projects.ts - Replace the entire file
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'vae-gan',
    title: 'VAE-GAN for Grayscale Image Colorization',
    shortDescription: 'A variational autoencoder (VAE) and generative adversarial network (GAN) hybrid model for colorizing grayscale images.',
    fullDescription: 'Advanced machine learning architecture combining VAEs and GANs with Wasserstein loss and skip connections for realistic image colorization.',
    abstract: 'This work was a project I created with a study partner for our Deep Learning for Visual Recognition course. We received a 100/100 mark, and the best project of the semester. The work aims to advance colorization of grayscale images by improving realism, diversity and colorfulness. We train a new model that combines a Variational Auto-Encoder with a Generative Adversarial Network, implementing skip connections and Wasserstein loss to improve realism and training stability. We show that enhancing a base model with Wasserstein loss and skip-connections significantly improves training stability and visual fidelity, resulting in a 23.7% higher Inception Score.',
    githubUrl: 'https://gitlab.au.dk/au667387/deep-learning-for-visual-recognition-project',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    status: 'completed',
    tags: ['Machine Learning', 'Computer Vision', 'GANs', 'VAE', 'Deep Learning'],
    category: 'machine-learning',
    keyFeatures: [
      'VAE-GAN hybrid architecture for image colorization',
      'Wasserstein loss for improved training stability',
      'Skip connections for better feature preservation',
      'PatchGAN discriminator for high-frequency detail enforcement',
      'Perceptual evaluation with 36.6% human fool rate'
    ],
    sections: [
      {
        id: 'problem-statement',
        title: 'Problem Statement',
        order: 1,
        type: 'text',
        content: {
          text: 'Colorization of grayscale images is a difficult but impactful task in computer vision. The task involves producing believable color information such that a recipient is compelled into accepting the artificially colorized image as real. Traditional approaches rely heavily on human annotations, while fully autonomous methods face challenges including unstable training, visual artifacts, reduced saturation, and lack of diversity in produced colors.',
          subsections: [
            {
              id: 'challenges',
              title: 'Key Challenges',
              content: 'Autonomous colorization models must overcome several technical hurdles: maintaining training stability in adversarial networks, producing realistic colors that fool human perception, ensuring diverse colorizations rather than mode collapse, and avoiding common artifacts like desaturated patches and chromatic noise.',
            }
          ]
        }
      },
      {
        id: 'technical-approach',
        title: 'Technical Approach',
        order: 2,
        type: 'text',
        content: {
          text: 'Our approach combines a Variational Auto-Encoder as the generator within a GAN framework, enhanced with skip connections and Wasserstein loss for improved stability and realism.',
          subsections: [
            {
              id: 'vae-theory',
              title: 'Variational Auto-Encoder Foundation',
              content: 'A VAE encodes inputs into a probabilistic latent distribution parameterized by mean μ and standard deviation σ. The reparameterization trick enables gradient-based optimization:',
              math: [
                {
                  id: 'reparam-trick',
                  latex: 'z = \\mu + \\sigma \\epsilon, \\quad \\epsilon \\sim \\mathcal{N}(0, 1)',
                  description: 'Reparameterization trick for sampling from latent distribution',
                  displayMode: true
                }
              ]
            },
            {
              id: 'vae-loss',
              title: 'VAE Objective Function',
              content: 'The VAE optimizes a combination of reconstruction accuracy and latent space regularization:',
              math: [
                {
                  id: 'vae-loss',
                  latex: '\\mathcal{L}_{\\text{VAE}} = \\mathcal{L}_{\\text{recon}} + \\mathcal{L}_{\\text{KL}} = -\\mathbb{E}_{q(z|x)} [\\log p(x|z)] + D_{\\text{KL}}(q(z|x) \\| p(z))',
                  description: 'Complete VAE loss function with reconstruction and KL divergence terms',
                  displayMode: true
                }
              ]
            },
            {
              id: 'wasserstein-loss',
              title: 'Wasserstein Loss',
              content: 'Traditional GAN training suffers from gradient saturation. Wasserstein loss addresses this by reformulating the discriminator as a critic that outputs real-valued scores rather than probabilities, approximating the Earth-Mover distance between real and generated distributions.',
              math: [
                {
                  id: 'wasserstein',
                  latex: '\\mathcal{L}_D = D(x) - D(G(z))',
                  description: 'Wasserstein discriminator loss',
                  displayMode: false
                },
                {
                  id: 'generator-loss',
                  latex: '\\mathcal{L}_G = D(G(z))',
                  description: 'Generator loss under Wasserstein formulation',
                  displayMode: false
                }
              ]
            }
          ],
          images: [
            {
              id: 'architecture',
              src: '/images/vae-gan/model_architecture.drawio.png',
              alt: 'VAE-GAN Architecture Diagram',
              caption: 'Complete model architecture showing VAE encoder-decoder with skip connections and PatchGAN discriminator'
            }
          ]
        }
      },
      {
        id: 'results',
        title: 'Results & Evaluation',
        order: 3,
        type: 'results',
        content: {
          text: 'Our model was evaluated using both quantitative metrics and a perceptual study with human subjects. The results demonstrate significant improvements over baseline approaches.',
          metrics: [
            {
              name: 'Inception Score',
              value: '20.01',
              description: 'Measures quality and diversity of generated images',
              comparison: {
                baseline: '16.17',
                improvement: '23.7%'
              }
            },
            {
              name: 'Human Fool Rate',
              value: '36.6%',
              description: 'Percentage of humans who mistook generated images for real',
              comparison: {
                baseline: '22.5% (pix2pix)',
                improvement: '62.7%'
              }
            },
            {
              name: 'FID Score',
              value: '9.90',
              description: 'Fréchet Inception Distance - lower is better'
            },
            {
              name: 'L1 Pixel Accuracy',
              value: '0.17',
              description: 'Per-pixel reconstruction accuracy'
            }
          ],
          subsections: [
            {
              id: 'training-stability',
              title: 'Training Stability Analysis',
              content: 'The enhanced model with Wasserstein loss showed significantly more stable training compared to the baseline VAE-GAN. The training curves demonstrate fewer major fluctuations and more consistent convergence patterns.',
            },
            {
              id: 'perceptual-study',
              title: 'Perceptual Study Results',
              content: 'We conducted a fool-test with 17 participants evaluating 50 randomly sampled validation images. Each participant viewed image pairs (real vs. generated) for 1 second and attempted to identify the real image.',
            },
            {
              id: 'color-diversity',
              title: 'Color Diversity Analysis',
              content: 'Analysis of the hue distribution in generated colorizations reveals limited diversity compared to ground truth samples. The model tends to produce similar colorizations across multiple generations of the same input.',
            }
          ],
          customVisualizations: [
            {
              type: 'comparison-table',
              data: {
                title: 'Perceptual Study Sample Results',
                items: [
                  {
                    id: '16',
                    originalImage: '/images/vae-gan/noteworthyExamples/original_16.png',
                    generatedImage: '/images/vae-gan/noteworthyExamples/generated_16.png',
                    percentage: '17.6%'
                  },
                  {
                    id: '17',
                    originalImage: '/images/vae-gan/noteworthyExamples/original_17.png',
                    generatedImage: '/images/vae-gan/noteworthyExamples/generated_17.png',
                    percentage: '64.7%'
                  },
                  {
                    id: '14',
                    originalImage: '/images/vae-gan/noteworthyExamples/original_14.png',
                    generatedImage: '/images/vae-gan/noteworthyExamples/generated_14.png',
                    percentage: '47.1%'
                  },
                  {
                    id: '37',
                    originalImage: '/images/vae-gan/noteworthyExamples/original_37.png',
                    generatedImage: '/images/vae-gan/noteworthyExamples/generated_37.png',
                    percentage: '52.9%'
                  },
                  {
                    id: '39',
                    originalImage: '/images/vae-gan/noteworthyExamples/original_39.png',
                    generatedImage: '/images/vae-gan/noteworthyExamples/generated_39.png',
                    percentage: '23.5%'
                  },
                  {
                    id: '47',
                    originalImage: '/images/vae-gan/noteworthyExamples/original_47.png',
                    generatedImage: '/images/vae-gan/noteworthyExamples/generated_47.png',
                    percentage: '29.4%'
                  }
                ],
                caption: 'Hand-picked examples from the perceptual study showing the percentage of participants who incorrectly labeled the generated image as real. Higher percentages indicate more realistic colorizations.'
              }
            },
            {
              type: 'training-chart',
              data: {
                title: 'Training Stability: Enhanced Model vs Baseline',
                charts: [
                  {
                    title: 'Enhanced Model (Ours)',
                    dataPath: '/data/vae_gan/training_data.dat',
                    lines: [
                      { key: 'AVG_IS', name: 'Inception Score', color: '#ff0000ff', strokeWidth: 3 },
                      { key: 'Val_L1_loss', name: 'Reconstruction Loss', color: '#33ff00ff', strokeDasharray: '5,5', strokeWidth: 3 },
                      { key: 'D_loss', name: 'Discriminator Loss', color: '#f97316' },
                      { key: 'G_loss', name: 'Generator Loss', color: '#14b8a6' }
                    ]
                  },
                  {
                    title: 'Basic VAE-GAN Model',
                    dataPath: '/data/vae_gan/training_data_basic.dat',
                    lines: [
                      { key: 'AVG_IS', name: 'Inception Score', color: '#ff0000ff', strokeWidth: 3 },
                      { key: 'Val_L1_loss', name: 'Reconstruction Loss', color: '#33ff00ff', strokeDasharray: '5,5', strokeWidth: 3 },
                      { key: 'D_loss', name: 'Discriminator Loss', color: '#f97316' },
                      { key: 'G_loss', name: 'Generator Loss', color: '#14b8a6' }
                    ]
                  }
                ],
                caption: 'Training curves comparing our enhanced model (left) with the baseline VAE-GAN (right). Our model shows significantly more stable convergence with fewer oscillations.'
              }
            },
            {
              type: 'histogram',
              data: {
                title: 'Hue Distribution: Generated vs Ground Truth',
                dataPath: '/data/vae_gan/histogram_sample_40.dat',
                caption: 'Comparison of hue distributions between ground truth images and multiple generated samples. The model produces consistent but limited color diversity across different generation attempts.'
              }
            }
          ]
        }
      }
    ]
  },
  {
    id: 'predicting-mrna-expression-levels-using-deep-learning',
    title: 'Predicting mRNA Expression Levels Using Deep Learning',
    shortDescription: 'A deep learning model to predict mRNA expression levels from genomic sequences.',
    fullDescription: 'This project focuses on developing a deep learning model to predict mRNA expression levels based on genomic sequences. The model is trained on a large dataset of RNA-Seq data and aims to provide insights into gene expression regulation.',
    githubUrl: 'https://github.com/adamuser/mrna-expression-prediction',
    startDate: '2023-09-01',
    endDate: '2024-01-15',
    status: 'completed',
    keyFeatures: [
      'Convolutional neural networks for sequence analysis',
      'Large-scale RNA-Seq data processing',
      'Gene expression prediction algorithms',
      'Regulatory element identification',
      'Cross-validation and performance metrics',
      'Biological interpretation of results'
    ],
  },
// Updated project entry for data/projects.ts
// Updated project entry for data/projects.ts
{
  id: '3d-protein-folding',
  title: 'Algorithms for Protein Folding in the 3D HP Model',
  shortDescription: 'Implementation and analysis of approximation algorithms for protein folding in the three-dimensional Hydrophobic-Polar (HP) model.',
  fullDescription: 'A comprehensive bioinformatics project implementing and evaluating the Hart-Istrail 3/8-approximation algorithm and Ant Colony Optimization for the NP-complete 3D protein folding problem.',
  abstract: 'This project was completed as part of a 10 ECTS Computer Science course focusing on bioinformatics. We explored the design and analysis of algorithms for protein folding in the three-dimensional Hydrophobic-Polar (HP) model, implementing both the Hart-Istrail 3/8-approximation algorithm and an Ant Colony Optimization approach. The work includes theoretical analysis of the NP-completeness of the problem, custom C++ visualization tools using OpenGL, and comprehensive performance evaluation on benchmark datasets.',
  githubUrl: 'https://gitlab.au.dk/bioinformatik/project-in-bioinformatics',
  startDate: '2024-09-01',
  endDate: '2024-12-15',
  status: 'completed',
  tags: ['Bioinformatics', 'Algorithms', 'C++', 'OpenGL', 'Protein Folding', 'Approximation Algorithms', 'Ant Colony Optimization'],
  category: 'bioinformatics',
  showTableOfContents: true,
  keyFeatures: [
    'Hart-Istrail 3/8-approximation algorithm implementation',
    'Ant Colony Optimization for 3D HP protein folding',
    'Custom OpenGL visualization tool with ImGui interface',
    'Theoretical analysis of NP-completeness',
    'Performance evaluation on benchmark datasets',
    'Real-time 3D protein fold visualization and debugging'
  ],
  sections: [
    {
      id: 'hp-model-introduction',
      title: 'The 3D HP Model',
      order: 1,
      type: 'text',
      content: {
        text: 'Protein folding is one of the fundamental challenges in computational biology. The Hydrophobic-Polar (HP) model simplifies this complex problem by abstracting amino acids into just two categories: hydrophobic (H) residues that prefer to cluster away from water, and polar (P) residues that interact favorably with the surrounding aqueous environment.',
        subsections: [
          {
            id: 'model-representation',
            title: 'Lattice Representation',
            content: 'In the HP model, proteins are represented as self-avoiding walks on a lattice - typically a 2D square grid or 3D cubic grid. Each amino acid occupies a unique grid point, and adjacent amino acids in the sequence must occupy neighboring grid points. This embedding must satisfy the constraint that no two amino acids share the same grid point, making it a self-avoiding walk.',
            images: [
              {
                id: 'hp-model-2d',
                src: '/images/3d-protein/hpmodel.png',
                alt: '2D HP Model Visualization',
                caption: 'A 2D HP lattice showing hydrophobic residues (red) and polar residues (blue). The protein sequence is folded as a self-avoiding walk on the grid.',
                width: '60%'
              }
            ]
          },
          {
            id: 'energy-function',
            title: 'Energy Calculation',
            content: 'The energy of a conformation is determined by counting hydrophobic-hydrophobic contacts between non-adjacent residues in the sequence. Each H-H contact between residues that are neighbors on the grid but not consecutive in the sequence contributes -1 to the total energy.',
            math: [
              {
                id: 'energy-function',
                latex: '\\text{Score}(F) = -\\sum_{\\substack{i,j \\\\ \\text{adjacent on grid}}} \\delta(i, j)',
                description: 'Energy function where δ(i,j) = 1 if both residues i and j are hydrophobic and non-consecutive in sequence',
                displayMode: true
              }
            ],
            images: [
              {
                id: 'hp-model-scoring',
                src: '/images/3d-protein/hpmodel_score.png',
                alt: 'HP Model Scoring Example',
                caption: 'Scoring example showing four H-H contacts (orange lines) between non-consecutive hydrophobic residues, resulting in a score of -4.',
                width: '60%'
              }
            ]
          },
          {
            id: 'np-completeness',
            title: 'Computational Complexity',
            content: 'The 3D HP folding problem is NP-complete, as proven by Berger and Leighton through a polynomial-time reduction from the bin-packing problem. Their construction encodes bin constraints by dividing the HP sequence into segments that must fold into "compartments" in 3D, where each compartment corresponds to a bin and cannot exceed a certain capacity. This theoretical result justifies the need for approximation algorithms and heuristic approaches, since exact solutions cannot be computed in polynomial time for larger instances unless P = NP.'
          }
        ]
      }
    },
    {
      id: 'hart-istrail-algorithm',
      title: 'Hart-Istrail 3/8-Approximation Algorithm',
      order: 2,
      type: 'text',
      content: {
        text: 'The Hart-Istrail algorithm provides a guaranteed 3/8-approximation to the optimal solution by exploiting parity constraints and structural decomposition of protein sequences. The algorithm works by first solving the 2D version of the problem, then extending to 3D through a layered approach.',
        subsections: [
          {
            id: 'structural-decomposition',
            title: 'Structural Decomposition and Block Analysis',
            content: 'The algorithm begins by decomposing the protein sequence into alternating runs of polar (0s) and hydrophobic (1s) residues. This decomposition respects a crucial parity constraint: in a 3D lattice, two residues can only be topological neighbors if their sequence positions differ by an odd number. This constraint fundamentally limits which hydrophobic residues can form contacts.',
            math: [
              {
                id: 'sequence-decomposition',
                latex: 's = Z_0 I_1 Z_1 I_2 Z_2 \\cdots I_k Z_k',
                description: 'Sequence decomposition where Z_i are runs of 0s (polar) and I_i are runs of 1s (hydrophobic)',
                displayMode: true
              }
            ]
          },
          {
            id: '2d-algorithm',
            title: 'The 2D Folding Foundation',
            content: 'The 2D algorithm forms the foundation for the 3D extension. It works by partitioning the sequence into two parts B\' and B\'\', where B\' becomes a y-superblock and B\'\' becomes an x-superblock. The algorithm finds a folding point that balances the number of hydrophobic residues between x-type and y-type blocks, ensuring optimal pairing.',
            math: [
              {
                id: 'folding-partition',
                latex: 'm_{xy} = \\min(N_x(B_1), N_y(B_2)), \\quad m_{yx} = \\min(N_y(B_1), N_x(B_2))',
                description: 'Partition selection criteria measuring balance between x- and y-type hydrophobic residues',
                displayMode: true
              }
            ]
          },
          {
            id: 'normal-form',
            title: 'Normal Form and Superblock Construction',
            content: 'Each block is arranged in a "normal form" where hydrophobic residues (1s) are placed along a straight line (the "face" of the block), and polar zero-runs are folded as loops on one side. When multiple blocks are combined into superblocks, their faces align along the same line, creating a systematic structure where every second residue pair down the middle can potentially score.',
            images: [
              {
                id: '2d-folding-example',
                src: '/images/3d-protein/foldingPointExample.png',
                alt: '2D Folding Point Example',
                caption: 'A 2D fold showing the selected folding point (green line). Blue boxes show y-blocks, red boxes show x-blocks, and black boxes show z-blocks. Orange lines indicate potential scoring positions.',
                width: '70%'
              }
            ]
          },
          {
            id: '3d-extension',
            title: 'Extension to 3D: Layer-by-Layer Construction',
            content: 'The 3D algorithm extends the 2D approach by repeatedly applying the 2D folding algorithm in adjacent (x,y) planes. Each layer is constructed with a specific number J of scoring H residues, and planes are folded face-to-face to maximize inter-layer contacts. The algorithm calculates the optimal layer size and number of layers to ensure systematic coverage.',
            math: [
              {
                id: 'layer-calculation',
                latex: 'J = \\left\\lfloor \\frac{L - 2K + 1}{K} \\right\\rfloor, \\quad K = \\lfloor \\sqrt{\\min(N_x, N_y)} \\rfloor',
                description: 'Calculation of layer size J and number of layers K, where L is sequence length and N_x, N_y are counts of x-type and y-type blocks',
                displayMode: true
              }
            ],
            images: [
              {
                id: 'ideal-3d-fold',
                src: '/images/3d-protein/ideal_fold.png',
                alt: 'Ideal 3D Fold Structure',
                caption: 'An ideal 3D fold showing multiple layers with face-to-face alignment. This structure maximizes contacts between layers.',
                width: '65%'
              }
            ]
          },
          {
            id: 'layered-folding',
            title: 'Handling Real-World Sequences',
            content: 'In practice, protein sequences rarely align perfectly with the theoretical ideal. The algorithm handles this by calculating minimum 2D folds that guarantee J scoring residues per layer. When perfect alignment isn\'t possible, the algorithm decreases J or applies the 2D algorithm to remaining blocks. This flexibility ensures the algorithm works on all sequences while maintaining performance guarantees.',
            images: [
              {
                id: 'layer-fold-example',
                src: '/images/3d-protein/2.5_layer_fold.png',
                alt: '2.5 Layer Fold Example',
                caption: 'A 3D fold of sequence S2-8 with J=2. The bottom two layers each contain exactly 2 scoring H residues, while the top layer handles remaining residues using the 2D algorithm.',
                width: '65%'
              }
            ]
          },
          {
            id: 'approximation-ratio',
            title: 'Approximation Guarantee and Performance Analysis',
            content: 'The algorithm achieves its 3/8-approximation by ensuring that each hydrophobic residue in the constructed fold can potentially form contacts in three directions: within its 2D plane, with the plane above, and with the plane below. The theoretical maximum number of contacts is bounded by the even-odd residue distribution.',
            math: [
              {
                id: 'contact-bound',
                latex: 'C_{3D}(S) = 4\\bigl(\\min\\{O(S), E(S)\\}\\bigr) + 2',
                description: 'Upper bound on achievable contacts where O(S) and E(S) are odd and even positioned hydrophobic residues',
                displayMode: true
              },
              {
                id: 'approximation-formula',
                latex: '\\text{Contacts Achieved} \\geq 3 \\left( \\frac{O(S)}{2} - o(\\sqrt{O(S)}) \\right)',
                description: 'Lower bound on contacts achieved by the algorithm, leading to the 3/8 approximation ratio',
                displayMode: true
              }
            ]
          }
        ]
      }
    },
    {
      id: 'ant-colony-optimization',
      title: 'Ant Colony Optimization Approach',
      order: 3,
      type: 'text',
      content: {
        text: 'Ant Colony Optimization (ACO) is a nature-inspired metaheuristic that mimics how real ant colonies discover and reinforce the shortest path to food sources through pheromone trail deposits. Originally designed for the Traveling Salesman Problem, ACO has been successfully adapted to many combinatorial optimization problems, including protein folding in the HP model.',
        subsections: [
          {
            id: 'aco-fundamentals',
            title: 'ACO Fundamentals and Biological Inspiration',
            content: 'In nature, ants initially explore randomly, but when they find food, they return to the nest while depositing pheromones. Shorter paths accumulate more pheromone (due to faster round-trips), attracting more ants and creating positive feedback. Over time, the colony converges on optimal routes. This process combines exploitation of good solutions (following strong pheromone trails) with exploration of new possibilities (random choices when pheromone levels are low).'
          },
          {
            id: 'aco-3d-hp-adaptation',
            title: 'Adapting ACO to the 3D HP Model',
            content: 'For protein folding, each artificial ant constructs a conformation by sequentially choosing folding directions from {S, L, R, U, D} (straight/forward, left, right, up, down). These directions are relative to the current orientation, making the representation compact and intuitive. The algorithm maintains pheromone values τ_{i,d} for each position i and direction d, representing the collective wisdom of the ant colony.',
            math: [
              {
                id: 'aco-probability',
                latex: 'p_{i,d} = \\frac{[\\tau_{i,d}]^\\alpha \\cdot [\\eta_{i,d}]^\\beta}{\\sum_{e \\in \\{S,L,R,U,D\\}} [\\tau_{i,e}]^\\alpha \\cdot [\\eta_{i,e}]^\\beta}',
                description: 'Probability of choosing direction d at position i, where α weights pheromone influence and β weights heuristic influence',
                displayMode: true
              }
            ]
          },
          {
            id: 'heuristic-function',
            title: 'Local Heuristic and Energy Evaluation',
            content: 'The heuristic function η_{i,d} captures immediate reward by evaluating potential hydrophobic contacts. It uses a Boltzmann distribution to convert energy differences into probabilities, where γ acts as an inverse temperature parameter controlling the greediness of the search.',
            math: [
              {
                id: 'heuristic-function',
                latex: '\\eta_{i,d} = e^{-\\gamma \\cdot h_{i,d}}',
                description: 'Heuristic function where h_{i,d} is the number of H-H contacts achieved by placing residue i in direction d',
                displayMode: true
              }
            ]
          },
          {
            id: 'construction-process',
            title: 'Probabilistic Construction and Conflict Resolution',
            content: 'Construction begins at a randomly chosen position in the sequence, with the first residue placed at (0,0,0). The algorithm alternates between folding left and right segments based on the ratio of unfolded residues, preventing one side from consuming too much space. When collisions occur, the ant performs partial backtracking (typically rolling back 50% of the current fold) and retries from an earlier valid state.'
          },
          {
            id: 'pheromone-dynamics',
            title: 'Pheromone Update and Learning Mechanism',
            content: 'After all ants complete construction, pheromone trails undergo two processes: evaporation and reinforcement. Evaporation prevents premature convergence by reducing all pheromone values by factor ρ. High-quality conformations then deposit new pheromone proportional to their energy score, creating stronger trails for successful strategies.',
            math: [
              {
                id: 'pheromone-evaporation',
                latex: '\\tau_{i,d} \\leftarrow \\rho \\cdot \\tau_{i,d}',
                description: 'Pheromone evaporation where 0 < ρ ≤ 1 is the persistence parameter',
                displayMode: false
              },
              {
                id: 'pheromone-deposit',
                latex: '\\tau_{i,d} \\leftarrow \\tau_{i,d} + \\Delta_{i,d,c}',
                description: 'Pheromone reinforcement where Δ_{i,d,c} is proportional to conformation c\'s quality',
                displayMode: false
              }
            ]
          },
          {
            id: 'local-search',
            title: 'Long-Range Mutation for Enhanced Exploration',
            content: 'Pure local moves like single residue reorientations are often insufficient in 3D. Instead, the algorithm employs long-range mutation: selecting a residue position k, changing its direction, then probabilistically rebuilding subsequent residues. Each residue keeps its old direction with probability p̂ (if feasible) or randomly selects a new direction based on heuristic values. This allows significant structural reorganization while maintaining some existing good features.'
          },
          {
            id: 'aco-example-result',
            title: 'ACO Folding Results',
            content: 'The ACO algorithm produces compact, diverse structures by exploring the conformational space more thoroughly than deterministic approaches. The resulting folds often show creative arrangements that human designers might not consider, demonstrating the power of guided stochastic search.',
            images: [
              {
                id: 'aco-fold-example',
                src: '/images/3d-protein/aco_implementation_example.png',
                alt: 'ACO Algorithm Result',
                caption: 'Example fold generated by the Ant Colony Optimization algorithm, showing a compact structure with multiple H-H contacts. Notice the creative folding pattern that differs significantly from the systematic layering of the Hart-Istrail approach.',
                width: '60%'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'visualization-tool',
      title: 'Interactive 3D Visualization System',
      order: 4,
      type: 'text',
      content: {
        text: 'Understanding and debugging 3D protein folds requires sophisticated visualization capabilities. Traditional 2D representations fail to capture the spatial relationships crucial for analyzing folding algorithms. We developed a comprehensive C++ visualization system using modern OpenGL for high-performance rendering and ImGui for intuitive user interaction.',
        subsections: [
          {
            id: 'motivation-and-design',
            title: 'Design Motivation and Requirements',
            content: 'When implementing complex folding algorithms, visualization serves multiple critical purposes: debugging algorithm correctness, understanding folding patterns, validating energy calculations, and communicating results. Our system needed to handle real-time manipulation of 3D structures, display both geometric and biochemical information (H vs P residues, scoring contacts), and provide debugging capabilities for algorithm development.'
          },
          {
            id: 'coordinate-system-complexity',
            title: '3D Coordinate System and Context Handling',
            content: 'Extending from 2D to 3D folding reveals unexpected complexity in coordinate system management. In 2D, directions can be represented simply as {north, east, south, west} or relatively as {left, forward, right}. In 3D, relative representations require tracking not just current direction but also rotation state, as continuous "up" movements form a circular path requiring 90-degree rotations.',
            images: [
              {
                id: 'coordinate-system',
                src: '/images/3d-protein/3D_coordinate_system.png',
                alt: '3D Coordinate System',
                caption: 'Our 3D coordinate system: north/south along z-axis, east/west along x-axis, up/down along y-axis. This standard provides consistent spatial reference for all folding operations.',
                width: '50%'
              }
            ]
          },
          {
            id: 'context-tracking',
            title: 'Rotation and Context Tracking',
            content: 'Consider the folding sequence {forward, up, up}: after two "up" moves, the rotation state changes by 180 degrees, meaning subsequent "right" moves now point in the opposite x-direction. This context dependency requires careful tracking of facing direction and local coordinate systems throughout the folding process.',
            images: [
              {
                id: 'folding-context-before',
                src: '/images/3d-protein/4pointexample_2.png',
                alt: 'Initial Folding Context',
                caption: 'Initial state: forward direction (red arrow) pointing north, upward direction (green arrow) pointing up, with rotation = 0°.',
                width: '45%'
              },
              {
                id: 'folding-context-after',
                src: '/images/3d-protein/4pointexample_3.png',
                alt: 'Final Folding Context',
                caption: 'After {forward, up, up}: forward direction rotated, upward direction now pointing down, rotation = 180°.',
                width: '45%'
              }
            ]
          },
          {
            id: 'opengl-architecture',
            title: 'OpenGL Rendering Architecture',
            content: 'The visualization uses modern OpenGL with vertex buffer objects (VBOs) and shader programs for efficient GPU rendering. Protein residues are rendered as spheres with procedural geometry, connected by lines representing sequence adjacency. The system uses instanced rendering to handle hundreds of residues efficiently, with color-coding for residue types (red for H, blue for P) and special highlighting for scoring H-H contacts.'
          },
          {
            id: 'user-interface-design',
            title: 'ImGui Interface Design and Functionality',
            content: 'The user interface balances comprehensive functionality with usability. Core features include coordinate input for manual residue placement, JSON file loading for algorithm results, individual residue inspection and modification, visual element toggling (spheres, connections, labels), and real-time camera controls with WASD movement and mouse look. The interface supports both algorithm development (debugging mode) and result presentation (clean visualization mode).',
            images: [
              {
                id: 'visualization-interface',
                src: '/images/3d-protein/3dvisualization.png',
                alt: 'Visualization Tool Interface',
                caption: 'Complete visualization interface showing a 3D protein fold with ImGui control panel. Users can inspect individual residues, toggle visual elements, load/save configurations, and navigate the 3D space in real-time.',
                width: '75%'
              }
            ]
          },
          {
            id: 'json-integration',
            title: 'Data Integration and Algorithm Coupling',
            content: 'The visualization system integrates seamlessly with our C++ HP model implementation through a JSON interface. Algorithms can export fold results as structured data containing residue coordinates, types, and scoring information. This separation allows algorithm development to proceed independently of visualization concerns while maintaining easy result inspection. The JSON format also enables data exchange with external analysis tools and result archiving.'
          },
          {
            id: 'debugging-capabilities',
            title: 'Debugging and Algorithm Development Support',
            content: 'During algorithm development, the visualization proved invaluable for identifying subtle bugs: incorrect coordinate calculations, missing constraint checks, and energy scoring errors. The ability to step through folding processes, highlight specific residue interactions, and compare algorithm outputs side-by-side accelerated development significantly. Features like residue labeling, distance measurement, and fold validation helped ensure implementation correctness.'
          }
        ]
      }
    },
    {
      id: 'results-analysis',
      title: 'Results and Performance Analysis',
      order: 5,
      type: 'results',
      content: {
        text: 'We evaluated both algorithms on benchmark protein sequences from the literature, comparing their performance against known optimal solutions and analyzing their computational efficiency. The benchmark dataset consists of 48-residue sequences with established "best known energy" values from multiple research groups.',
        metrics: [
          {
            name: 'ACO Average Score',
            value: '-12.6',
            description: 'Average energy score across benchmark sequences',
            comparison: {
              baseline: '-26.0 (optimal)',
              improvement: '48.5% of optimal'
            }
          },
          {
            name: 'Hart-Istrail Score',
            value: '-8.7',
            description: 'Average energy score for approximation algorithm',
            comparison: {
              baseline: '-26.0 (optimal)',
              improvement: '33.5% of optimal'
            }
          },
          {
            name: 'ACO Runtime',
            value: '26.2s',
            description: 'Average runtime per sequence (1000 iterations)',
          },
          {
            name: 'Hart-Istrail Runtime',
            value: '<0.1s',
            description: 'Deterministic algorithm with O(n²) complexity',
          }
        ],
        subsections: [
          {
            id: 'benchmark-dataset',
            title: 'Benchmark Dataset and Evaluation Methodology',
            content: 'Our evaluation uses sequences from the widely-cited Tortilla HP benchmark, originally hosted at Sandia National Laboratories. While the original site is no longer maintained, these sequences have been used across multiple research papers, providing reliable performance baselines. Each sequence is 48 residues long, and the "best known energy" values represent the best results found by various research groups using different approaches.'
          },
          {
            id: 'algorithm-comparison',
            title: 'Comparative Algorithm Performance',
            content: 'The Ant Colony Optimization consistently outperformed our Hart-Istrail implementation across all test sequences, achieving approximately 48% of optimal scores compared to 34%. This represents a significant improvement in solution quality. The ACO approach requires substantially more computation time (26.2 seconds vs. <0.1 seconds), but its ability to explore diverse conformational states through guided stochastic search leads to superior energy minimization.'
          },
          {
            id: 'approximation-analysis',
            title: 'Approximation Ratio Analysis and Implementation Challenges',
            content: 'Our Hart-Istrail implementation did not achieve the theoretical 3/8-approximation ratio. Several factors contribute to this gap: incomplete handling of edge cases in block boundary processing, the relatively short sequence lengths (48 residues) where boundary effects dominate, and implementation complexity of the full algorithm specification. The approximation guarantee primarily holds for longer sequences where the systematic layering approach can achieve its theoretical performance.'
          },
          {
            id: 'convergence-behavior',
            title: 'ACO Convergence Analysis and Parameter Sensitivity',
            content: 'The ACO algorithm typically converged within 30-50 iterations, with most significant improvements occurring in early stages. However, some sequences showed late-stage improvements even after 100+ iterations, suggesting that early stopping mechanisms must balance computational efficiency with solution quality. Parameter tuning revealed that α=1.0 (pheromone influence) and β=2.0 (heuristic influence) provided the best balance between exploration and exploitation.'
          }
        ],
        customVisualizations: [
          {
            type: 'benchmark-table',
            data: {
              title: 'Benchmark Results Comparison',
              sequences: [
                { id: 'S2-1', length: 48, optimal: -32, aco: -14, hart: -7 },
                { id: 'S2-2', length: 48, optimal: -34, aco: -13, hart: -10 },
                { id: 'S2-3', length: 48, optimal: -34, aco: -13, hart: -6 },
                { id: 'S2-4', length: 48, optimal: -33, aco: -14, hart: -5 },
                { id: 'S2-5', length: 48, optimal: -32, aco: -11, hart: -9 },
                { id: 'S2-6', length: 48, optimal: -32, aco: -10, hart: -11 },
                { id: 'S2-7', length: 48, optimal: -32, aco: -12, hart: -11 },
                { id: 'S2-8', length: 48, optimal: -31, aco: -13, hart: -14 },
                { id: 'S2-9', length: 48, optimal: -34, aco: -12, hart: -8 },
                { id: 'S2-10', length: 48, optimal: -33, aco: -10, hart: -7 }
              ],
              caption: 'Comparison of energy scores achieved by ACO and Hart-Istrail algorithms on benchmark protein sequences. Lower (more negative) scores indicate better folding quality. ACO consistently outperforms Hart-Istrail, achieving nearly 50% of optimal performance compared to Hart-Istrail\'s 34%.'
            }
          },
          {
            type: 'performance-chart',
            data: {
              title: 'Algorithm Performance vs Optimal Scores',
              chartImage: '/images/3d-protein/sequence_id_vs_scores.png',
              caption: 'Performance comparison across all benchmark sequences. ACO (blue) consistently achieves better results than Hart-Istrail (orange) when compared to optimal scores (green) and the theoretical 3/8-approximation bound (red). The gap between our Hart-Istrail implementation and the theoretical guarantee highlights the complexity of achieving optimal performance in practice.'
            }
          }
        ]
      }
    }
  ]
},
{
  id: 'mrna-expression-prediction',
  title: 'Predicting mRNA Expression Levels Using Deep Learning',
  shortDescription: 'Master\'s thesis exploring deep learning approaches to predict gene expression from DNA sequences, achieving state-of-the-art results through transformer embeddings and novel architectures.',
  fullDescription: 'A comprehensive investigation into predicting mRNA expression levels directly from genomic sequences using modern deep learning techniques. This research bridges computational biology and machine learning to understand gene regulation.',
  abstract: 'This master\'s thesis presents a comprehensive implementation and investigation of mRNA expression prediction using deep learning techniques. The research encompasses implementing and evaluating prior work (Xpresso and TExCNN models), developing novel architectures that achieve competitive performance, and extending these approaches to non-human species. The work demonstrates that combining DNABERT-2 transformer embeddings with biological metadata can explain nearly 80% of variance in human gene expression, outperforming previous approaches while requiring less computational resources.',
  githubUrl: 'https://github.com/AFWAhab/Masters-Thesis/',
  startDate: '2024-01-01',
  endDate: '2025-01-31',
  status: 'completed',
  tags: ['Deep Learning', 'Bioinformatics', 'Transformers', 'Gene Expression', 'DNABERT', 'CNN', 'Graph Neural Networks'],
  category: 'machine-learning',
  showTableOfContents: true,
  keyFeatures: [
    'Achieved R² of 0.778 on human gene expression prediction, surpassing TExCNN baseline',
    'Implemented and evaluated Xpresso CNN and TExCNN transformer-based models',
    'Developed multi-kernel CNN with attention pooling optimized via Optuna',
    'Extended models to predict expression in zebrafish and pig genomes',
    'Integrated transcription factor binding and CpG island data for enhanced predictions',
    'Explored graph attention networks using Hi-C chromatin interaction data'
  ],
  sections: [
    {
      id: 'motivation',
      title: 'Motivation & Problem Statement',
      order: 1,
      type: 'text',
      content: {
        text: 'Understanding how DNA sequences determine gene expression levels is fundamental to biology and medicine. While the human genome was sequenced over two decades ago, predicting which genes are active and to what degree remains a significant challenge. This thesis tackles this problem using modern deep learning approaches.',
        subsections: [
          {
            id: 'biological-significance',
            title: 'The Biological Challenge',
            content: 'Gene expression - the process by which information from a gene is used to synthesize functional gene products like proteins - is regulated by complex mechanisms. The expression level of a gene determines how much of its product is produced, directly impacting cellular function. Accurately predicting these levels from DNA sequences alone could revolutionize our understanding of genetic diseases, drug development, and personalized medicine.',
            images: [
              {
                id: 'gene-expression-overview',
                src: '/images/mrna-expression/biology/dna_structure.png',
                alt: 'DNA Structure and Gene Expression',
                caption: 'The flow from DNA to RNA to proteins, showing how genetic information is expressed in cells.',
                width: '60%'
              }
            ]
          },
          {
            id: 'computational-challenge',
            title: 'The Computational Challenge',
            content: 'Predicting mRNA expression from DNA sequences is inherently complex because regulatory elements can be located thousands of base pairs away from the genes they control. Traditional approaches using convolutional neural networks were limited to analyzing sequences of about 20kb around genes, missing crucial long-range interactions. This thesis explores how modern transformer architectures can capture these distant relationships.'
          }
        ]
      }
    },
    {
      id: 'technical-approach',
      title: 'Technical Approach',
      order: 2,
      type: 'text',
      content: {
        text: 'The research progressed through three main phases: replicating existing state-of-the-art models, developing improved architectures, and extending the approaches to non-human species.',
        subsections: [
          {
            id: 'model-replication',
            title: 'Reproducing State-of-the-Art',
            content: 'I began by implementing two landmark models: Xpresso (a CNN-based approach) and TExCNN (which leverages pre-trained DNA language models). Successfully reproducing Xpresso achieved an R² of 0.53, validating the implementation. However, TExCNN proved less reproducible, achieving only R² of 0.57 versus the reported 0.77, highlighting reproducibility challenges in the field.'
          },
          {
            id: 'dnabert-embeddings',
            title: 'DNABERT-2: Learning DNA Language',
            content: 'DNABERT-2 is a transformer model pre-trained on DNA sequences, treating genomic sequences as a "language" where regulatory motifs are like words and their interactions form grammar. Unlike simple one-hot encoding, DNABERT-2 captures complex patterns and long-range dependencies in DNA.',
            math: [
              {
                id: 'embedding-transformation',
                latex: 'Z = \\text{Encoder}(X_{\\text{k-mer}} + P) \\in \\mathbb{R}^{n \\times d_{\\text{model}}}',
                description: 'Contextual embeddings where each position incorporates information from the entire sequence',
                displayMode: true
              }
            ]
          },
          {
            id: 'feature-engineering',
            title: 'Biological Feature Integration',
            content: 'Beyond raw sequences, I incorporated multiple biological signals that influence gene expression. Transcription factor (TF) binding data proved particularly valuable - these proteins regulate gene expression by binding to specific DNA sequences. Adding 181 TF binding features increased R² from 0.585 to 0.751, demonstrating that sequence alone cannot capture all regulatory information.',
            images: [
              {
                id: 'tss-illustration',
                src: '/images/mrna-expression/biology/TSS_overview.png',
                alt: 'Transcription Start Site',
                caption: 'The transcription start site (TSS) and surrounding regulatory elements that influence gene expression.',
                width: '70%'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'novel-architectures',
      title: 'Novel Model Architectures',
      order: 3,
      type: 'text',
      content: {
        text: 'The core contribution of this thesis is the development of new architectures that achieve competitive performance while being more computationally efficient than existing approaches.',
        subsections: [
          {
            id: 'baseline-models',
            title: 'Establishing Baselines',
            content: 'Initial experiments confirmed that gene expression prediction is fundamentally non-linear. Ridge regression on DNABERT embeddings achieved near-zero R², while XGBoost gradient boosting reached R² of 0.756 with transcription factor data. This established that tree-based models could capture non-linear patterns but suggested neural networks might perform better.'
          },
          {
            id: 'dual-branch-architecture',
            title: 'Dual-Branch Neural Network',
            content: 'I developed a dual-branch architecture that processes sequence embeddings and biological metadata through separate pathways before fusion. This design allows each data type to be processed optimally before combination. The architecture evolved through multiple iterations, each addressing specific limitations.',
            images: [
              {
                id: 'model-architecture',
                src: '/images/mrna-expression/model_architecture.png',
                alt: 'Dual-Branch Architecture',
                caption: 'The dual-branch architecture processes DNABERT embeddings and metadata separately before fusion for prediction.',
                width: '80%'
              }
            ]
          },
          {
            id: 'multi-kernel-cnn',
            title: 'Multi-Kernel CNN with Attention',
            content: 'The final architecture employs multiple convolutional kernels (3, 7, 11) with different dilation rates to capture regulatory motifs at various scales. A key innovation is replacing max-pooling with learned attention pooling, allowing the model to adaptively weight different positions rather than simply taking the maximum.',
            math: [
              {
                id: 'attention-pooling',
                latex: 'h_j = \\frac{\\sum_i \\exp(\\mathbf{x}_i \\cdot \\mathbf{w}_j) \\mathbf{x}_{ij}}{\\sum_i \\exp(\\mathbf{x}_i \\cdot \\mathbf{w}_j)}',
                description: 'Attention pooling computes a weighted sum where weights are learned',
                displayMode: true
              }
            ]
          }
        ]
      }
    },
    {
      id: 'results',
      title: 'Results & Performance',
      order: 4,
      type: 'results',
      content: {
        text: 'The developed models achieved state-of-the-art performance on human gene expression prediction while demonstrating the importance of biological context beyond raw DNA sequences.',
        metrics: [
          {
            name: 'Best Model R²',
            value: '0.778',
            description: 'Coefficient of determination on test set',
            comparison: {
              baseline: '0.77 (TExCNN)',
              improvement: '+1.0%'
            }
          },
          {
            name: 'XGBoost Performance',
            value: '0.756',
            description: 'Tree-based model with TF data',
            comparison: {
              baseline: '0.585 (embeddings only)',
              improvement: '+29.2%'
            }
          },
          {
            name: 'Training Time',
            value: '35 min',
            description: 'Full hyperparameter optimization',
            comparison: {
              baseline: '3+ hours (TExCNN)',
              improvement: '5x faster'
            }
          },
          {
            name: 'MSE Reduction',
            value: '40%',
            description: 'Error reduction with TF data',
            comparison: {
              baseline: '0.413',
              improvement: 'to 0.248'
            }
          }
        ],
        subsections: [
          {
            id: 'human-results',
            title: 'Human Gene Expression',
            content: 'The multi-kernel CNN with attention pooling and Optuna hyperparameter optimization achieved the best performance. Key findings include: (1) Transcription factor binding data provides the largest performance boost, (2) CpG island coverage adds marginal but consistent improvements, (3) Attention pooling outperforms max pooling by capturing position-specific importance.'
          },
          {
            id: 'cross-species',
            title: 'Cross-Species Generalization',
            content: 'Models trained on human data generalized poorly to other species. When applied to zebrafish genes, the human-trained model achieved only R² of 0.085, essentially random. This led to species-specific investigations revealing fundamental differences in expression patterns and regulatory mechanisms across species.'
          },
          {
            id: 'feature-importance',
            title: 'Feature Analysis',
            content: 'Systematic ablation revealed that DNABERT embeddings alone explain ~58% of variance, mRNA half-life features add minimal value (+0.3%), while transcription factor binding dramatically improves predictions (+28%). This suggests that trans-acting regulation (proteins binding DNA) cannot be inferred from sequence alone.'
          }
        ],
        customVisualizations: [
          {
            type: 'model-comparison',
            data: {
              title: 'Architecture Evolution and Performance',
              models: [
                { name: 'Ridge Regression', r2: 0.02, mse: 2.33, params: '14K' },
                { name: 'XGBoost (embeddings)', r2: 0.585, mse: 0.413, params: '~1M' },
                { name: 'XGBoost (+ TF)', r2: 0.751, mse: 0.248, params: '~1M' },
                { name: 'Dual-Branch MLP', r2: 0.616, mse: 0.382, params: '1.1M' },
                { name: 'MLP + TF + CpG', r2: 0.744, mse: 0.255, params: '1.1M' },
                { name: 'Multi-Kernel CNN', r2: 0.778, mse: 0.221, params: '0.8M' }
              ],
              caption: 'Progressive improvement through architecture refinement and feature engineering. Note how the CNN achieves best performance with fewer parameters.'
            }
          },
          {
            type: 'species-comparison',
            data: {
              title: 'Cross-Species Performance Comparison',
              species: [
                { name: 'Human', xpresso: 0.54, texcnn: 0.61, ours: 0.778, baseline: 0.18 },
                { name: 'Mouse', xpresso: 0.52, texcnn: 0.58, ours: '-', baseline: 0.16 },
                { name: 'Pig', xpresso: '-', texcnn: 0.35, ours: 0.34, baseline: 0.20 },
                { name: 'Zebrafish', xpresso: 0.09, texcnn: 0.14, ours: 0.32, baseline: 0.11 }
              ],
              caption: 'Performance degrades with evolutionary distance from humans. Our graph attention network (0.32) performs best on zebrafish by incorporating chromatin interaction data.'
            }
          },
          {
            type: 'learning-curves',
            data: {
              title: 'Training Dynamics: Impact of Biological Features',
              description: 'Learning curves showing how transcription factor data accelerates convergence and improves final performance.',
              curves: [
                { label: 'DNABERT only', color: '#ef4444', finalR2: 0.585 },
                { label: '+ Half-life features', color: '#f97316', finalR2: 0.587 },
                { label: '+ TF binding', color: '#22c55e', finalR2: 0.751 }
              ]
            }
          }
        ]
      }
    },
    {
      id: 'species-extension',
      title: 'Extending to Other Species',
      order: 5,
      type: 'text',
      content: {
        text: 'A key challenge addressed in this thesis was extending human-trained models to other species, revealing fundamental differences in gene regulation across evolutionary distances.',
        subsections: [
          {
            id: 'zebrafish-challenges',
            title: 'Zebrafish: Distant Evolutionary Relationship',
            content: 'Zebrafish diverged from humans ~450 million years ago, compared to ~41 million years for mice. This evolutionary distance manifests in different expression distributions - over 60% of zebrafish genes have expression levels below zero (log-scale) compared to 40% in humans. Models trained on human data completely failed on zebrafish (R² = 0.085), necessitating species-specific approaches.',
            images: [
              {
                id: 'expression-distributions',
                src: '/images/mrna-expression/cumulative_distributions_of_expression.png',
                alt: 'Expression Distribution Comparison',
                caption: 'Cumulative distributions showing fundamental differences in expression patterns between species.',
                width: '70%'
              }
            ]
          },
          {
            id: 'graph-attention-approach',
            title: 'Graph Attention Networks for Zebrafish',
            content: 'To improve zebrafish predictions, I developed a graph attention network incorporating Hi-C chromatin interaction data and ChIP-seq peaks. Nodes represent genes, edges represent spatial interactions in the nucleus, and attention mechanisms aggregate information from regulatory elements. This achieved R² of 0.32, the best performance on zebrafish.',
            images: [
              {
                id: 'gnn-architecture',
                src: '/images/mrna-expression/zebrafish/gnn_architecture.png',
                alt: 'Graph Neural Network Architecture',
                caption: 'Graph structure derived from Hi-C data captures 3D chromatin organization influencing gene expression.',
                width: '75%'
              }
            ]
          },
          {
            id: 'pig-results',
            title: 'Pig Genome Analysis',
            content: 'Pigs, diverging ~58-64 million years ago, showed intermediate performance (R² = 0.35). Interestingly, pig expression distributions aligned more closely with zebrafish than humans, suggesting that evolutionary distance alone does not determine model transferability. This highlights the complex relationship between genome evolution and gene regulation.'
          }
        ]
      }
    },
    {
      id: 'technical-innovations',
      title: 'Technical Innovations',
      order: 6,
      type: 'text',
      content: {
        text: 'Several technical innovations contributed to the success of this research, from optimization strategies to novel architectural components.',
        subsections: [
          {
            id: 'optuna-optimization',
            title: 'Hyperparameter Optimization with Optuna',
            content: 'I employed Bayesian optimization using Tree-structured Parzen Estimators (TPE) to efficiently search hyperparameter space. Over 100 trials, this identified non-obvious optimal configurations - for example, smaller kernels (3,7,11) outperformed larger ones when combined with dilation, and higher dropout (0.35) improved generalization despite reducing training performance.',
            images: [
              {
                id: 'optuna-results',
                src: '/images/mrna-expression/optimization/optuna_optimization.png',
                alt: 'Optuna Hyperparameter Optimization',
                caption: 'Convergence of hyperparameter optimization showing rapid initial improvement then refinement.',
                width: '60%'
              }
            ]
          },
          {
            id: 'swa-regularization',
            title: 'Stochastic Weight Averaging',
            content: 'Implementing Stochastic Weight Averaging (SWA) provided consistent 1-2% R² improvements by averaging weights from multiple points along the optimization trajectory. This creates a model that generalizes better than any single checkpoint.',
            math: [
              {
                id: 'swa-formula',
                latex: '\\bar{w} = \\frac{1}{T} \\sum_{t=1}^{T} w_t',
                description: 'SWA averages weights from T epochs to find flatter minima',
                displayMode: true
              }
            ]
          },
          {
            id: 'sliding-window-embedding',
            title: 'Efficient Embedding Strategy',
            content: 'To handle memory constraints while maintaining context, I developed a sliding window approach for DNABERT-2 embeddings. Processing 18 overlapping 2kb windows (500bp spacing) and averaging embeddings provided full coverage of 10.5kb promoter regions while fitting in 8GB GPU memory.'
          }
        ]
      }
    },
    {
      id: 'conclusions',
      title: 'Conclusions & Impact',
      order: 7,
      type: 'text',
      content: {
        text: 'This thesis demonstrates that effective gene expression prediction requires both sophisticated neural architectures and comprehensive biological knowledge. The work makes several contributions to the field while revealing fundamental challenges.',
        subsections: [
          {
            id: 'key-findings',
            title: 'Key Findings',
            content: 'The research establishes three critical insights: (1) Transformer-based DNA embeddings capture significant regulatory information, explaining ~58% of expression variance alone. (2) Trans-acting factors (proteins binding DNA) cannot be inferred from sequence and must be explicitly provided, contributing an additional 30% explanatory power. (3) Models do not generalize across species due to fundamental differences in regulatory mechanisms, not just sequence divergence.'
          },
          {
            id: 'practical-implications',
            title: 'Practical Implications',
            content: 'The developed models are immediately applicable to several domains: identifying disease-causing genetic variants by predicting their impact on gene expression, designing synthetic DNA sequences with desired expression levels for biotechnology applications, and understanding how evolution has shaped different regulatory strategies across species. The efficient architecture (training in 35 minutes vs 3+ hours) makes the approach practical for researchers without extensive computational resources.'
          },
          {
            id: 'future-directions',
            title: 'Future Directions',
            content: 'This work opens several research avenues: developing species-agnostic models that can transfer across organisms, incorporating 3D genome structure and epigenetic modifications, and extending to cell-type-specific predictions. The finding that sequence alone is insufficient suggests that future work should focus on integrating diverse biological data types rather than solely improving sequence models.'
          }
        ]
      }
    }
  ]
}
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};