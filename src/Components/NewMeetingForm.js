import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";

const theme = createTheme();

const NewMeetingForm = () => {
  const [currentStudent, setCurrentStudent] = React.useState("");
  const [currentTeacher, setCurrentTeacher] = React.useState("");

  const handleChange = (event) => {
    // setCurrentStudent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // remember to make it a controlled form

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
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
                <InputLabel id="teacher-select-label">Teacher</InputLabel>
                <Select
                  labelid="teacher-select"
                  id="teacher-select"
                  value={currentTeacher}
                  label="Teacher"
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value={10}>Student A</MenuItem>
                  <MenuItem value={20}>Student B</MenuItem>
                  <MenuItem value={30}>Student C</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="student-select-label">Student</InputLabel>
                <Select
                  labelid="student-select-label"
                  id="student-select"
                  value={currentStudent}
                  label="Student"
                  onChange={handleChange}
                  fullWidth
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                >
                  <MenuItem value={10}>Student A</MenuItem>
                  <MenuItem value={20}>Student B</MenuItem>
                  <MenuItem value={30}>Student C</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="duration"
                  label="Duration"
                  type="number"
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
