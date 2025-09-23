import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  keyframes,
  useTheme,
} from '@mui/material';
import {
  containerStyles,
  gridContainerStyles,
  svgContainerStyles,
  svgStyles,
} from './styles';
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

interface Point {
  x: number;
  y: number;
}

const PortfolioHero: React.FC = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [faceComplete, setFaceComplete] = useState(false);

  const facePoints: Point[] = [
    { x: 200, y: 80 }, { x: 190, y: 85 }, { x: 180, y: 90 }, { x: 170, y: 95 },
    { x: 165, y: 100 }, { x: 160, y: 110 }, { x: 158, y: 120 },
    { x: 155, y: 130 }, { x: 154, y: 140 }, { x: 153, y: 150 }, { x: 152, y: 160 },
    { x: 151, y: 170 }, { x: 150, y: 180 }, { x: 152, y: 190 }, { x: 155, y: 200 },
    { x: 158, y: 210 }, { x: 162, y: 220 }, { x: 167, y: 230 }, { x: 173, y: 240 },
    { x: 180, y: 248 }, { x: 188, y: 255 }, { x: 196, y: 260 },
    { x: 205, y: 262 }, { x: 214, y: 260 }, { x: 222, y: 255 }, { x: 230, y: 248 },
    { x: 237, y: 240 }, { x: 243, y: 230 }, { x: 248, y: 220 }, { x: 252, y: 210 },
    { x: 255, y: 200 }, { x: 258, y: 190 }, { x: 259, y: 180 }, { x: 260, y: 170 },
    { x: 259, y: 160 }, { x: 258, y: 150 }, { x: 257, y: 140 }, { x: 256, y: 130 },
    { x: 254, y: 120 }, { x: 252, y: 110 }, { x: 248, y: 100 }, { x: 242, y: 95 },
    { x: 235, y: 90 }, { x: 225, y: 85 }, { x: 215, y: 80 }
  ];

  const glassesPoints: Point[] = [
    { x: 170, y: 130 }, { x: 175, y: 125 }, { x: 185, y: 125 }, { x: 190, y: 130 },
    { x: 190, y: 140 }, { x: 185, y: 145 }, { x: 175, y: 145 }, { x: 170, y: 140 },
    { x: 195, y: 135 }, { x: 205, y: 135 }, { x: 215, y: 135 },
    { x: 220, y: 130 }, { x: 225, y: 125 }, { x: 235, y: 125 }, { x: 240, y: 130 },
    { x: 240, y: 140 }, { x: 235, y: 145 }, { x: 225, y: 145 }, { x: 220, y: 140 }
  ];

  const beardPoints: Point[] = [
    { x: 167, y: 220 }, { x: 170, y: 230 }, { x: 175, y: 240 }, { x: 182, y: 248 },
    { x: 190, y: 254 }, { x: 200, y: 258 }, { x: 210, y: 258 }, { x: 220, y: 254 },
    { x: 228, y: 248 }, { x: 235, y: 240 }, { x: 240, y: 230 }, { x: 243, y: 220 }
  ];

  const allPoints = [...facePoints, ...glassesPoints, ...beardPoints];

  // Animation effect
  useEffect(() => {
    if (faceComplete) return;
    
    const timer = setInterval(() => {
      setAnimationPhase(prev => {
        if (prev + 1 >= allPoints.length) {
          setFaceComplete(true);
          return allPoints.length - 1;
        }
        return prev + 1;
      });
    }, 40);
    
    return () => clearInterval(timer);
  }, [faceComplete, allPoints.length]);

  const FaceSVG = () => (
        <svg width="400" height="350" viewBox="0 0 400 350" style={svgStyles}>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(139, 69, 19, 0.3)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="3"/>
        </filter>
      </defs>
      
      <circle cx="200" cy="175" r="120" fill="url(#glow)" filter="url(#blur)" />
      
      {/* Dots */}
      {allPoints.map((point, index) => {
        const isVisible = index <= animationPhase;
        const isActive = !faceComplete && index === animationPhase;
        
        return (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={isActive ? 4 : 2}
            fill={isActive ? '#fbbf24' : '#8b5cf6'}
            opacity={isVisible ? 1 : 0}
            style={{
              transition: 'all 0.2s ease-in-out',
              filter: isActive ? 'drop-shadow(0 0 8px #fbbf24)' : faceComplete ? 'drop-shadow(0 0 4px #8b5cf6)' : 'none',
              animation: isActive ? `${pulse} 1s ease-in-out infinite` : 'none',
            }}
          />
        );
      })}
    </svg>
  );

  return (
    <Box sx={containerStyles}>
      <Box sx={gridContainerStyles}>
        {/* Animated Face Section */}
        <Box sx={svgContainerStyles}>
          <Box sx={{ position: 'relative' }}>
            <FaceSVG />
          </Box>
        </Box>
        </Box>
        </Box>
  );
};

export default PortfolioHero;