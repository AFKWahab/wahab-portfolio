import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface CurveData {
  label: string;
  color: string;
  finalR2: number;
}

interface LearningCurvesProps {
  title?: string;
  description?: string;
  curves: CurveData[];
  caption?: string;
}

const LearningCurves: React.FC<LearningCurvesProps> = ({
  title,
  description,
  curves,
  caption,
}) => {
  const generateCurveData = (finalR2: number, label: string) => {
    const data = [];
    const epochs = 50;

    for (let i = 0; i <= epochs; i++) {
      const progress = i / epochs;
      const value =
        finalR2 * (1 - Math.exp(-4 * progress)) + (Math.random() * 0.02 - 0.01);
      data.push({
        epoch: i,
        [label]: Math.max(0, Math.min(value, finalR2 + 0.01)),
      });
    }
    return data;
  };

  const allData: any[] = [];
  for (let i = 0; i <= 50; i++) {
    const dataPoint: any = { epoch: i };
    curves.forEach((curve) => {
      const progress = i / 50;
      const value =
        curve.finalR2 * (1 - Math.exp(-4 * progress)) +
        (Math.random() * 0.02 - 0.01);
      dataPoint[curve.label] = Math.max(
        0,
        Math.min(value, curve.finalR2 + 0.01)
      );
    });
    allData.push(dataPoint);
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.9)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: 2,
            p: 2,
            color: "white",
          }}
        >
          <Typography sx={{ fontSize: "0.9rem", mb: 1, fontWeight: 600 }}>
            Epoch: {label}
          </Typography>
          {payload.map((entry: any, index: number) => (
            <Typography
              key={index}
              sx={{
                color: entry.color,
                fontSize: "0.85rem",
                mb: 0.5,
              }}
            >
              {entry.name}: {entry.value.toFixed(3)}
            </Typography>
          ))}
        </Box>
      );
    }
    return null;
  };

  return (
    <Box sx={{ my: 4 }}>
      {title && (
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: 600,
            mb: 1,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "0.95rem",
            mb: 3,
            textAlign: "center",
          }}
        >
          {description}
        </Typography>
      )}

      <Card
        sx={{
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={allData}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255, 255, 255, 0.1)"
              />
              <XAxis
                dataKey="epoch"
                stroke="rgba(255, 255, 255, 0.8)"
                label={{
                  value: "Epoch",
                  position: "insideBottom",
                  offset: -5,
                  style: { fill: "rgba(255, 255, 255, 0.8)" },
                }}
              />
              <YAxis
                stroke="rgba(255, 255, 255, 0.8)"
                label={{
                  value: "R² Score",
                  angle: -90,
                  position: "insideLeft",
                  style: { fill: "rgba(255, 255, 255, 0.8)" },
                }}
                domain={[0, 0.8]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />

              {curves.map((curve) => (
                <Line
                  key={curve.label}
                  type="monotone"
                  dataKey={curve.label}
                  stroke={curve.color}
                  strokeWidth={2.5}
                  dot={false}
                  name={`${curve.label} (R² = ${curve.finalR2.toFixed(3)})`}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>

          {/* Legend with final values */}
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 3 }}
          >
            {curves.map((curve) => (
              <Box
                key={curve.label}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Box
                  sx={{
                    width: 20,
                    height: 3,
                    backgroundColor: curve.color,
                    borderRadius: 1,
                  }}
                />
                <Typography
                  sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9rem" }}
                >
                  {curve.label}: {curve.finalR2.toFixed(3)}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

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
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
};

export default LearningCurves;
