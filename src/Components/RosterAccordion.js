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
  const accordionComponents = teachers.map((teacher) => {
    return (
      <Accordion key={nanoid()}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {teacher.first_name + " " + teacher.last_name}
            <br/>
            <em>{teacher.specialty}</em>
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
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom align="center">
        Rosters
      </Typography>
      {accordionComponents}
    </Container>
  );
};

export default RosterAccordion;
