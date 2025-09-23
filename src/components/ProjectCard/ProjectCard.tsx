import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleGitHubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        borderRadius: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: 'rgba(99, 102, 241, 0.4)',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
          boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
        }
      }}
    >
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white', 
            fontWeight: 600, 
            mb: 2 
          }}
        >
          {project.title}
        </Typography>
        
        <Typography 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            lineHeight: 1.6, 
            flex: 1,
            mb: 3 
          }}
        >
          {project.shortDescription}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {project.githubUrl && (
            <IconButton
              size="small"
              onClick={handleGitHubClick}
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                '&:hover': {
                  color: '#6366f1',
                }
              }}
            >
              <GitHubIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;