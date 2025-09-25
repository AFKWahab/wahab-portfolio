// components/SpeciesComparison/SpeciesComparison.tsx
import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';

interface SpeciesData {
  name: string;
  xpresso: number | string;
  texcnn: number | string;
  ours: number | string;
  baseline: number;
}

interface SpeciesComparisonProps {
  title?: string;
  species: SpeciesData[];
  caption?: string;
}

const SpeciesComparison: React.FC<SpeciesComparisonProps> = ({ title, species, caption }) => {
  const getPerformanceColor = (value: number | string, max: number) => {
    if (typeof value === 'string') return '#64748b';
    if (value === max) return '#22c55e';
    if (value > 0.5) return '#6366f1';
    if (value > 0.3) return '#f97316';
    return '#ef4444';
  };

  const formatValue = (value: number | string) => {
    return typeof value === 'number' ? value.toFixed(2) : value;
  };

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
          overflow: 'hidden'
        }}
      >
        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 600, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}>
                  Species
                </TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 600, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}>
                  Xpresso CNN
                </TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 600, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}>
                  TExCNN
                </TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 600, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}>
                  Our Best Model
                </TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 600, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}>
                  Baseline (Half-life)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {species.map((sp) => {
                const rowMax = Math.max(
                  typeof sp.xpresso === 'number' ? sp.xpresso : 0,
                  typeof sp.texcnn === 'number' ? sp.texcnn : 0,
                  typeof sp.ours === 'number' ? sp.ours : 0,
                  sp.baseline
                );
                
                return (
                  <TableRow key={sp.name} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(99, 102, 241, 0.05)' } }}>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {sp.name}
                        {sp.name === 'Human' && (
                          <Chip
                            label="Best"
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(34, 197, 94, 0.2)',
                              color: '#22c55e',
                              border: '1px solid rgba(34, 197, 94, 0.3)',
                              fontSize: '0.7rem',
                              height: '20px'
                            }}
                          />
                        )}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          color: getPerformanceColor(sp.xpresso, rowMax),
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        {formatValue(sp.xpresso)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          color: getPerformanceColor(sp.texcnn, rowMax),
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        {formatValue(sp.texcnn)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          color: getPerformanceColor(sp.ours, rowMax),
                          fontWeight: 700,
                          fontSize: '1.1rem'
                        }}
                      >
                        {formatValue(sp.ours)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          color: getPerformanceColor(sp.baseline, rowMax),
                          fontSize: '1rem'
                        }}
                      >
                        {formatValue(sp.baseline)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
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

export default SpeciesComparison;