import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Button, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { ArrowBack as ArrowBackIcon, GitHub as GitHubIcon, CalendarToday as CalendarIcon } from '@mui/icons-material';
import { getProjectById } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/projects')}
            sx={{
              color: 'white',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              mb: 4,
              '&:hover': {
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderColor: 'rgba(99, 102, 241, 0.5)',
              }
            }}
          >
            Back to Projects
          </Button>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography sx={{ color: 'white', fontSize: '1.5rem', mb: 2 }}>
              Project Not Found
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              The project you're looking for doesn't exist.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          sx={{
            color: 'white',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            mb: 4,
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              borderColor: 'rgba(99, 102, 241, 0.5)',
            }
          }}
        >
          Back to Projects
        </Button>

        {/* Hero Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              background: 'linear-gradient(45deg, #6366f1 20%, #8b5cf6 40%, #a855f7 60%, #c084fc 80%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {project.title}
          </Typography>
          
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.2rem',
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {project.fullDescription}
          </Typography>

          {/* Project Info */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              mb: 4,
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              <CalendarIcon />
              <Typography>
                {formatDate(project.startDate)}
                {project.endDate && ` - ${formatDate(project.endDate)}`}
              </Typography>
            </Box>
          </Box>

          {/* GitHub Link */}
          {project.githubUrl && (
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              onClick={() => window.open(project.githubUrl, '_blank')}
              sx={{
                border: '1px solid rgba(99, 102, 241, 0.5)',
                color: 'white',
                fontWeight: 600,
                px: 3,
                py: 1,
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  borderColor: 'rgba(99, 102, 241, 0.7)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              View Code
            </Button>
          )}
        </Box>

        {/* Key Features */}
        <Grid container spacing={4} justifyContent="center">
          <Grid sx={{ xs: 12, lg: 8 }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontSize: '1.8rem',
                fontWeight: 600,
                mb: 3,
                textAlign: 'center',
              }}
            >
              Key Features
            </Typography>
            <Card
              sx={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 3,
                color: 'white',
              }}
            >
              <CardContent>
                <List>
                  {project.keyFeatures.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemText
                        primary={feature}
                        sx={{
                          '& .MuiListItemText-primary': {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetail;