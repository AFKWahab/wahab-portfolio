// components/HistogramChart/HistogramChart.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';

interface HistogramData {
  hue: number;
  [key: string]: number;
}

interface HistogramChartProps {
  title: string;
  dataPath: string;
  caption?: string;
}

const HistogramChart: React.FC<HistogramChartProps> = ({ title, dataPath, caption }) => {
  const [data, setData] = useState<HistogramData[]>([]);
  const [loading, setLoading] = useState(true);
  const [hiddenLines, setHiddenLines] = useState<Set<string>>(new Set());

  const lineConfigs = [
    { key: 's1', name: 'Sample 1', color: '#ef4444' },
    { key: 's2', name: 'Sample 2', color: '#22c55e' },
    { key: 's3', name: 'Sample 3', color: '#3b82f6' },
    { key: 's4', name: 'Sample 4', color: '#06b6d4' },
    { key: 's5', name: 'Sample 5', color: '#f97316' },
    { key: 'real', name: 'Ground Truth', color: '#000000', strokeWidth: 3 }
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(dataPath);
        const text = await response.text();
        
        const lines = text.trim().split('\n');
        const headers = lines[0].split(/\s+/);
        
        const parsedData = lines.slice(1).map(line => {
          const values = line.split(/\s+/);
          const row: HistogramData = { hue: 0 };
          
          headers.forEach((header, index) => {
            const value = parseFloat(values[index]);
            row[header] = value;
          });
          
          return row;
        });
        
        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading histogram data:', error);
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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            borderRadius: 2,
            p: 2,
            color: 'white'
          }}
        >
          <Typography sx={{ fontSize: '0.9rem', mb: 1 }}>
            Hue: {parseFloat(label).toFixed(2)}
          </Typography>
          {payload.map((entry: any, index: number) => (
            <Typography
              key={index}
              sx={{
                color: entry.color,
                fontSize: '0.8rem'
              }}
            >
              {entry.name}: {entry.value}
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
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 2 }}>
        {payload.map((entry: any, index: number) => (
          <Box
            key={index}
            onClick={() => handleLegendClick(entry.dataKey)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              opacity: hiddenLines.has(entry.dataKey) ? 0.4 : 1,
              transition: 'opacity 0.2s',
              '&:hover': {
                opacity: hiddenLines.has(entry.dataKey) ? 0.6 : 0.8
              }
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 3,
                backgroundColor: entry.color,
                borderRadius: 1
              }}
            />
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
              {entry.value}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          Loading histogram data...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h4"
        sx={{
          color: 'white',
          fontSize: '1.3rem',
          fontWeight: 600,
          mb: 3,
          textAlign: 'center'
        }}
      >
        {title}
      </Typography>
      
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: 3,
          p: 3
        }}
      >
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis 
              dataKey="hue" 
              stroke="rgba(255, 255, 255, 0.8)"
              fontSize={12}
              domain={[0, 1]}
              type="number"
              ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
              tickFormatter={(value) => value.toFixed(1)}
              label={{ 
                value: 'Hue', 
                position: 'insideBottom', 
                offset: -10, 
                style: { textAnchor: 'middle', fill: 'rgba(255, 255, 255, 0.8)' } 
              }}
            />
            <YAxis 
              stroke="rgba(255, 255, 255, 0.8)"
              fontSize={12}
              label={{ 
                value: 'Pixels', 
                angle: -90, 
                position: 'insideLeft', 
                style: { textAnchor: 'middle', fill: 'rgba(255, 255, 255, 0.8)' } 
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            
            {lineConfigs.map((lineConfig) => (
              <Line
                key={lineConfig.key}
                type="monotone"
                dataKey={lineConfig.key}
                stroke={lineConfig.color}
                strokeWidth={lineConfig.strokeWidth || 2}
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
            display: 'block',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            mt: 2,
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
};

export default HistogramChart;