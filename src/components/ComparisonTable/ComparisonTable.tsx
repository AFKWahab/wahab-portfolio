import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

interface ComparisonItem {
  id: string;
  originalImage: string;
  generatedImage: string;
  percentage: string;
  description?: string;
}

interface ComparisonTableProps {
  title?: string;
  items: ComparisonItem[];
  caption?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title,
  items,
  caption,
}) => {
  return (
    <Box
      sx={{ my: 4, display: "flex", justifyContent: "center", width: "100%" }}
    >
      <Box sx={{ width: "100%", maxWidth: "1400px" }}>
        {title && (
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: "1.3rem",
              fontWeight: 600,
              mb: 3,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        )}

        <Box
          sx={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            borderRadius: 3,
            p: 4,
            width: "100%",
            overflowX: "auto",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `160px repeat(${items.length}, minmax(96px, 1fr))`,
              gap: 2,
              alignItems: "center",
            }}
          >
            {/* Row 1: Real Samples */}
            <Typography
              sx={{ color: "white", fontWeight: 600, fontSize: "1.1rem" }}
            >
              Real Samples
            </Typography>
            {items.map((item, i) => (
              <Box key={`real-${i}`}>
                <Box
                  component="img"
                  src={item.originalImage}
                  alt={`Original ${item.id}`}
                  sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: 2,
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    display: "block",
                  }}
                />
              </Box>
            ))}

            {/* Row 2: Colorized Samples */}
            <Typography
              sx={{ color: "white", fontWeight: 600, fontSize: "1.1rem" }}
            >
              Colorized Samples
            </Typography>
            {items.map((item, i) => (
              <Box key={`gen-${i}`}>
                <Box
                  component="img"
                  src={item.generatedImage}
                  alt={`Generated ${item.id}`}
                  sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: 2,
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    display: "block",
                  }}
                />
              </Box>
            ))}

            {/* Row 3: % labeled real */}
            <Typography
              sx={{ color: "white", fontWeight: 600, fontSize: "1.1rem" }}
            >
              % labeled <em>real</em>
            </Typography>
            {items.map((item, i) => {
              const val = parseFloat(item.percentage);
              const color =
                val > 50 ? "#22c55e" : val > 30 ? "#f97316" : "#ef4444";
              return (
                <Card
                  key={`pct-${i}`}
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    borderRadius: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      p: 2,
                      textAlign: "center",
                      "&:last-child": { pb: 2 },
                    }}
                  >
                    <Typography
                      sx={{
                        color,
                        fontWeight: 700,
                        fontSize: "1.2rem",
                      }}
                    >
                      {item.percentage}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>

        {caption && (
          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.7)",
              mt: 3,
              fontSize: "0.95rem",
              fontStyle: "italic",
              lineHeight: 1.4,
            }}
          >
            {caption}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ComparisonTable;
