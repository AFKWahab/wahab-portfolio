import { SxProps, Theme } from "@mui/material/styles";

export const cardStyles: SxProps<Theme> = {
  background:
    "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(99, 102, 241, 0.2)",
  borderRadius: 3,
  p: 3,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-8px)",
    borderColor: "rgba(99, 102, 241, 0.4)",
    background:
      "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
    "&::before": {
      opacity: 1,
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
};

export const cardImageStyles: SxProps<Theme> = {
  width: "100%",
  height: 200,
  objectFit: "cover",
  borderRadius: 2,
  mb: 2,
  border: "1px solid rgba(99, 102, 241, 0.1)",
  transition: "transform 0.3s ease",
};

export const cardHeaderStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  mb: 2,
  gap: 2,
};

export const titleStyles: SxProps<Theme> = {
  color: "white",
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: 1.3,
  flex: 1,
};

export const statusChipStyles = (status: string): SxProps<Theme> => ({
  fontSize: "0.75rem",
  fontWeight: 500,
  px: 1.5,
  py: 0.5,
  borderRadius: 2,
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

export const descriptionStyles: SxProps<Theme> = {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  mb: 3,
  flex: 1,
};

export const techStackStyles: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
  mb: 2,
};

export const techChipStyles: SxProps<Theme> = {
  fontSize: "0.75rem",
  fontWeight: 500,
  backgroundColor: "rgba(99, 102, 241, 0.15)",
  color: "#a855f7",
  border: "1px solid rgba(99, 102, 241, 0.3)",
  borderRadius: 2,
  "&:hover": {
    backgroundColor: "rgba(99, 102, 241, 0.2)",
  },
};

export const cardActionsStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  pt: 2,
  borderTop: "1px solid rgba(99, 102, 241, 0.1)",
};

export const categoryStyles: SxProps<Theme> = {
  fontSize: "0.8rem",
  color: "rgba(255, 255, 255, 0.6)",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

export const linkIconStyles: SxProps<Theme> = {
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "1.1rem",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#6366f1",
  },
};

export const featuredBadgeStyles: SxProps<Theme> = {
  position: "absolute",
  top: 12,
  right: 12,
  backgroundColor: "rgba(251, 191, 36, 0.2)",
  color: "#fbbf24",
  border: "1px solid rgba(251, 191, 36, 0.3)",
  borderRadius: 2,
  px: 1,
  py: 0.5,
  fontSize: "0.7rem",
  fontWeight: 600,
  backdropFilter: "blur(10px)",
};
