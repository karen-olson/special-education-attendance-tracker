import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

const MeetingsAccordion = ({ meetings }) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom align="center">
        Meetings
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Date: ____ Time: ____ </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Teacher: ____ Student: ____ Duration: ____
            <br />
            Notes
            <br />
            (delete icon)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Date: ____ Time: ____ </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Teacher: ____ Student: ____ Duration: ____
            <br />
            Notes
            <br />
            (delete icon)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default MeetingsAccordion;
