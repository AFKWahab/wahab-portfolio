import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'Modern e-commerce solution with React, Node.js, and Stripe integration',
    fullDescription: 'A comprehensive e-commerce platform built from scratch featuring user authentication, product management, shopping cart functionality, and secure payment processing. The project showcases modern web development practices with a focus on user experience and performance.',
    githubUrl: 'https://github.com/adamuser/ecommerce-platform',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
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
    id: 'task-management-app',
    title: 'Task Management App',
    shortDescription: 'Collaborative task management with real-time updates and team features',
    fullDescription: 'A sophisticated task management application designed for teams to collaborate effectively. Features include real-time updates, drag-and-drop kanban boards, time tracking, and comprehensive reporting.',
    githubUrl: 'https://github.com/adamuser/task-manager',
    startDate: '2023-09-01',
    endDate: '2024-01-15',
    keyFeatures: [
      'Real-time collaborative editing',
      'Drag-and-drop kanban boards',
      'Time tracking and reporting',
      'Team member management',
      'Custom workflow creation',
      'Mobile-responsive design'
    ],
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    shortDescription: 'Beautiful weather app with animations and detailed forecasts',
    fullDescription: 'A visually stunning weather application that provides detailed forecasts with smooth animations and an intuitive user interface. Features location-based weather, 7-day forecasts, and weather alerts.',
    githubUrl: 'https://github.com/adamuser/weather-app',
    startDate: '2023-06-01',
    endDate: '2023-08-15',
    keyFeatures: [
      'Location-based weather detection',
      'Animated weather illustrations',
      'Hourly and 7-day forecasts',
      'Weather alerts and notifications',
      'Multiple location support',
      'Offline functionality'
    ],
  },
  {
    id: 'design-system',
    title: 'Component Design System',
    shortDescription: 'Comprehensive design system with reusable components and documentation',
    fullDescription: 'A complete design system built to standardize UI components across multiple projects. Includes a component library, design tokens, documentation site, and integration tools.',
    githubUrl: 'https://github.com/adamuser/design-system',
    startDate: '2024-03-01',
    keyFeatures: [
      'Reusable component library',
      'Design token system',
      'Interactive documentation',
      'Integration tools',
      'Accessibility-first approach',
      'Automated testing suite'
    ],
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};