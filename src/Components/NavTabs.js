import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";

const NavTabs = () => {
  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Tabs value={false}>
        <Tab label="Home" component={NavLink} to="/" />
        <Tab
          label="Attendance Logs"
          component={NavLink}
          to="/attendance-logs"
        />
        <Tab label="New Meeting" component={NavLink} to="/meetings/new" />
      </Tabs>
    </Box>
  );
};

export default NavTabs;
