import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Work as WorkIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import { experiences, ExperienceItem } from "../data/experience";

const Experience: React.FC = () => {
  const navigate = useNavigate();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem>(
    experiences[0]
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const isCurrentPosition = (endDate?: string) => !endDate;

  const getIcon = (position: string) => {
    return position.includes("MSc") || position.includes("BSc") ? (
      <SchoolIcon />
    ) : (
      <WorkIcon />
    );
  };

  const getDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? "s" : ""}`;
    } else {
      return `${years} year${years !== 1 ? "s" : ""} ${remainingMonths} month${
        remainingMonths !== 1 ? "s" : ""
      }`;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)",
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
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
          back to home
        </Button>

        <Box sx={{ textAlign: "center", mb: 6 }}>
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
            my experience
          </Typography>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "1.2rem",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            my journey through education and professional development
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 4,
          }}
        >
          {/* Main Experience Details */}
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              borderRadius: 3,
              height: "fit-content",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box sx={{ color: "#6366f1", mt: 1 }}>
                  {getIcon(selectedExperience.position)}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {selectedExperience.position}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#6366f1",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    {selectedExperience.company}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {formatDate(selectedExperience.startDate)} -{" "}
                      {selectedExperience.endDate
                        ? formatDate(selectedExperience.endDate)
                        : "Present"}
                    </Typography>
                    <Chip
                      label={getDuration(
                        selectedExperience.startDate,
                        selectedExperience.endDate
                      )}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(99, 102, 241, 0.15)",
                        color: "#a855f7",
                        border: "1px solid rgba(99, 102, 241, 0.3)",
                        fontSize: "0.8rem",
                      }}
                    />
                    {isCurrentPosition(selectedExperience.endDate) && (
                      <Chip
                        label="Current"
                        size="small"
                        sx={{
                          backgroundColor: "rgba(34, 197, 94, 0.2)",
                          color: "#22c55e",
                          border: "1px solid rgba(34, 197, 94, 0.3)",
                          fontSize: "0.8rem",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  mb: 3,
                  textAlign: "justify",
                }}
              >
                {selectedExperience.description}
              </Typography>

              {/* Technologies */}
              {selectedExperience.technologies && (
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Technologies & Skills
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {selectedExperience.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(139, 92, 246, 0.15)",
                          color: "#c084fc",
                          border: "1px solid rgba(139, 92, 246, 0.3)",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              {/* Achievements */}
              {selectedExperience.achievements && (
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Key Achievements
                  </Typography>
                  <List dense sx={{ pl: 0 }}>
                    {selectedExperience.achievements.map(
                      (achievement, index) => (
                        <ListItem key={index} sx={{ pl: 0, py: 0.5 }}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  color: "rgba(255, 255, 255, 0.8)",
                                  fontSize: "0.95rem",
                                  lineHeight: 1.5,
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
                                {achievement}
                              </Typography>
                            }
                          />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Experience Timeline */}
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              borderRadius: 3,
              height: "fit-content",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Experience Timeline
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {experiences.map((exp) => (
                  <Card
                    key={exp.id}
                    onClick={() => setSelectedExperience(exp)}
                    sx={{
                      background:
                        selectedExperience.id === exp.id
                          ? "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)"
                          : "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
                      border:
                        selectedExperience.id === exp.id
                          ? "2px solid rgba(99, 102, 241, 0.5)"
                          : "1px solid rgba(99, 102, 241, 0.1)",
                      borderRadius: 2,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        borderColor: "rgba(99, 102, 241, 0.4)",
                        background:
                          "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {exp.position}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#6366f1",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          mb: 1,
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.6)",
                          fontSize: "0.8rem",
                        }}
                      >
                        {formatDate(exp.startDate)} -{" "}
                        {exp.endDate ? formatDate(exp.endDate) : "Present"}
                      </Typography>
                      {isCurrentPosition(exp.endDate) && (
                        <Chip
                          label="Current"
                          size="small"
                          sx={{
                            backgroundColor: "rgba(34, 197, 94, 0.2)",
                            color: "#22c55e",
                            border: "1px solid rgba(34, 197, 94, 0.3)",
                            fontSize: "0.7rem",
                            height: "20px",
                            mt: 1,
                          }}
                        />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
