import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MeetingCard from "./MeetingCard";

const MeetingsContainer = ({ teachers, students }) => {
  const [meetingsToDisplay, setMeetingsToDisplay] = useState([]);

  const params = useParams();

  const teacherId = params.id;
  const studentId = params.student_id;

  const teacherObject = teachers.find(
    (teacher) => teacher.id === parseInt(teacherId)
  );
  const teacherName = teacherObject.first_name + " " + teacherObject.last_name;

  const studentObject = students.find(
    (student) => student.id === parseInt(studentId)
  );
  const studentName = studentObject.first_name + " " + studentObject.last_name;

  useEffect(() => {
    fetch(
      `http://localhost:9292/teachers/${teacherId}/students/${studentId}/meetings`
    )
      .then((resp) => resp.json())
      .then((meetings) => {
        console.log("meetings: ", meetings);
        if (typeof meetings === "object") {
          setMeetingsToDisplay([meetings]);
        } else {
          setMeetingsToDisplay(meetings);
        }
      });

    return function cleanup() {
      setMeetingsToDisplay([]);
    };
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
      <Typography variant="h2" gutterBottom align="center">
        Meetings
      </Typography>
      {meetingCards}
    </Container>
  );
};

export default MeetingsContainer;
