import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

interface BenchmarkSequence {
  id: string;
  length: number;
  optimal: number;
  aco: number;
  hart: number;
}

interface BenchmarkTableProps {
  title?: string;
  sequences: BenchmarkSequence[];
  caption?: string;
}

const BenchmarkTable: React.FC<BenchmarkTableProps> = ({
  title,
  sequences,
  caption,
}) => {
  const getPerformanceColor = (score: number, optimal: number) => {
    const percentage = Math.abs(score / optimal);
    if (percentage >= 0.4) return "#22c55e";
    if (percentage >= 0.3) return "#f97316";
    return "#ef4444";
  };

  const formatPercentage = (score: number, optimal: number) => {
    return `${(Math.abs(score / optimal) * 100).toFixed(1)}%`;
  };

  return (
    <Box sx={{ my: 4 }}>
      {title && (
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: 600,
            mb: 3,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      )}

      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "transparent" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                >
                  Sequence ID
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                >
                  Length
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                >
                  Optimal Score
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                >
                  ACO Score
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                >
                  Hart-Istrail Score
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                >
                  ACO Performance
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                >
                  Hart Performance
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sequences.map((sequence) => (
                <TableRow
                  key={sequence.id}
                  sx={{
                    "&:nth-of-type(odd)": {
                      backgroundColor: "rgba(99, 102, 241, 0.05)",
                    },
                  }}
                >
                  <TableCell
                    sx={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: 500 }}
                  >
                    {sequence.id}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {sequence.length}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "#22c55e", fontWeight: 600 }}
                  >
                    {sequence.optimal}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "#6366f1", fontWeight: 600 }}
                  >
                    {sequence.aco}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "#f97316", fontWeight: 600 }}
                  >
                    {sequence.hart}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={formatPercentage(sequence.aco, sequence.optimal)}
                      size="small"
                      sx={{
                        backgroundColor: "transparent",
                        color: getPerformanceColor(
                          sequence.aco,
                          sequence.optimal
                        ),
                        border: `1px solid ${getPerformanceColor(
                          sequence.aco,
                          sequence.optimal
                        )}`,
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={formatPercentage(sequence.hart, sequence.optimal)}
                      size="small"
                      sx={{
                        backgroundColor: "transparent",
                        color: getPerformanceColor(
                          sequence.hart,
                          sequence.optimal
                        ),
                        border: `1px solid ${getPerformanceColor(
                          sequence.hart,
                          sequence.optimal
                        )}`,
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {/* Summary row */}
              <TableRow
                sx={{
                  backgroundColor: "rgba(99, 102, 241, 0.15)",
                  borderTop: "2px solid rgba(99, 102, 241, 0.3)",
                }}
              >
                <TableCell sx={{ color: "white", fontWeight: 700 }}>
                  Average
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  {sequences[0]?.length || "-"}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#22c55e", fontWeight: 700 }}
                >
                  {(
                    sequences.reduce((sum, seq) => sum + seq.optimal, 0) /
                    sequences.length
                  ).toFixed(1)}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#6366f1", fontWeight: 700 }}
                >
                  {(
                    sequences.reduce((sum, seq) => sum + seq.aco, 0) /
                    sequences.length
                  ).toFixed(1)}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#f97316", fontWeight: 700 }}
                >
                  {(
                    sequences.reduce((sum, seq) => sum + seq.hart, 0) /
                    sequences.length
                  ).toFixed(1)}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={`${(
                      (sequences.reduce(
                        (sum, seq) => sum + Math.abs(seq.aco / seq.optimal),
                        0
                      ) /
                        sequences.length) *
                      100
                    ).toFixed(1)}%`}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(99, 102, 241, 0.2)",
                      color: "#6366f1",
                      border: "1px solid #6366f1",
                      fontWeight: 700,
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={`${(
                      (sequences.reduce(
                        (sum, seq) => sum + Math.abs(seq.hart / seq.optimal),
                        0
                      ) /
                        sequences.length) *
                      100
                    ).toFixed(1)}%`}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(249, 115, 22, 0.2)",
                      color: "#f97316",
                      border: "1px solid #f97316",
                      fontWeight: 700,
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {caption && (
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.7)",
            mt: 3,
            fontSize: "0.95rem",
            fontStyle: "italic",
            lineHeight: 1.4,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
};

export default BenchmarkTable;
