import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Box, Typography } from "@mui/material";
import { MathEquation } from "../../types/project";

interface MathRendererProps {
  equation: MathEquation;
}

const MathRenderer: React.FC<MathRendererProps> = ({ equation }) => {
  const { latex, label, description, displayMode = true } = equation;

  return (
    <Box sx={{ my: 2 }}>
      {description && (
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            mb: 1,
            fontSize: "0.9rem",
          }}
        >
          {description}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: displayMode ? "center" : "flex-start",
          alignItems: "center",
          my: displayMode ? 3 : 1,
          "& .katex": {
            color: "white !important",
            fontSize: displayMode ? "1.2em" : "1em",
          },
          "& .katex-display": {
            margin: "0.5em 0",
          },
        }}
      >
        {displayMode ? <BlockMath math={latex} /> : <InlineMath math={latex} />}
      </Box>

      {label && (
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "0.8rem",
            textAlign: "center",
            display: "block",
          }}
        >
          ({label})
        </Typography>
      )}
    </Box>
  );
};

export default MathRenderer;
