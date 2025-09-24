import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'vae-gan',
    title: 'vae-gan for greyscale image colorization',
    shortDescription: 'A variational autoencoder (VAE) and generative adversarial network (GAN) hybrid model for colorizing greyscale images.',
    fullDescription: 'This project implements a VAE-GAN architecture to colorize greyscale images. The model is trained on a large dataset of color images and learns to generate plausible colorizations for unseen greyscale inputs. The project includes a web interface for users to upload their own images and see the colorization results.',
    githubUrl: 'https://github.com/adamuser/vae-gan',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    status: 'completed',
    keyFeatures: [
      'User authentication and profile management',
      'Advanced product search and filtering',
      'Shopping cart with persistent state',
      'Secure checkout with Stripe integration',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
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
      'Real-time collaborative editing',
      'Drag-and-drop kanban boards',
      'Time tracking and reporting',
      'Team member management',
      'Custom workflow creation',
      'Mobile-responsive design'
    ],
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};