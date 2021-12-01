import React from "react";
import StudentsList from "./StudentsList";
import { nanoid } from "nanoid";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AttendanceLogCard = ({ teachers }) => {
  const attendanceLogCards = teachers.map((teacher) => {
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
          <StudentsList teacher={teacher} />
        </AccordionDetails>
      </Accordion>
    );
  });

  return <>{attendanceLogCards}</>;
};

export default AttendanceLogCard;
