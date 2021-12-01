import React, { useState, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const StudentsList = ({ teacher }) => {
  const navigate = useNavigate();

  function handleClick(student) {
    navigate(`/meetings/teachers/${teacher.id}/students/${student.id}`);
  }

  const studentComponents = teacher.students_list.map((student) => (
    <ListItem button key={nanoid()} onClick={() => handleClick(student)}>
      <ListItemText primary={student.first_name + " " + student.last_name} />
    </ListItem>
  ));

  return <div>{studentComponents}</div>;
};
export default StudentsList;
