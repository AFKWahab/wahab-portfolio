import React, { useState, useEffect } from "react";
import { setHeapSnapshotNearHeapLimit } from "v8";

const PortfolioFaceOutline = () => {
    const [animationPhase, setAnimationPhase] = useState(0);
    const [faceComplete, setFaceComplete] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const facePoints = [
    // Forehead
    { x: 200, y: 80 },
    { x: 190, y: 85 },
    { x: 180, y: 90 },
    { x: 170, y: 95 },
    { x: 165, y: 100 },
    { x: 160, y: 110 },
    { x: 158, y: 120 },

    // Left side
    { x: 155, y: 130 },
    { x: 154, y: 140 },
    { x: 153, y: 150 },
    { x: 152, y: 160 },
    { x: 151, y: 170 },
    { x: 150, y: 180 },
    { x: 152, y: 190 },
    { x: 155, y: 200 },

    // Jaw left
    { x: 158, y: 210 },
    { x: 162, y: 220 },
    { x: 167, y: 230 },
    { x: 173, y: 240 },
    { x: 180, y: 248 },
    { x: 188, y: 255 },
    { x: 196, y: 260 },

    // Chin
    { x: 205, y: 262 },
    { x: 214, y: 260 },
    { x: 222, y: 255 },
    { x: 230, y: 248 },

    // Jaw right
    { x: 237, y: 240 },
    { x: 243, y: 230 },
    { x: 248, y: 220 },
    { x: 252, y: 210 },

    // Right side
    { x: 255, y: 200 },
    { x: 258, y: 190 },
    { x: 259, y: 180 },
    { x: 260, y: 170 },
    { x: 259, y: 160 },
    { x: 258, y: 150 },
    { x: 257, y: 140 },
    { x: 256, y: 130 },

    // Right forehead
    { x: 254, y: 120 },
    { x: 252, y: 110 },
    { x: 248, y: 100 },
    { x: 242, y: 95 },
    { x: 235, y: 90 },
    { x: 225, y: 85 },
    { x: 215, y: 80 },
  ];

  // Extend on this all points array later on whenever we want to add more details :))
  const allPoints = [...facePoints];
  useEffect(() => {
    if (faceComplete) return; // Stop animation when face is complete
    
    const timer = setInterval(() => {
      setAnimationPhase(prev => {
        if (prev + 1 >= allPoints.length) {
          setFaceComplete(true);
          setTimeout(() => setShowText(true), 300);
          setTimeout(() => setShowDescription(true), 1200);
          return allPoints.length - 1;
        }
        return prev + 1;
      });
    }, 40);
    
    return () => clearInterval(timer);
  }, [faceComplete, allPoints.length]);
  return (
    <div>
      <h2>Portfolio Face Outline</h2>
    </div>
  );
};

export default PortfolioFaceOutline;
