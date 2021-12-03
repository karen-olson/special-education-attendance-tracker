import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ClipLoader from "react-spinners/ClipLoader";

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
            <Typography variant="h4" gutterBottom align="center">
              Meetings
            </Typography>
            <Container align="center" sx={{ align: "center" }}>
              <AvatarGroup max={4}>
                <Avatar
                  alt={teacherName}
                  src={teacher.image_url}
                  sx={{ width: 64, height: 64 }}
                />
                <Avatar
                  alt={studentName}
                  src={student.image_url}
                  sx={{ width: 64, height: 64 }}
                />
              </AvatarGroup>
            </Container>
            <br />
            <Typography variant="body1">
              {teacherName} has seen {studentName} for a total of{" "}
              {totalNumberOfMinutes} minutes since{" "}
              {firstMeeting.date.split("").slice(0, 10).join("")}.
            </Typography>
            <br />
            <Typography variant="body1">
              Meetings between {teacherName} ({teacher.specialty}) and{" "}
              {studentName}:
            </Typography>
            <br />
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
