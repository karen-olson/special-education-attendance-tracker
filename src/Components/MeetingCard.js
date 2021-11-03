import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";

const MeetingCard = ({ meeting, teacher, student, handleDeleteMeeting }) => {
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meeting),
  };

  function handleClick(e) {
    fetch(`http://localhost:9292/meetings/${meeting.id}`, configObj)
      .then((resp) => resp.json())
      .then((meeting) => handleDeleteMeeting(meeting));
    //   re-route to confirmation page?
  }

  return (
    <Accordion key={meeting.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          {meeting.created_at.split("").slice(0, 10).join("")}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Teacher: {teacher}
          <br />
          Student: {student} <br />
          Duration: {meeting.duration} minutes
          <br />
          <br />
          Notes:
          <br />
          {meeting.notes}
          <br />
          <br />
          <IconButton onClick={handleClick}>
            <DeleteIcon />
          </IconButton>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MeetingCard;
