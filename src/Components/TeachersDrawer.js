// import React from "react";

// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 240;

// const TeachersDrawer = ({ teachers, students, meetings }) => {
//   const teacherComponents = teachers.map((teacher) => (
//     <ListItem button key={teacher.id} onClick={handleClick}>
//       <ListItemText primary={teacher.first_name + " " + teacher.last_name} />
//     </ListItem>
//   ));

//   // const studentsToDisplay = students.map((student) => (
//   // <ListItem button key={student.id}>
//   //   <ListItemText primary={student.first_name + " " + student.last_name} />
//   // </ListItem>
//   // ));

//   function handleClick(e) {
//     const teacherName = e.target.innerText;

//     // const teacherObject = teachers.filter(
//     //   (teacher) => teacherName === teacher.first_name + " " + teacher.last_name
//     // )[0];

//     // const teacherMeetings = meetings.filter(
//     //   (meeting) => meeting.teacher_id === teacherObject.id
//     // );

//     // const student_ids = teacherMeetings.map(
//     //   (teacherMeeting) => teacherMeeting.student_id
//     // );
//     // const studentObjects = students.filter((student) =>
//     //   student_ids.includes(student.id)
//     // );

//     // const studentsToDisplay = studentObjects.map((student) => (
//       // <ListItem button key={student.id}>
//       //   <ListItemText primary={student.first_name + " " + student.last_name} />
//       // </ListItem>

//       // fetch request version

//       const teacher = e.target.innerText
//       const teacherId = teachers.filter(
//         (teacher) => teacherName === teacher.first_name + " " + teacher.last_name
//       )[0].id
//       // fetch to the endpoint that gives you all the students for a given teacher based on the teacher id
//       // /teachers/:id/students
//     ));
//   }

//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//         <Drawer
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//               boxSizing: "border-box",
//               mt: 10,
//             },
//           }}
//           variant="permanent"
//           anchor="left"
//         >
//           <List>{teacherComponents}</List>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{ flexGrow: 1, bgcolor: "background.default", pl: 3 }}
//         >
//           <List>{studentsToDisplay}</List>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default TeachersDrawer;
