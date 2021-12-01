import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import NavTabs from "./NavTabs";
import Home from "./Home";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsContainer from "./MeetingsContainer";
import RosterAccordion from "./RosterAccordion";

const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/teachers")
      .then((resp) => resp.json())
      .then((teachers) => setTeachers(teachers));

    fetch("http://localhost:9292/students")
      .then((resp) => resp.json())
      .then((students) => setStudents(students));
  }, []);

  function onFormSubmit(newMeeting) {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeeting),
    };

    fetch("http://localhost:9292/meetings", configObj).then((resp) =>
      resp.json().then((meeting) => console.log(meeting))
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
              // index
              path="rosters"
              element={<RosterAccordion teachers={teachers} />}
            />
            <Route
              path="meetings/teachers/:id/students/:student_id"
              element={
                <MeetingsContainer teachers={teachers} students={students} />
              }
            />
            <Route
              path="meetings/new"
              element={
                <NewMeetingForm
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
