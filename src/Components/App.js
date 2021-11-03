import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import NavTabs from "./NavTabs";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsAccordion from "./MeetingsAccordion";
import RosterAccordion from "./RosterAccordion";

const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/teachers")
      .then((resp) => resp.json())
      .then((teachers) => setTeachers(teachers));

    fetch("http://localhost:9292/students")
      .then((resp) => resp.json())
      .then((students) => setStudents(students));

    fetch("http://localhost:9292/meetings")
      .then((resp) => resp.json())
      .then((meetings) => setMeetings(meetings));
  }, []);

  return (
    <>
      <CssBaseline />
      <NavTabs />
      <Switch>
        <Route exact path="/meetings/new">
          <NewMeetingForm />
        </Route>
        <Route exact path="/rosters">
          {/* <TeachersDrawer
            teachers={teachers}
            students={students}
            meetings={meetings}
          /> */}
          <RosterAccordion teachers={teachers} students={students} />
        </Route>
        <Route exact path="/meetings">
          <MeetingsAccordion meetings={meetings} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
