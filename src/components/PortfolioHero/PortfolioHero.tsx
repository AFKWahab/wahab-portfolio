import React, { useState, useEffect } from "react";
import { Box, Typography, Button, keyframes } from "@mui/material";
import {
  containerStyles,
  gridContainerStyles,
  svgContainerStyles,
  svgStyles,
  particlesContainerStyles,
  contentContainerStyles,
  titleContainerStyles,
  getTitleStyles,
  getDescriptionStyles,
  subtitleStyles,
  descriptionStyles,
  getButtonsContainerStyles,
  primaryButtonStyles,
  secondaryButtonStyles,
  getParticleStyles,
  getWindTrailStyles,
  getWindBurstStyles,
} from "./styles";
import { useNavigate } from "react-router-dom";
import ContactModal from "../ContactModal/ContactModal";

const ping = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

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
  const [showText, setShowText] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const navigate = useNavigate();

  const facePoints: Point[] = [
    { x: 200, y: 80 },
    { x: 190, y: 85 },
    { x: 180, y: 90 },
    { x: 170, y: 95 },
    { x: 165, y: 100 },
    { x: 160, y: 110 },
    { x: 158, y: 120 },
    { x: 155, y: 130 },
    { x: 154, y: 140 },
    { x: 153, y: 150 },
    { x: 152, y: 160 },
    { x: 151, y: 170 },
    { x: 150, y: 180 },
    { x: 152, y: 190 },
    { x: 155, y: 200 },
    { x: 158, y: 210 },
    { x: 162, y: 220 },
    { x: 167, y: 230 },
    { x: 173, y: 240 },
    { x: 180, y: 248 },
    { x: 188, y: 255 },
    { x: 196, y: 260 },
    { x: 205, y: 262 },
    { x: 214, y: 260 },
    { x: 222, y: 255 },
    { x: 230, y: 248 },
    { x: 237, y: 240 },
    { x: 243, y: 230 },
    { x: 248, y: 220 },
    { x: 252, y: 210 },
    { x: 255, y: 200 },
    { x: 258, y: 190 },
    { x: 259, y: 180 },
    { x: 260, y: 170 },
    { x: 259, y: 160 },
    { x: 258, y: 150 },
    { x: 257, y: 140 },
    { x: 256, y: 130 },
    { x: 254, y: 120 },
    { x: 252, y: 110 },
    { x: 248, y: 100 },
    { x: 242, y: 95 },
    { x: 235, y: 90 },
    { x: 225, y: 85 },
    { x: 215, y: 80 },
  ];

  const glassesPoints: Point[] = [
    { x: 170, y: 130 },
    { x: 175, y: 125 },
    { x: 185, y: 125 },
    { x: 190, y: 130 },
    { x: 190, y: 140 },
    { x: 185, y: 145 },
    { x: 175, y: 145 },
    { x: 170, y: 140 },
    { x: 195, y: 135 },
    { x: 205, y: 135 },
    { x: 215, y: 135 },
    { x: 220, y: 130 },
    { x: 225, y: 125 },
    { x: 235, y: 125 },
    { x: 240, y: 130 },
    { x: 240, y: 140 },
    { x: 235, y: 145 },
    { x: 225, y: 145 },
    { x: 220, y: 140 },
  ];

  const beardPoints: Point[] = [
    { x: 167, y: 220 },
    { x: 170, y: 230 },
    { x: 175, y: 240 },
    { x: 182, y: 248 },
    { x: 190, y: 254 },
    { x: 200, y: 258 },
    { x: 210, y: 258 },
    { x: 220, y: 254 },
    { x: 228, y: 248 },
    { x: 235, y: 240 },
    { x: 240, y: 230 },
    { x: 243, y: 220 },
  ];

  const allPoints = [...facePoints, ...glassesPoints, ...beardPoints];
  useEffect(() => {
    if (faceComplete) return;

    const timer = setInterval(() => {
      setAnimationPhase((prev) => {
        if (prev + 1 >= allPoints.length) {
          setFaceComplete(true);
          setTimeout(() => setShowText(true), 300);
          setTimeout(() => setShowDescription(true), 1500);
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
          <feGaussianBlur stdDeviation="3" />
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
            fill={isActive ? "#fbbf24" : "#6366f1"}
            opacity={isVisible ? 1 : 0}
            style={{
              transition: "all 0.2s ease-in-out",
              filter: isActive
                ? "drop-shadow(0 0 8px #fbbf24)"
                : faceComplete
                ? "drop-shadow(0 0 4px #8b5cf6)"
                : "none",
              animation: isActive ? `${pulse} 1s ease-in-out infinite` : "none",
            }}
          />
        );
      })}

      {allPoints.map((point, index) => {
        if (index === 0 || index > animationPhase) return null;
        const prevPoint = allPoints[index - 1];
        return (
          <line
            key={`line-${index}`}
            x1={prevPoint.x}
            y1={prevPoint.y}
            x2={point.x}
            y2={point.y}
            stroke="#6366f1"
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: `${pulse} 2s ease-in-out infinite`,
            }}
          />
        );
      })}
    </svg>
  );

  const FloatingParticles = () => (
    <Box sx={particlesContainerStyles}>
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          sx={{
            animation: showText
              ? `${ping} ${1.2 + i * 0.15}s ease-out infinite`
              : "none",
            ...getParticleStyles(showText, i),
          }}
        />
      ))}

      {showText &&
        [...Array(10)].map((_, i) => (
          <Box
            key={`wind-${i}`}
            sx={{
              animation: `${pulse} 1.8s ease-out infinite`,
              ...getWindTrailStyles(i),
            }}
          />
        ))}

      {showText &&
        [...Array(12)].map((_, i) => (
          <Box
            key={`burst-${i}`}
            sx={{
              animation: `${ping} 0.8s ease-out`,
              ...getWindBurstStyles(i),
            }}
          />
        ))}
    </Box>
  );

  return (
    <Box sx={containerStyles}>
      <Box sx={gridContainerStyles}>
        <Box sx={svgContainerStyles}>
          <Box sx={{ position: "relative" }}>
            <FaceSVG />
            <FloatingParticles />
          </Box>
        </Box>

        <Box sx={contentContainerStyles}>
          <Box sx={titleContainerStyles}>
            <Typography
              variant="h1"
              component="h1"
              sx={getTitleStyles(showText, faceComplete)}
            >
              hi! i'm adam
            </Typography>
          </Box>

          <Box sx={getDescriptionStyles(showDescription)}>
            <Typography variant="h2" sx={subtitleStyles}>
              software developer & masters in comp.sci
            </Typography>

            <Typography variant="body1" sx={descriptionStyles}>
              i'm a 24 year old software developer based in denmark. I have a
              great personal interest in computer graphics, computer vision and
              bioinformatics. currently working as a software developer at qiagen.
            </Typography>

            <Box sx={getButtonsContainerStyles(showDescription)}>
              <Button
                variant="contained"
                size="large"
                sx={primaryButtonStyles}
                onClick={() => navigate("/projects")}
              >
                view my work
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(45deg, #22c55e 30%, #16a34a 90%)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
                  '&:hover': {
                    boxShadow: '0 4px 25px rgba(34, 197, 94, 0.5)',
                    background: 'linear-gradient(45deg, #16a34a 30%, #15803d 90%)',
                    transform: 'scale(1.05)',
                  },
                }}
                onClick={() => navigate("/experience")}
              >
                my experience
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={secondaryButtonStyles}
                onClick={() => setContactModalOpen(true)}
              >
                get in touch
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      
      <ContactModal 
        open={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </Box>
  );
};

export default PortfolioHero;