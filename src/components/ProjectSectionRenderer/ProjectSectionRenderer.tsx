// components/ProjectSectionRenderer/ProjectSectionRenderer.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Grid, Chip } from '@mui/material';
import { ProjectSection, ProjectImage, Metric } from '../../types/project';
import MathRenderer from '../MathRenderer/MathRenderer';
import ComparisonTable from '../ComparisonTable/ComparisonTable';
import DataChart from '../DataChart/DataChart';
import HistogramChart from '../HistogramChart/HistogramChart';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ProjectSectionRendererProps {
  section: ProjectSection;
}

const ProjectSectionRenderer: React.FC<ProjectSectionRendererProps> = ({ section }) => {
  const { title, content, type } = section;

  const renderImage = (image: ProjectImage) => (
    <Box key={image.id} sx={{ mb: 3 }}>
      <Box
        component="img"
        src={image.src}
        alt={image.alt}
        sx={{
          width: image.width || '100%',
          height: image.height || 'auto',
          borderRadius: 2,
          border: '1px solid rgba(99, 102, 241, 0.2)',
          maxWidth: '100%',
          display: 'block',
          mx: 'auto'
        }}
      />
      {image.caption && (
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            mt: 1,
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}
        >
          {image.caption}
        </Typography>
      )}
    </Box>
  );

  const renderMetrics = (metrics: Metric[]) => (
    <Grid container spacing={2} sx={{ my: 2 }}>
      {metrics.map((metric, index) => (
        <Grid sx={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ color: '#6366f1', fontWeight: 600, mb: 1 }}>
                {metric.value}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                {metric.name}
              </Typography>
              {metric.description && (
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', mt: 1 }}>
                  {metric.description}
                </Typography>
              )}
              {metric.comparison && (
                <Box sx={{ mt: 1 }}>
                  <Chip
                    label={`+${metric.comparison.improvement} vs ${metric.comparison.baseline}`}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e',
                      fontSize: '0.75rem'
                    }}
                  />
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderCustomVisualizations = (visualizations: any[]) => {
    return visualizations.map((viz, index) => {
      switch (viz.type) {
        case 'comparison-table':
          return (
            <ComparisonTable
              key={`viz-${index}`}
              title={viz.data.title}
              items={viz.data.items}
              caption={viz.data.caption}
            />
          );
        
        case 'training-chart':
          return (
            <Box key={`viz-${index}`} sx={{ my: 4 }}>
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
                {viz.data.title}
              </Typography>
              <Grid container spacing={3}>
                {viz.data.charts.map((chart: any, chartIndex: number) => (
                  <Grid sx={{ xs: 12, md: 6 }} key={chartIndex}>
                    <DataChart
                      title={chart.title}
                      dataPath={chart.dataPath}
                      lines={chart.lines}
                    />
                  </Grid>
                ))}
              </Grid>
              {viz.data.caption && (
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
                  {viz.data.caption}
                </Typography>
              )}
            </Box>
          );
        
        case 'histogram':
          return (
            <HistogramChart
              key={`viz-${index}`}
              title={viz.data.title}
              dataPath={viz.data.dataPath}
              caption={viz.data.caption}
            />
          );
        
        default:
          return null;
      }
    });
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h3"
        sx={{
          color: 'white',
          fontSize: '1.8rem',
          fontWeight: 600,
          mb: 3,
          borderBottom: '2px solid rgba(99, 102, 241, 0.3)',
          pb: 1
        }}
      >
        {title}
      </Typography>

      <Card
        sx={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: 3,
          overflow: 'visible'
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Main text content */}
          {content.text && (
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1rem',
                lineHeight: 1.7,
                mb: 3,
                textAlign: 'justify'
              }}
            >
              {content.text}
            </Typography>
          )}

          {/* Math equations */}
          {content.equations && content.equations.length > 0 && (
            <Box sx={{ my: 3 }}>
              {content.equations.map((equation) => (
                <MathRenderer key={equation.id} equation={equation} />
              ))}
            </Box>
          )}

          {/* Images */}
          {content.images && content.images.length > 0 && (
            <Box sx={{ my: 3 }}>
              {content.images.map(renderImage)}
            </Box>
          )}

          {/* Code blocks */}
          {content.code && content.code.length > 0 && (
            <Box sx={{ my: 3 }}>
              {content.code.map((codeBlock) => (
                <Box key={codeBlock.id} sx={{ mb: 2 }}>
                  {codeBlock.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 1
                      }}
                    >
                      {codeBlock.description}
                    </Typography>
                  )}
                  <SyntaxHighlighter
                    language={codeBlock.language}
                    style={tomorrow}
                    customStyle={{
                      borderRadius: '8px',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      fontSize: '0.9rem'
                    }}
                  >
                    {codeBlock.code}
                  </SyntaxHighlighter>
                </Box>
              ))}
            </Box>
          )}

          {/* Metrics */}
          {content.metrics && content.metrics.length > 0 && renderMetrics(content.metrics)}

          {/* Custom Visualizations */}
          {(content as any).customVisualizations && (content as any).customVisualizations.length > 0 && (
            <Box sx={{ my: 3 }}>
              {renderCustomVisualizations((content as any).customVisualizations)}
            </Box>
          )}

          {/* Subsections */}
          {content.subsections && content.subsections.length > 0 && (
            <Box sx={{ mt: 4 }}>
              {content.subsections.map((subsection) => (
                <Box key={subsection.id} sx={{ mb: 3 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1.3rem',
                      fontWeight: 500,
                      mb: 2
                    }}
                  >
                    {subsection.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      mb: 2
                    }}
                  >
                    {subsection.content}
                  </Typography>
                  {subsection.math && subsection.math.map((equation) => (
                    <MathRenderer key={equation.id} equation={equation} />
                  ))}
                  {subsection.images && subsection.images.map(renderImage)}
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectSectionRenderer;