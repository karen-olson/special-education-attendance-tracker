import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import StudentsList from "./StudentsList";
import { nanoid } from "nanoid";

const RosterAccordion = ({ teachers }) => {
  // Display all teachers
  // Render StudentsList for each teacher
  const accordionComponents = teachers.map((teacher) => {
    return (
      <Accordion key={nanoid()}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" p={1}>
            {teacher.first_name + " " + teacher.last_name}
            <br />
            <Typography variant="body1" pt={1} pl={2}>
              {teacher.specialty}
            </Typography>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <em>Select a student to view meetings.</em>
          <StudentsList teacherId={teacher.id} />
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Container maxWidth="md" sx={{ pt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Attendance Logs
      </Typography>
      {accordionComponents}
    </Container>
  );
};

export default RosterAccordion;
