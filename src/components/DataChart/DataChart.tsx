import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  epoch: number;
  [key: string]: number;
}

interface DataChartProps {
  title: string;
  dataPath: string; // Path to your .dat file
  caption?: string;
  lines: {
    key: string;
    name: string;
    color: string;
    strokeDasharray?: string;
    strokeWidth?: number;
  }[];
}

const DataChart: React.FC<DataChartProps> = ({ title, dataPath, caption, lines }) => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(dataPath);
        const text = await response.text();
        
        // Parse the space-separated data file
        const lines = text.trim().split('\n');
        const headers = lines[0].split(/\s+/);
        
        const parsedData = lines.slice(1).map(line => {
          const values = line.split(/\s+/);
          const row: ChartData = { epoch: 0 };
          
          headers.forEach((header, index) => {
            const value = parseFloat(values[index]);
            if (header.toLowerCase() === 'epoch') {
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
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, [dataPath]);

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          Loading chart data...
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
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis 
              dataKey="epoch" 
              stroke="rgba(255, 255, 255, 0.8)"
              fontSize={12}
            />
            <YAxis 
              stroke="rgba(255, 255, 255, 0.8)"
              fontSize={12}
              domain={['dataMin', 'dataMax']}
            />
            <Legend 
              wrapperStyle={{ color: 'rgba(255, 255, 255, 0.8)' }}
            />
            
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

export default DataChart;