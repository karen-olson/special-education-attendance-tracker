import React, { useState, useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import NavTabs from "./NavTabs";
import Home from "./Home";
import MeetingForm from "./MeetingForm";
import MeetingsContainer from "./MeetingsContainer";
import AttendanceLogContainer from "./AttendanceLogContainer";

const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch("https://frozen-oasis-63947.herokuapp.com/teachers")
      .then((resp) => resp.json())
      .then((teachers) => setTeachers(teachers));

    fetch("https://frozen-oasis-63947.herokuapp.com/students")
      .then((resp) => resp.json())
      .then((students) => setStudents(students));

    fetch("https://frozen-oasis-63947.herokuapp.com/meetings")
      .then((resp) => resp.json())
      .then((meetings) => setMeetings(meetings));
  }, []);

  const navigate = useNavigate();

  function onEditFormSubmit(formData, meetingId) {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(
      `https://frozen-oasis-63947.herokuapp.com/meetings/${meetingId}`,
      configObj
    ).then((resp) => {
      if (resp.ok) {
        resp
          .json()
          .then(
            navigate(
              `/teachers/${formData.teacher_id}/students/${formData.student_id}/meetings`
            )
          );
      }
    });
  }

  function onFormSubmit(formData) {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("https://frozen-oasis-63947.herokuapp.com/meetings", configObj).then(
      (resp) => {
        if (resp.ok) {
          resp
            .json()
            .then(
              navigate(
                `/teachers/${formData.teacher_id}/students/${formData.student_id}/meetings`
              )
            );
        }
      }
    );
  }

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `;

  return (
    <>
      {teachers.length > 0 && students.length > 0 ? (
        <>
          <CssBaseline />
          <NavTabs />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route
              path="attendance-logs"
              element={<AttendanceLogContainer teachers={teachers} />}
            />
            <Route
              path="teachers/:id/students/:student_id/meetings"
              element={
                <MeetingsContainer teachers={teachers} students={students} />
              }
            />
            <Route
              path="meetings/:id/edit"
              element={
                <MeetingForm
                  teachers={teachers}
                  students={students}
                  meetings={meetings}
                  onFormSubmit={onEditFormSubmit}
                />
              }
            />
            <Route
              path="meetings/new"
              element={
                <MeetingForm
                  teachers={teachers}
                  students={students}
                  onFormSubmit={onFormSubmit}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <ClipLoader color="blue" loading="true" css={override} size={150} />
      )}
    </>
  );
};

export default App;
