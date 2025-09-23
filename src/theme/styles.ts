import { SxProps, Theme } from '@mui/material/styles';

// Main container styles
export const containerStyles: SxProps<Theme> = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: { xs: 2, md: 4 },
};

export const gridContainerStyles: SxProps<Theme> = {
  maxWidth: '1200px',
  mx: 'auto',
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
  gap: { xs: 4, lg: 8 },
  alignItems: 'center',
};

// SVG and animation styles
export const svgContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
};

export const svgStyles: SxProps<Theme> = {
  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
  width: { xs: 300, md: 400 },
  height: { xs: 262, md: 350 },
};

// Floating particles container
export const particlesContainerStyles: SxProps<Theme> = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
};

// Content section styles
export const contentContainerStyles: SxProps<Theme> = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

export const titleContainerStyles: SxProps<Theme> = {
  overflow: 'hidden',
  mb: 2,
};

// Dynamic title styles with animation
export const getTitleStyles = (showText: boolean): SxProps<Theme> => ({
  background: 'linear-gradient(45deg, #a855f7 30%, #ec4899 50%, #fbbf24 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: { xs: 'center', lg: 'left' },
  transform: showText ? 'translateX(0)' : 'translateX(-100%)',
  opacity: showText ? 1 : 0,
  transition: 'all 1s ease-out',
});

// Dynamic description container styles
export const getDescriptionStyles = (showDescription: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  transform: showDescription ? 'translateY(0)' : 'translateY(32px)',
  opacity: showDescription ? 1 : 0,
  transition: 'all 1s ease-out',
});

export const subtitleStyles: SxProps<Theme> = {
  color: 'text.secondary',
  textAlign: { xs: 'center', lg: 'left' },
  mb: 1,
};

export const descriptionStyles: SxProps<Theme> = {
  color: 'text.secondary',
  textAlign: { xs: 'center', lg: 'left' },
  mb: 3,
};

// Skills container
export const skillsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1.5,
  justifyContent: { xs: 'center', lg: 'flex-start' },
  pt: 2,
};

// Dynamic skill chip styles
export const getSkillChipStyles = (
  showDescription: boolean,
  index: number
): SxProps<Theme> => ({
  transform: showDescription ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
  opacity: showDescription ? 1 : 0,
  transition: 'all 0.5s ease-out',
  transitionDelay: `${200 + index * 100}ms`,
});

// Buttons container
export const buttonsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  pt: 3,
  justifyContent: { xs: 'center', lg: 'flex-start' },
  flexDirection: { xs: 'column', sm: 'row' },
};

// Dynamic buttons styles
export const getButtonsStyles = (showDescription: boolean): SxProps<Theme> => ({
  transform: showDescription ? 'translateY(0)' : 'translateY(32px)',
  opacity: showDescription ? 1 : 0,
  transition: 'all 0.7s ease-out',
  transitionDelay: '800ms',
});

// Primary button styles
export const primaryButtonStyles: SxProps<Theme> = {
  background: 'linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)',
  color: 'white',
  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
    background: 'linear-gradient(45deg, #7c3aed 30%, #db2777 90%)',
  },
};

// Secondary button styles
export const secondaryButtonStyles: SxProps<Theme> = {
  border: '1px solid rgba(139, 92, 246, 0.5)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.7)',
  },
};

// Particle animation styles
export const getParticleStyles = (
  showText: boolean,
  index: number
): React.CSSProperties => ({
  position: 'absolute',
  width: '4px',
  height: '4px',
  backgroundColor: '#a855f7',
  borderRadius: '50%',
  left: `${15 + index * 8}%`,
  top: `${25 + (index % 4) * 15}%`,
  opacity: showText ? 1 : 0.3,
  animationDelay: `${index * 0.2}s`,
  animationDuration: `${1.5 + index * 0.2}s`,
  transform: showText ? `translateX(${index * 10}px)` : 'translateX(0)',
  transition: 'all 1s ease-out',
});

export const getWindTrailStyles = (index: number): React.CSSProperties => ({
  position: 'absolute',
  width: '8px',
  height: '2px',
  background: 'linear-gradient(90deg, #a855f7 0%, transparent 100%)',
  borderRadius: '2px',
  left: `${40 + index * 5}%`,
  top: `${35 + (index % 3) * 10}%`,
  animationDelay: `${index * 0.15}s`,
  animationDuration: '2s',
});