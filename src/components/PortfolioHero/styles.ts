import { SxProps, Theme } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const containerStyles: SxProps<Theme> = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)',
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

export const svgContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
};

export const svgStyles: CSSProperties = {
  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
  width: 400,
  height: 350,
};

export const particlesContainerStyles: SxProps<Theme> = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
};

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

export const getTitleStyles = (showText: boolean, faceComplete: boolean): SxProps<Theme> => ({
  background: 'linear-gradient(45deg, #6366f1 20%, #8b5cf6 40%, #a855f7 60%, #c084fc 80%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: { xs: 'center', lg: 'left' },
  transform: showText 
    ? 'translateX(0) translateY(0)' 
    : 'translateX(-50%) translateY(-20px)',
  opacity: showText ? 1 : 0,
  transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)', 
  filter: showText ? 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' : 'none',
});

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

export const getButtonsContainerStyles = (showDescription: boolean): SxProps<Theme> => ({
  display: 'flex',
  gap: 2,
  pt: 3,
  justifyContent: { xs: 'center', lg: 'flex-start' },
  flexDirection: { xs: 'column', sm: 'row' },
  transform: showDescription ? 'translateY(0)' : 'translateY(32px)',
  opacity: showDescription ? 1 : 0,
  transition: 'all 0.7s ease-out',
  transitionDelay: '1000ms',
});

export const primaryButtonStyles: SxProps<Theme> = {
  background: 'linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)',
  color: 'white',
  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
  '&:hover': {
    boxShadow: '0 4px 25px rgba(99, 102, 241, 0.5)',
    background: 'linear-gradient(45deg, #4f46e5 30%, #7c3aed 90%)',
    transform: 'scale(1.05)',
  },
};

export const secondaryButtonStyles: SxProps<Theme> = {
  border: '1px solid rgba(99, 102, 241, 0.5)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.7)',
    boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
  },
};

export const getParticleStyles = (
  showText: boolean,
  index: number
): CSSProperties => ({
  position: 'absolute',
  width: showText ? '6px' : '3px',
  height: showText ? '6px' : '3px',
  backgroundColor: '#6366f1',
  borderRadius: '50%',
  left: `${15 + index * 8}%`,
  top: `${25 + (index % 4) * 15}%`,
  opacity: showText ? 1 : 0.2,
  animationDelay: `${index * 0.1}s`,
  animationDuration: `${1.2 + index * 0.15}s`,
  transform: showText ? `translateX(${index * 15}px) translateY(${(index % 2) * -10}px)` : 'translate(0)',
  transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
  boxShadow: showText ? '0 0 10px rgba(99, 102, 241, 0.6)' : 'none',
});

export const getWindTrailStyles = (index: number): CSSProperties => ({
  position: 'absolute',
  width: '12px',
  height: '3px',
  background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, transparent 100%)',
  borderRadius: '2px',
  left: `${35 + index * 6}%`,
  top: `${30 + (index % 4) * 12}%`,
  animationDelay: `${index * 0.1}s`,
  animationDuration: '1.8s',
  boxShadow: '0 0 8px rgba(99, 102, 241, 0.4)',
});

export const getWindBurstStyles = (index: number): CSSProperties => ({
  position: 'absolute',
  width: '2px',
  height: '20px',
  background: 'linear-gradient(180deg, #6366f1 0%, transparent 100%)',
  borderRadius: '1px',
  left: `${30 + index * 4}%`,
  top: `${40 + (index % 2) * 20}%`,
  animationDelay: `${index * 0.05}s`,
  animationDuration: '0.8s',
  opacity: 0.7,
  transform: `rotate(${index * 15}deg)`,
});