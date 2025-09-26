import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Box, Typography, Container, Button, Chip, Grid } from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  GitHub as GitHubIcon,
  CalendarToday as CalendarIcon,
} from "@mui/icons-material";
import { getProjectById } from "../data/projects";
import ProjectSectionRenderer from "../components/ProjectSectionRenderer/ProjectSectionRenderer";
import TableOfContents from "../components/TableOfContents/TableOfContents";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Button
            component={Link}
            to="/projects"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: "white",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              mb: 4,
              textDecoration: "none",
              "&:hover": {
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                borderColor: "rgba(99, 102, 241, 0.5)",
                textDecoration: "none",
              },
            }}
          >
            Back to Projects
          </Button>
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography sx={{ color: "white", fontSize: "1.5rem", mb: 2 }}>
              Project Not Found
            </Typography>
            <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
              The project you're looking for doesn't exist.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  const shouldShowTOC =
    (project as any).showTableOfContents &&
    project.sections &&
    project.sections.length > 0;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/projects")}
          sx={{
            color: "white",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            mb: 4,
            "&:hover": {
              backgroundColor: "rgba(99, 102, 241, 0.1)",
              borderColor: "rgba(99, 102, 241, 0.5)",
            },
          }}
        >
          Back to Projects
        </Button>

        {/* Hero Section */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              background:
                "linear-gradient(45deg, #6366f1 20%, #8b5cf6 40%, #a855f7 60%, #c084fc 80%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {project.title}
          </Typography>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 1,
                mb: 3,
              }}
            >
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(99, 102, 241, 0.15)",
                    color: "#a855f7",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          )}

          {/* Abstract or Full Description */}
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "1.2rem",
              mb: 4,
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.6,
              textAlign: "justify",
            }}
          >
            {project.abstract || project.fullDescription}
          </Typography>

          {/* Project Meta Info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <CalendarIcon />
              <Typography>
                {formatDate(project.startDate)}
                {project.endDate && ` - ${formatDate(project.endDate)}`}
              </Typography>
            </Box>

            <Chip
              label={
                project.status.charAt(0).toUpperCase() + project.status.slice(1)
              }
              sx={{
                backgroundColor:
                  project.status === "completed"
                    ? "rgba(34, 197, 94, 0.2)"
                    : "rgba(249, 115, 22, 0.2)",
                color: project.status === "completed" ? "#22c55e" : "#f97316",
                border: `1px solid ${
                  project.status === "completed"
                    ? "rgba(34, 197, 94, 0.3)"
                    : "rgba(249, 115, 22, 0.3)"
                }`,
                fontWeight: 600,
              }}
            />
          </Box>

          {/* GitHub Link */}
          {project.githubUrl && (
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              onClick={() => window.open(project.githubUrl, "_blank")}
              sx={{
                border: "1px solid rgba(99, 102, 241, 0.5)",
                color: "white",
                fontWeight: 600,
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                  borderColor: "rgba(99, 102, 241, 0.7)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              View Code
            </Button>
          )}
        </Box>

        {/* Table of Contents - Only show if explicitly enabled */}
        {shouldShowTOC && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <TableOfContents sections={project.sections!} />
          </Box>
        )}

        {/* Technical Sections - Full width restored */}
        {project.sections && project.sections.length > 0 ? (
          <Box>
            {project.sections
              .sort((a, b) => a.order - b.order)
              .map((section) => (
                <ProjectSectionRenderer key={section.id} section={section} />
              ))}
          </Box>
        ) : (
          /* Fallback to basic key features if no detailed sections */
          <Grid container spacing={4} justifyContent="center">
            <Grid sx={{ xs: 12, lg: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Key Features
              </Typography>
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  borderRadius: 3,
                  p: 4,
                  color: "white",
                }}
              >
                {project.keyFeatures.map((feature, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      mb: 1,
                      "&:last-child": { mb: 0 },
                      "&:before": {
                        content: '"•"',
                        color: "#6366f1",
                        fontWeight: "bold",
                        display: "inline-block",
                        width: "1em",
                        marginRight: "0.5em",
                      },
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ProjectDetail;
