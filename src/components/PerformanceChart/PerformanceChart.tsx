// components/PerformanceChart/PerformanceChart.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface PerformanceChartProps {
  title?: string;
  chartImage: string;
  caption?: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ title, chartImage, caption }) => {
  return (
    <Box sx={{ my: 4 }}>
      {title && (
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
      )}
      
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: 3,
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src={chartImage}
          alt={title || "Performance Chart"}
          sx={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 2,
            border: '1px solid rgba(99, 102, 241, 0.1)',
          }}
        />
      </Box>

      {caption && (
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            mt: 3,
            fontSize: '0.95rem',
            fontStyle: 'italic',
            lineHeight: 1.4,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
};

export default PerformanceChart;