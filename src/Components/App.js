import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import NavTabs from "./NavTabs";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsAccordion from "./MeetingsContainer";
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

  return (
    <>
      <CssBaseline />
      <NavTabs />
      <Switch>
        <Route exact path="/meetings/new">
          <NewMeetingForm />
        </Route>
        <Route exact path="/rosters">
          <RosterAccordion teachers={teachers} />
        </Route>
        <Route exact path="/meetings/teachers/:id/students/:student_id">
          <MeetingsAccordion teachers={teachers} students={students} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
