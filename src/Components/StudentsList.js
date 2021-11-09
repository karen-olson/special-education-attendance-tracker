import React, { useState, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const StudentsList = ({ teacherId }) => {
  const [studentsToDisplay, setStudentsToDisplay] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/teachers/${teacherId}/students`)
      .then((resp) => resp.json())
      .then((students) => {
        return setStudentsToDisplay(students);
      });

    return function cleanup() {
      setStudentsToDisplay([]);
    };
  }, [teacherId]);

  function handleClick(student) {
    navigate(`/meetings/teachers/${teacherId}/students/${student.id}`);
  }

  const studentComponents = studentsToDisplay.map((student) => (
    <ListItem button key={nanoid()} onClick={() => handleClick(student)}>
      <ListItemText primary={student.first_name + " " + student.last_name} />
    </ListItem>
  ));

  return <div>{studentComponents}</div>;
};
export default StudentsList;
