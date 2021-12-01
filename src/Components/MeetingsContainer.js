import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MeetingCard from "./MeetingCard";

const MeetingsContainer = ({ teachers, students }) => {
  // Display all meetings between a teacher and a student (teacher.student[?].meetings)
  const [meetingsToDisplay, setMeetingsToDisplay] = useState([]);

  const params = useParams();

  const teacherId = parseInt(params.id);
  const studentId = parseInt(params.student_id);

  const teacher = teachers.find((teacher) => teacher.id === teacherId);
  const teacherName = teacher.first_name + " " + teacher.last_name;

  const student = students.find((student) => student.id === studentId);
  const studentName = student.first_name + " " + student.last_name;

  console.log(meetingsToDisplay);

  useEffect(() => {
    fetch(
      `http://localhost:9292/teachers/${teacherId}/students/${studentId}/meetings`
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

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center">
        Meetings
      </Typography>
      <Typography variant="body1">
        Meetings between {teacherName} ({teacher.specialty}) and {studentName}:
      </Typography>
      <br />
      {meetingCards}
    </Container>
  );
};

export default MeetingsContainer;
