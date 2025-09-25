import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ChartData {
  epoch: number;
  [key: string]: number;
}

interface DataChartProps {
  title: string;
  dataPath: string;
  caption?: string;
  lines: {
    key: string;
    name: string;
    color: string;
    strokeDasharray?: string;
    strokeWidth?: number;
  }[];
}

const DataChart: React.FC<DataChartProps> = ({
  title,
  dataPath,
  caption,
  lines,
}) => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [hiddenLines, setHiddenLines] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(dataPath);
        const text = await response.text();

        const textLines = text.trim().split("\n");
        const headers = textLines[0].split(/\s+/);

        const parsedData = textLines.slice(1).map((line) => {
          const values = line.split(/\s+/);
          const row: ChartData = { epoch: 0 };

          headers.forEach((header, index) => {
            const value = parseFloat(values[index]);
            if (header.toLowerCase() === "epoch") {
              row.epoch = value;
            } else {
              row[header] = value;
            }
          });

          return row;
        });

        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [dataPath]);

  const handleLegendClick = (dataKey: string) => {
    const newHiddenLines = new Set(hiddenLines);
    if (hiddenLines.has(dataKey)) {
      newHiddenLines.delete(dataKey);
    } else {
      newHiddenLines.add(dataKey);
    }
    setHiddenLines(newHiddenLines);
  };

  const CustomTooltip = (props: any) => {
    const { active, payload, label } = props;
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
              {entry.name}:{" "}
              {typeof entry.value === "number"
                ? entry.value.toFixed(4)
                : entry.value}
            </Typography>
          ))}
        </Box>
      );
    }
    return null;
  };

  const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          mt: 3,
          px: 2,
        }}
      >
        {payload.map((entry: any, index: number) => (
          <Box
            key={index}
            onClick={() => handleLegendClick(entry.dataKey)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              opacity: hiddenLines.has(entry.dataKey) ? 0.4 : 1,
              transition: "opacity 0.2s",
              px: 1.5,
              py: 0.75,
              borderRadius: 1,
              backgroundColor: "rgba(99, 102, 241, 0.05)",
              border: "1px solid rgba(99, 102, 241, 0.1)",
              minWidth: "120px",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                opacity: hiddenLines.has(entry.dataKey) ? 0.6 : 0.9,
              },
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 3,
                backgroundColor: entry.color,
                borderRadius: 1,
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              {entry.value}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
          Loading chart data...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontSize: "1.2rem",
          fontWeight: 600,
          mb: 3,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          borderRadius: 3,
          p: { xs: 2, sm: 3 },
          width: "100%",
        }}
      >
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 80 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255, 255, 255, 0.1)"
            />
            <XAxis
              dataKey="epoch"
              stroke="rgba(255, 255, 255, 0.8)"
              fontSize={11}
              label={{
                value: "Epoch",
                position: "insideBottom",
                offset: -5,
                style: {
                  textAnchor: "middle",
                  fill: "rgba(255, 255, 255, 0.8)",
                  fontSize: "12px",
                },
              }}
            />
            <YAxis
              stroke="rgba(255, 255, 255, 0.8)"
              fontSize={11}
              width={70}
              label={{
                value: "Values (not to scale)",
                angle: -90,
                position: "insideLeft",
                style: {
                  textAnchor: "middle",
                  fill: "rgba(255, 255, 255, 0.8)",
                  fontSize: "12px",
                },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />

            {lines.map((lineConfig) => (
              <Line
                key={lineConfig.key}
                type="monotone"
                dataKey={lineConfig.key}
                stroke={lineConfig.color}
                strokeWidth={lineConfig.strokeWidth || 2}
                strokeDasharray={lineConfig.strokeDasharray}
                dot={false}
                name={lineConfig.name}
                connectNulls={false}
                hide={hiddenLines.has(lineConfig.key)}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {caption && (
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.7)",
            mt: 2,
            fontSize: "0.9rem",
            fontStyle: "italic",
          }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
};

export default DataChart;
