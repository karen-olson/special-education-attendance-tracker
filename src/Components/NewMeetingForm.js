import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import GroupIcon from "@mui/icons-material/Group";

const theme = createTheme();

const NewMeetingForm = ({ teachers, students, onFormSubmit }) => {
  const [formData, setFormData] = React.useState({
    teacher_id: "",
    student_id: "",
    duration: "",
    notes: "",
  });

  const handleChange = (event) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const parsedData = {
      ...formData,
      teacher_id: parseInt(formData.teacher_id),
      student_id: parseInt(formData.student_id),
      duration: parseInt(formData.duration),
    };

    onFormSubmit(parsedData);

    setFormData({
      teacher_id: "",
      student_id: "",
      duration: "",
      notes: "",
    });
  };

  // Debug issue with using .map to programattically create MenuItem components for teachers and students.
  // const teacherMenuItems = teachers.map((teacher) => {
  //   <MenuItem value={teacher.id}>
  //     {teacher.first_name + " " + teacher.last_name}
  //     Teacher
  //   </MenuItem>;
  // });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <GroupIcon fontSize="large" />
          <Typography component="h1" variant="h5">
            Create a Meeting
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel id="teacher-label">Teacher</InputLabel>
                <Select
                  labelid="teacher"
                  id="teacher_id"
                  name="teacher_id"
                  value={formData["teacher_id"]}
                  label="Teacher"
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value={teachers[0].id}>
                    {teachers[0].first_name + " " + teachers[0].last_name}
                  </MenuItem>
                  <MenuItem value={teachers[1].id}>
                    {teachers[1].first_name + " " + teachers[1].last_name}
                  </MenuItem>
                  <MenuItem value={teachers[2].id}>
                    {teachers[2].first_name + " " + teachers[2].last_name}
                  </MenuItem>
                  <MenuItem value={teachers[3].id}>
                    {teachers[3].first_name + " " + teachers[3].last_name}
                  </MenuItem>
                  <MenuItem value={teachers[4].id}>
                    {teachers[4].first_name + " " + teachers[4].last_name}
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="student-label">Student</InputLabel>
                <Select
                  labelid="student-label"
                  id="student_id"
                  name="student_id"
                  value={formData["student_id"]}
                  label="Student"
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value={students[0].id}>
                    {students[0].first_name + " " + students[0].last_name}
                  </MenuItem>
                  <MenuItem value={students[1].id}>
                    {students[1].first_name + " " + students[1].last_name}
                  </MenuItem>
                  <MenuItem value={students[2].id}>
                    {students[2].first_name + " " + students[2].last_name}
                  </MenuItem>
                  <MenuItem value={students[3].id}>
                    {students[3].first_name + " " + students[3].last_name}
                  </MenuItem>
                  <MenuItem value={students[4].id}>
                    {students[4].first_name + " " + students[4].last_name}
                  </MenuItem>
                  <MenuItem value={students[5].id}>
                    {students[5].first_name + " " + students[5].last_name}
                  </MenuItem>
                  <MenuItem value={students[6].id}>
                    {students[6].first_name + " " + students[6].last_name}
                  </MenuItem>
                  <MenuItem value={students[7].id}>
                    {students[7].first_name + " " + students[7].last_name}
                  </MenuItem>
                  <MenuItem value={students[8].id}>
                    {students[8].first_name + " " + students[8].last_name}
                  </MenuItem>
                  <MenuItem value={students[9].id}>
                    {students[9].first_name + " " + students[9].last_name}
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="duration"
                  name="duration"
                  label="Duration"
                  type="number"
                  value={formData["duration"]}
                  onChange={handleChange}
                  placeholder="# of minutes"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="notes-label">Notes</InputLabel>
                <TextField
                  labelid="notes-label"
                  fullWidth
                  id="notes"
                  label="Notes"
                  name="notes"
                  onChange={handleChange}
                  value={formData["notes"]}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default NewMeetingForm;
