import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "material-ui-image";
import Paper from "@mui/material/Paper";

const Home = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    ).then((resp) => setImageUrl(resp.url));
  }, []);

  return (
    <>
      <Container sx={{ pt: 5 }}>
        <Paper elevation={3}>
          <Typography variant="h4" align="center" pt={4} pb={2}>
            Special Education Attendance Tracker
          </Typography>
          <Typography variant="h5" align="center" pb={2}>
            A Tool for Supervisors
          </Typography>
        </Paper>
      </Container>
      <br />
      <Container>
        <Paper elevation={3}>
          <Image
            src={imageUrl}
            alt="Woman smiling while sitting at a desk with a laptop and coffee cup."
            aspectRatio={1.7}
          />
        </Paper>
      </Container>
      <br />
      <Container>
        <Paper elevation={3}>
          <Typography variant="h5" align="center" pt={4}>
            Easily view all of your teachers' attendance logs
          </Typography>
          <Typography variant="h5" align="center" pb={4}>
            in one convenient location.
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
