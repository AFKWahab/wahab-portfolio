// Fixed data/projects.ts - Replace the entire file
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'vae-gan',
    title: 'VAE-GAN for Grayscale Image Colorization',
    shortDescription: 'A variational autoencoder (VAE) and generative adversarial network (GAN) hybrid model for colorizing grayscale images.',
    fullDescription: 'Advanced machine learning architecture combining VAEs and GANs with Wasserstein loss and skip connections for realistic image colorization.',
    abstract: 'This work was a project I created with a study partner for our Deep Learning for Visual Recognition course. We received a 100/100 mark, and the best project of the semester. The work aims to advance colorization of grayscale images by improving realism, diversity and colorfulness. We train a new model that combines a Variational Auto-Encoder with a Generative Adversarial Network, implementing skip connections and Wasserstein loss to improve realism and training stability. We show that enhancing a base model with Wasserstein loss and skip-connections significantly improves training stability and visual fidelity, resulting in a 23.7% higher Inception Score.',
    githubUrl: 'https://github.com/adamuser/vae-gan',
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
            content: 'In the 3D HP model, proteins are represented as self-avoiding walks on a cubic lattice. Each amino acid occupies a unique grid point, and the folding must satisfy the constraint that no two residues share the same position. The energy of a conformation is determined by counting hydrophobic-hydrophobic contacts between non-adjacent residues in the sequence.',
            math: [
              {
                id: 'energy-function',
                latex: '\\text{Score}(F) = -\\sum_{\\substack{i,j \\\\ \\text{adjacent on grid}}} \\delta(i, j)',
                description: 'Energy function where δ(i,j) = 1 if both residues i and j are hydrophobic and non-consecutive in sequence',
                displayMode: true
              }
            ]
          },
          {
            id: 'np-completeness',
            title: 'Computational Complexity',
            content: 'The 3D HP folding problem is NP-complete, as proven by Berger and Leighton through a reduction from the bin-packing problem. This theoretical result justifies the need for approximation algorithms and heuristic approaches, since exact solutions cannot be computed in polynomial time for larger instances unless P = NP.'
          }
        ],
        images: [
          {
            id: 'hp-model-example',
            src: '/images/3d-protein/hpmodel.png',
            alt: '2D HP Model Visualization',
            caption: 'Example of a protein sequence in the HP model. Hydrophobic residues (H) are shown in red, polar residues (P) in blue. The score is calculated by counting H-H contacts between non-consecutive residues in the sequence.'
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
        text: 'The Hart-Istrail algorithm provides a guaranteed 3/8-approximation to the optimal solution by exploiting parity constraints and structural decomposition of protein sequences. The algorithm works by partitioning the sequence into blocks and arranging them into superblocks that maximize hydrophobic contacts.',
        subsections: [
          {
            id: 'structural-decomposition',
            title: 'Structural Decomposition',
            content: 'The algorithm begins by decomposing the protein sequence into alternating runs of polar (0s) and hydrophobic (1s) residues. This decomposition respects parity constraints: in a 3D lattice, two residues can only be topological neighbors if their sequence positions differ by an odd number.',
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
            id: 'folding-strategy',
            title: '2D to 3D Extension',
            content: 'The 3D algorithm extends the 2D approach by repeatedly applying 2D folding algorithms in adjacent planes. Each layer is constructed with a specific number of scoring H residues (J), and planes are folded face-to-face to maximize inter-layer contacts.',
            math: [
              {
                id: 'layer-calculation',
                latex: 'J = \\left\\lfloor \\frac{L - 2K + 1}{K} \\right\\rfloor, \\quad K = \\lfloor \\sqrt{\\min(N_x, N_y)} \\rfloor',
                description: 'Calculation of layer size J and number of layers K, where L is sequence length and N_x, N_y are counts of x-type and y-type blocks',
                displayMode: true
              }
            ]
          },
          {
            id: 'approximation-ratio',
            title: 'Approximation Guarantee',
            content: 'The algorithm achieves its 3/8-approximation by ensuring that each hydrophobic residue in the constructed fold forms contacts in three directions: within its 2D plane, with the plane above, and with the plane below. This systematic approach guarantees a constant fraction of the theoretical maximum contacts.',
            math: [
              {
                id: 'contact-bound',
                latex: 'C_{3D}(S) = 4\\bigl(\\min\\{O(S), E(S)\\}\\bigr) + 2',
                description: 'Upper bound on achievable contacts where O(S) and E(S) are odd and even positioned hydrophobic residues',
                displayMode: true
              }
            ]
          }
        ],
        images: [
          {
            id: 'hart-istrail-fold',
            src: '/images/3d-protein/ideal_fold.png',
            alt: 'Hart-Istrail Algorithm Example',
            caption: 'Example fold produced by the Hart-Istrail algorithm showing the layered structure with multiple 2D planes folded face-to-face. Each layer contains the optimal number of scoring H residues.'
          },
          {
            id: 'layer-fold-example',
            src: '/images/3d-protein/2.5_layer_fold.png',
            alt: '2.5 Layer Fold Example',
            caption: 'A 3D fold of sequence S2-8 with J=2 showing how the algorithm handles cases where the remaining residues don\'t form complete layers.'
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
        text: 'As an alternative to the deterministic approximation algorithm, we implemented an Ant Colony Optimization (ACO) heuristic that explores the conformational space using probabilistic construction guided by pheromone trails and local heuristics.',
        subsections: [
          {
            id: 'aco-construction',
            title: 'Probabilistic Construction',
            content: 'Each artificial ant constructs a protein conformation by sequentially choosing folding directions based on pheromone values and local energy calculations. The probability of choosing a direction combines historical learning (pheromones) with immediate reward (potential hydrophobic contacts).',
            math: [
              {
                id: 'aco-probability',
                latex: 'p_{i,d} = \\frac{[\\tau_{i,d}]^\\alpha \\cdot [\\eta_{i,d}]^\\beta}{\\sum_{e \\in \\{S,L,R,U,D\\}} [\\tau_{i,e}]^\\alpha \\cdot [\\eta_{i,e}]^\\beta}',
                description: 'Probability of choosing direction d at position i, where τ is pheromone and η is heuristic value',
                displayMode: true
              },
              {
                id: 'heuristic-function',
                latex: '\\eta_{i,d} = e^{-\\gamma \\cdot h_{i,d}}',
                description: 'Heuristic function based on Boltzmann distribution, where h_{i,d} is the number of H-H contacts achieved',
                displayMode: false
              }
            ]
          },
          {
            id: 'pheromone-update',
            title: 'Pheromone Update and Local Search',
            content: 'After all ants construct solutions, pheromone trails are updated based on solution quality, with evaporation preventing premature convergence. A long-range mutation local search procedure further refines promising solutions by probabilistically rebuilding portions of the fold.'
          },
          {
            id: 'hyperparameters',
            title: 'Algorithm Parameters',
            content: 'The ACO algorithm requires careful tuning of hyperparameters. Through extensive testing, we found optimal values: 100 ants, α=1.0 (pheromone influence), β=2.0 (heuristic influence), ρ=0.3 (evaporation rate), and early stopping when no improvement is seen for several iterations.'
          }
        ],
        images: [
          {
            id: 'aco-fold-example',
            src: '/images/3d-protein/aco_implementation_example.png',
            alt: 'ACO Algorithm Result',
            caption: 'Example fold generated by the Ant Colony Optimization algorithm, showing the more compact and diverse structures it can discover compared to the deterministic approach.'
          }
        ]
      }
    },
    {
      id: 'visualization-tool',
      title: 'Interactive 3D Visualization',
      order: 4,
      type: 'text',
      content: {
        text: 'Understanding and debugging 3D protein folds requires sophisticated visualization. We developed a custom C++ application using OpenGL for rendering and ImGui for user interface components, providing real-time interaction with folded structures.',
        subsections: [
          {
            id: 'opengl-rendering',
            title: 'OpenGL Rendering System',
            content: 'The visualization uses modern OpenGL with vertex buffers and shaders to render protein spheres and connections. Hydrophobic residues are highlighted in red, polar residues in blue, and scoring H-H contacts are specially marked. The system includes camera controls for navigation and a coordinate grid for spatial orientation.'
          },
          {
            id: 'interface-features',
            title: 'User Interface Features',
            content: 'The ImGui interface allows users to load folded structures from JSON files, manually inspect and modify individual residues, toggle visual elements, and navigate through complex 3D structures. This proved invaluable for debugging algorithm implementations and understanding folding patterns.'
          },
          {
            id: 'coordinate-system',
            title: '3D Coordinate System',
            content: 'Our implementation uses a coordinate system with north/south along the z-axis, east/west along the x-axis, and up/down along the y-axis. The system handles relative folding directions with proper context tracking for rotation and previous direction information.'
          }
        ],
        images: [
          {
            id: 'coordinate-system',
            src: '/images/3d-protein/3D_coordinate_system.png',
            alt: '3D Coordinate System',
            caption: '3D coordinate system used in our implementation, showing the relationship between different axes and folding directions.'
          },
          {
            id: 'folding-context',
            src: '/images/3d-protein/4pointexample_1.png',
            alt: 'Folding Context Example',
            caption: 'Example showing how facing direction and upwards direction changes during folding, demonstrating the complexity of 3D context handling.'
          },
          {
            id: 'visualization-interface',
            src: '/images/3d-protein/3dvisualization.png',
            alt: 'Visualization Tool Interface',
            caption: 'Screenshot of the custom OpenGL visualization tool showing a 3D protein fold with the ImGui control panel. The interface allows real-time manipulation and inspection of folded structures.'
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
        text: 'We evaluated both algorithms on benchmark protein sequences from the literature, comparing their performance against known optimal solutions and analyzing their computational efficiency.',
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
            id: 'algorithm-comparison',
            title: 'Algorithm Performance Comparison',
            content: 'The Ant Colony Optimization consistently outperformed our Hart-Istrail implementation across all test sequences, achieving approximately 48% of optimal scores compared to 34%. While the ACO approach requires significantly more computation time, its ability to explore diverse conformational states leads to better energy minimization.'
          },
          {
            id: 'approximation-analysis',
            title: 'Approximation Ratio Analysis',
            content: 'Our Hart-Istrail implementation did not achieve the theoretical 3/8-approximation ratio, likely due to incomplete handling of edge cases and the relatively short sequence lengths (48 residues) in the benchmark dataset. The approximation guarantee primarily holds for longer sequences where boundary effects are less significant.'
          },
          {
            id: 'convergence-behavior',
            title: 'ACO Convergence Analysis',
            content: 'The ACO algorithm typically converged within 30-50 iterations, with most improvements occurring in the early stages. However, some sequences showed late-stage improvements, suggesting that early stopping mechanisms should be used cautiously.'
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
              caption: 'Comparison of energy scores achieved by ACO and Hart-Istrail algorithms on benchmark protein sequences. Lower scores indicate better folding quality.'
            }
          },
          {
            type: 'performance-chart',
            data: {
              title: 'Algorithm Performance vs Optimal',
              chartImage: '/images/3d-protein/sequence_id_vs_scores.png',
              caption: 'Performance comparison showing ACO (blue), Hart-Istrail (orange), optimal scores (green), and expected 3/8-approximation (red). ACO consistently achieves better results than the implemented Hart-Istrail algorithm.'
            }
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