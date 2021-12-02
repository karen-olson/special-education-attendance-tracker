import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ClipLoader from "react-spinners/ClipLoader";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const StudentsList = ({ teacher }) => {
  const navigate = useNavigate();

  function handleClick(student) {
    navigate(`/teachers/${teacher.id}/students/${student.id}/meetings`);
  }

  const studentComponents = teacher.students.map((student) => (
    <ListItem button key={nanoid()} onClick={() => handleClick(student)}>
      <ListItemText primary={student.first_name + " " + student.last_name} />
    </ListItem>
  ));

  return (
    <>
      {teacher ? (
        <>
          <div>{studentComponents}</div>
        </>
      ) : (
        <ClipLoader color="blue" loading="true" size={150} />
      )}
    </>
  );
};
export default StudentsList;
