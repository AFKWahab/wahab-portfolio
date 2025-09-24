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
      
      {/* Header Row */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid sx={{ xs: 2 }}>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              textAlign: 'center'
            }}
          >
            Real Samples
          </Typography>
        </Grid>
        {items.map((item, index) => (
          <Grid sx={{ xs: 10/items.length }} key={`header-${index}`}>
            <Box
              component="img"
              src={item.originalImage}
              alt={`Original sample ${item.id}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 1,
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Generated Samples Row */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid sx={{ xs: 2 }}>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              textAlign: 'center'
            }}
          >
            Colorized Samples
          </Typography>
        </Grid>
        {items.map((item, index) => (
          <Grid sx={{ xs: 10/items.length }} key={`generated-${index}`}>
            <Box
              component="img"
              src={item.generatedImage}
              alt={`Generated sample ${item.id}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 1,
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Percentage Row */}
      <Grid container spacing={2}>
        <Grid sx={{ xs: 2 }}>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              textAlign: 'center'
            }}
          >
            % labeled real
          </Typography>
        </Grid>
        {items.map((item, index) => (
          <Grid sx={{ xs: 10/items.length }} key={`percentage-${index}`}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 2, textAlign: 'center', '&:last-child': { pb: 2 } }}>
                <Typography
                  sx={{
                    color: item.percentage.includes('64.7') || item.percentage.includes('52.9') || item.percentage.includes('47.1') 
                      ? '#22c55e' // Green for high success rates
                      : '#f97316', // Orange for lower rates
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}
                >
                  {item.percentage}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

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

export default ComparisonTable;