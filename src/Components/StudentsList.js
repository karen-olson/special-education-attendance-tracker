import React, { useState, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { nanoid } from "nanoid";

const StudentsList = ({ teacherId }) => {
  const [studentsToDisplay, setStudentsToDisplay] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/teachers/${teacherId}/students`)
      .then((resp) => resp.json())
      .then((students) => {
        console.log("students: ", students);
        return setStudentsToDisplay(students);
      });
  }, []);

  const studentComponents = studentsToDisplay.map((student) => (
    <ListItem button key={nanoid()}>
      <ListItemText primary={student.first_name + " " + student.last_name} />
    </ListItem>
  ));

  return <div>{studentComponents}</div>;
};
export default StudentsList;
