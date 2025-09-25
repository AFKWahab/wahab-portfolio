import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Paper,
  IconButton,
} from "@mui/material";
import { ExpandLess, ExpandMore, MenuBook } from "@mui/icons-material";
import { ProjectSection } from "../../types/project";

interface TableOfContentsProps {
  sections: ProjectSection[];
  onSectionClick?: (sectionId: string) => void;
}

interface TOCSection {
  id: string;
  title: string;
  order: number;
  subsections?: { id: string; title: string }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  onSectionClick,
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [isOpen, setIsOpen] = useState(true);

  const tocSections: TOCSection[] = sections
    .sort((a, b) => a.order - b.order)
    .map((section) => ({
      id: section.id,
      title: section.title,
      order: section.order,
      subsections:
        section.content.subsections?.map((sub) => ({
          id: sub.id,
          title: sub.title,
        })) || [],
    }));

  const handleSectionToggle = (sectionId: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const handleSectionClick = (sectionId: string) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  };

  const handleSubsectionClick = (subsectionId: string) => {
    const element = document.getElementById(subsectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "800px" }}>
      {/* Toggle Button */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(99, 102, 241, 0.2)",
            },
          }}
        >
          <MenuBook />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          Table of Contents
        </Typography>
      </Box>

      {/* Table of Contents */}
      <Collapse in={isOpen}>
        <Paper
          elevation={3}
          sx={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: 3,
            p: 3,
            width: "100%",
          }}
        >
          <List dense sx={{ py: 0 }}>
            {tocSections.map((section) => (
              <Box key={section.id}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleSectionClick(section.id)}
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "rgba(99, 102, 241, 0.2)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.9)",
                            fontSize: "1rem",
                            fontWeight: 500,
                            lineHeight: 1.3,
                          }}
                        >
                          {section.order}. {section.title}
                        </Typography>
                      }
                    />
                    {section.subsections && section.subsections.length > 0 && (
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSectionToggle(section.id);
                        }}
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          ml: 1,
                        }}
                      >
                        {expandedSections.has(section.id) ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </IconButton>
                    )}
                  </ListItemButton>
                </ListItem>

                {/* Subsections */}
                {section.subsections && section.subsections.length > 0 && (
                  <Collapse
                    in={expandedSections.has(section.id)}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List dense sx={{ pl: 3 }}>
                      {section.subsections.map((subsection) => (
                        <ListItem key={subsection.id} disablePadding>
                          <ListItemButton
                            onClick={() => handleSubsectionClick(subsection.id)}
                            sx={{
                              borderRadius: 2,
                              py: 0.5,
                              "&:hover": {
                                backgroundColor: "rgba(99, 102, 241, 0.15)",
                              },
                            }}
                          >
                            <ListItemText
                              primary={
                                <Typography
                                  sx={{
                                    color: "rgba(255, 255, 255, 0.8)",
                                    fontSize: "0.9rem",
                                    fontWeight: 400,
                                    lineHeight: 1.3,
                                  }}
                                >
                                  • {subsection.title}
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </List>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default TableOfContents;
