import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)',
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
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
          Back to Home
        </Button>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
            My Projects
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.2rem',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            A collection of projects I've built over the years. Each one taught me something new.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.id} sx={{ xs: 12, md: 6, lg: 4 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;