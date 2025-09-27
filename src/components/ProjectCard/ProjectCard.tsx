import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleGitHubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank");
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "ongoing":
        return "Ongoing";
      case "planned":
        return "Planned";
      default:
        return status;
    }
  };

  const getStatusStyles = (status: string) => ({
    fontSize: "0.75rem",
    fontWeight: 500,
    px: 1.5,
    py: 0.5,
    backgroundColor:
      status === "completed"
        ? "rgba(34, 197, 94, 0.2)"
        : status === "ongoing"
        ? "rgba(249, 115, 22, 0.2)"
        : "rgba(156, 163, 175, 0.2)",
    color:
      status === "completed"
        ? "#22c55e"
        : status === "ongoing"
        ? "#f97316"
        : "#9ca3af",
    border: `1px solid ${
      status === "completed"
        ? "rgba(34, 197, 94, 0.3)"
        : status === "ongoing"
        ? "rgba(249, 115, 22, 0.3)"
        : "rgba(156, 163, 175, 0.3)"
    }`,
  });

  return (
    <Card
      component={Link}
      to={`/projects/${project.id}`}
      sx={{
        background:
          "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(99, 102, 241, 0.2)",
        borderRadius: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: "rgba(99, 102, 241, 0.4)",
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
          textDecoration: "none",
        },
        "&:visited": {
          color: "inherit",
        },
      }}
    >
      {/* Rest of the card content remains the same */}
      <CardContent
        sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Header with title and status */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              flex: 1,
            }}
          >
            {project.title}
          </Typography>
          <Chip
            label={getStatusLabel(project.status)}
            size="small"
            sx={getStatusStyles(project.status)}
          />
        </Box>

        {/* Underline */}
        <Box
          sx={{
            height: "2px",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
            mb: 3,
          }}
        />

        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: 1.6,
            flex: 1,
            mb: 3,
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {project.shortDescription}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {project.githubUrl && (
            <IconButton
              size="small"
              onClick={handleGitHubClick}
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                "&:hover": {
                  color: "#6366f1",
                },
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
