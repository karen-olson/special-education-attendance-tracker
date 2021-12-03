import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@material-ui/core";

import MeetingCard from "./MeetingCard";

const MeetingsContainer = ({ teachers, students }) => {
  const [meetingsToDisplay, setMeetingsToDisplay] = useState([]);

  const params = useParams();

  const teacherId = parseInt(params.id);
  const studentId = parseInt(params.student_id);

  const teacher = teachers.find((teacher) => teacher.id === teacherId);
  const teacherName = teacher.first_name + " " + teacher.last_name;

  const student = students.find((student) => student.id === studentId);
  const studentName = student.first_name + " " + student.last_name;

  useEffect(() => {
    fetch(
      `https://frozen-oasis-63947.herokuapp.com/teachers/${teacherId}/students/${studentId}/meetings`
    )
      .then((resp) => resp.json())
      .then((meetings) => {
        setMeetingsToDisplay(meetings);
      });
  }, [teacherId, studentId]);

  function handleDeleteMeeting(meetingToDelete) {
    const updatedMeetings = meetingsToDisplay.filter(
      (meeting) => meeting.id !== meetingToDelete.id
    );
    setMeetingsToDisplay(updatedMeetings);
  }

  const meetingCards = meetingsToDisplay.map((meeting) => (
    <MeetingCard
      meeting={meeting}
      teacher={teacherName}
      student={studentName}
      handleDeleteMeeting={handleDeleteMeeting}
      key={meeting.id}
    />
  ));

  const totalNumberOfMinutes = meetingsToDisplay
    .map((meeting) => meeting.duration)
    .reduce((a, b) => a + b, 0);

  const firstMeeting = meetingsToDisplay[meetingsToDisplay.length - 1];

  return (
    <>
      {teachers.length > 0 &&
      students.length > 0 &&
      meetingsToDisplay.length > 0 ? (
        <>
          <Container maxWidth="md">
            <Typography variant="h4" mt={9} mb={3} align="center">
              Meetings with {studentName}
            </Typography>
            <Container align="center">
              <Box display="flex" width={500} height={150}>
                <Box m="auto">
                  <AvatarGroup max={4}>
                    <Avatar
                      alt={teacherName}
                      src={teacher.image_url}
                      sx={{ width: 150, height: 150 }}
                    />
                    <Avatar
                      alt={studentName}
                      src={student.image_url}
                      sx={{ width: 150, height: 150 }}
                    />
                  </AvatarGroup>
                </Box>
              </Box>
            </Container>
            <br />
            <br />
            <Typography variant="h6">
              {teacherName} has provided a total of {totalNumberOfMinutes}{" "}
              minutes of IEP services to {studentName}
              since {firstMeeting.date.split("").slice(0, 10).join("")}.
            </Typography>
            <br />
            <Typography variant="body1">
              <em>Select a meeting date to view details.</em>
            </Typography>
            {meetingCards}
          </Container>
        </>
      ) : (
        <ClipLoader color="blue" loading="true" size={150} />
      )}
    </>
  );
};

export default MeetingsContainer;
