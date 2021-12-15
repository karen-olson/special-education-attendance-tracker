import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";

const MeetingCard = ({ meeting, teacher, student, handleDeleteMeeting }) => {
  function handleDelete(e) {
    fetch(`https://frozen-oasis-63947.herokuapp.com/meetings/${meeting.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meeting),
    }).then(() => handleDeleteMeeting(meeting));
  }

  return (
    <Accordion key={meeting.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{meeting.formatted_date}</Typography>
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
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <Link to={`/meetings/${meeting.id}/edit`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MeetingCard;
