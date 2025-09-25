import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import {
  Close as CloseIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/adam-wahab/", "_blank");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(99, 102, 241, 0.3)",
          borderRadius: 3,
          color: "white",
        },
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        {/* Header with close button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              background:
                "linear-gradient(45deg, #6366f1 20%, #8b5cf6 40%, #a855f7 60%, #c084fc 80%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.8rem",
              fontWeight: 700,
            }}
          >
            get in touch
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              "&:hover": {
                color: "white",
                backgroundColor: "rgba(99, 102, 241, 0.1)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* LinkedIn Section */}
        <Box sx={{ mb: 4 }}>
          <Button
            onClick={handleLinkedInClick}
            startIcon={<LinkedInIcon />}
            variant="contained"
            fullWidth
            sx={{
              background: "#0077b5",
              color: "white",
              py: 2,
              fontSize: "1.1rem",
              fontWeight: 600,
              "&:hover": {
                background: "#005885",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(0, 119, 181, 0.3)",
              },
            }}
          >
            Connect on LinkedIn
          </Button>
        </Box>

        {/* Email Section */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            borderRadius: 2,
            p: 3,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <EmailIcon sx={{ color: "#6366f1", mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
              }}
            >
              Email Me
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#6366f1",
              fontSize: "1.3rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              fontFamily: "monospace",
            }}
          >
            adam@wahab.dk
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
