import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AttendanceLogCard from "./AttendanceLogCard";

const AttendanceLogContainer = ({ teachers }) => {
  // Display all teachers
  // Render StudentsList for each teacher

  return (
    <Container maxWidth="md" sx={{ pt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Attendance Logs
      </Typography>
      <AttendanceLogCard teachers={teachers} />
    </Container>
  );
};

export default AttendanceLogContainer;
