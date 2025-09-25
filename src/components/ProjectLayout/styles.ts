import { SxProps, Theme } from "@mui/material/styles";

export const containerStyles: SxProps<Theme> = {
  minHeight: "100vh",
  background:
    "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)",
  py: 4,
};

export const backButtonStyles: SxProps<Theme> = {
  color: "white",
  border: "1px solid rgba(99, 102, 241, 0.3)",
  mb: 4,
  "&:hover": {
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    borderColor: "rgba(99, 102, 241, 0.5)",
  },
};

export const heroSectionStyles: SxProps<Theme> = {
  mb: 6,
  textAlign: "center",
};

export const titleStyles: SxProps<Theme> = {
  background:
    "linear-gradient(45deg, #6366f1 20%, #8b5cf6 40%, #a855f7 60%, #c084fc 80%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: { xs: "2.5rem", md: "3.5rem" },
  fontWeight: 700,
  mb: 2,
};

export const subtitleStyles: SxProps<Theme> = {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "1.2rem",
  mb: 4,
  maxWidth: "800px",
  mx: "auto",
  lineHeight: 1.6,
};

export const metaInfoStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: { xs: "center", sm: "center" },
  justifyContent: "center",
  gap: 3,
  mb: 4,
  flexWrap: "wrap",
};

export const metaItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "0.95rem",
};

export const statusChipStyles = (status: string): SxProps<Theme> => ({
  fontSize: "0.875rem",
  fontWeight: 600,
  px: 2,
  py: 0.5,
  backgroundColor:
    status === "completed"
      ? "rgba(34, 197, 94, 0.2)"
      : status === "in-progress"
      ? "rgba(249, 115, 22, 0.2)"
      : "rgba(156, 163, 175, 0.2)",
  color:
    status === "completed"
      ? "#22c55e"
      : status === "in-progress"
      ? "#f97316"
      : "#9ca3af",
  border: `1px solid ${
    status === "completed"
      ? "rgba(34, 197, 94, 0.3)"
      : status === "in-progress"
      ? "rgba(249, 115, 22, 0.3)"
      : "rgba(156, 163, 175, 0.3)"
  }`,
});

export const linksContainerStyles: SxProps<Theme> = {
  display: "flex",
  gap: 2,
  justifyContent: "center",
  mb: 6,
};

export const linkButtonStyles: SxProps<Theme> = {
  background: "linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)",
  color: "white",
  fontWeight: 600,
  px: 3,
  py: 1,
  "&:hover": {
    background: "linear-gradient(45deg, #4f46e5 30%, #7c3aed 90%)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
  },
};

export const secondaryLinkButtonStyles: SxProps<Theme> = {
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
};

export const sectionStyles: SxProps<Theme> = {
  mb: 6,
};

export const sectionTitleStyles: SxProps<Theme> = {
  color: "white",
  fontSize: "1.8rem",
  fontWeight: 600,
  mb: 3,
  display: "flex",
  alignItems: "center",
  gap: 2,
};

export const contentCardStyles: SxProps<Theme> = {
  background:
    "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(99, 102, 241, 0.2)",
  borderRadius: 3,
  p: 4,
  color: "white",
};

export const listItemStyles: SxProps<Theme> = {
  color: "rgba(255, 255, 255, 0.9)",
  mb: 1,
  fontSize: "1rem",
  lineHeight: 1.6,
  "&:last-child": {
    mb: 0,
  },
};

export const techStackStyles: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1.5,
  mt: 2,
};

export const techChipStyles: SxProps<Theme> = {
  backgroundColor: "rgba(99, 102, 241, 0.15)",
  color: "#a855f7",
  border: "1px solid rgba(99, 102, 241, 0.3)",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "rgba(99, 102, 241, 0.25)",
  },
};

export const imageGalleryStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
  gap: 3,
  mt: 3,
};

export const imageContainerStyles: SxProps<Theme> = {
  borderRadius: 3,
  overflow: "hidden",
  border: "1px solid rgba(99, 102, 241, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
  },
};

export const imageStyles: SxProps<Theme> = {
  width: "100%",
  height: "auto",
  display: "block",
};

export const imageCaptionStyles: SxProps<Theme> = {
  p: 2,
  backgroundColor: "rgba(15, 15, 35, 0.8)",
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "0.9rem",
  lineHeight: 1.5,
};
