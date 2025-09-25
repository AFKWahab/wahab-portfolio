// components/ComparisonTable/ComparisonTable.tsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

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

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, items, caption }) => {
  return (
    <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
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
            p: 4,
            width: '100%'
          }}
        >
          {/* Row Headers and Images */}
          <Grid container spacing={2}>
            {/* Real Samples Row */}
            <Grid sx={{ xs: 12 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ minWidth: '160px', mr: 3 }}>
                  <Typography
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1.1rem'
                    }}
                  >
                    Real Samples
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                  {items.map((item, index) => (
                    <Box key={`real-${index}`} sx={{ flex: 1 }}>
                      <Box
                        component="img"
                        src={item.originalImage}
                        alt={`Original sample ${item.id}`}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: 2,
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          aspectRatio: '1/1',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Colorized Samples Row */}
            <Grid sx={{ xs: 12 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ minWidth: '160px', mr: 3 }}>
                  <Typography
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1.1rem'
                    }}
                  >
                    Colorized Samples
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                  {items.map((item, index) => (
                    <Box key={`generated-${index}`} sx={{ flex: 1 }}>
                      <Box
                        component="img"
                        src={item.generatedImage}
                        alt={`Generated sample ${item.id}`}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: 2,
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          aspectRatio: '1/1',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Percentage Row */}
            <Grid sx={{ xs: 12 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ minWidth: '160px', mr: 3 }}>
                  <Typography
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1.1rem'
                    }}
                  >
                    % labeled <em>real</em>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                  {items.map((item, index) => (
                    <Box key={`percentage-${index}`} sx={{ flex: 1 }}>
                      <Card
                        sx={{
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          borderRadius: 2,
                        }}
                      >
                        <CardContent sx={{ p: 2, textAlign: 'center', '&:last-child': { pb: 2 } }}>
                          <Typography
                            sx={{
                              color: parseFloat(item.percentage) > 50 
                                ? '#22c55e' // Green for high success rates (good fooling)
                                : parseFloat(item.percentage) > 30 
                                ? '#f97316' // Orange for medium rates
                                : '#ef4444', // Red for low rates
                              fontWeight: 700,
                              fontSize: '1.2rem'
                            }}
                          >
                            {item.percentage}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
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
              lineHeight: 1.4
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