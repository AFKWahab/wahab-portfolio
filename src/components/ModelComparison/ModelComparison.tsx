// components/ModelComparison/ModelComparison.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, LinearProgress, Chip } from '@mui/material';

interface ModelData {
  name: string;
  r2: number;
  mse: number;
  params: string;
}

interface ModelComparisonProps {
  title?: string;
  models: ModelData[];
  caption?: string;
}

const ModelComparison: React.FC<ModelComparisonProps> = ({ title, models, caption }) => {
  const maxR2 = Math.max(...models.map(m => m.r2));
  
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
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {models.map((model, index) => (
          <Card
            key={index}
            sx={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  {model.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip
                    label={`R² = ${model.r2.toFixed(3)}`}
                    size="small"
                    sx={{
                      backgroundColor: model.r2 === maxR2 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(99, 102, 241, 0.15)',
                      color: model.r2 === maxR2 ? '#22c55e' : '#a855f7',
                      border: `1px solid ${model.r2 === maxR2 ? 'rgba(34, 197, 94, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                      fontWeight: 600
                    }}
                  />
                  <Chip
                    label={`MSE = ${model.mse.toFixed(3)}`}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(139, 92, 246, 0.15)',
                      color: '#c084fc',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                    }}
                  />
                  <Chip
                    label={model.params}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(249, 115, 22, 0.15)',
                      color: '#fb923c',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                      fontSize: '0.75rem'
                    }}
                  />
                </Box>
              </Box>
              
              <Box sx={{ width: '100%' }}>
                <LinearProgress
                  variant="determinate"
                  value={(model.r2 / maxR2) * 100}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4,
                      background: model.r2 === maxR2 
                        ? 'linear-gradient(90deg, #22c55e, #16a34a)'
                        : 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                    }
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        ))}
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

export default ModelComparison;