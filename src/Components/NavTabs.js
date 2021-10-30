import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";

const NavTabs = () => {
  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Tabs value={false}>
        <Tab label="Rosters" component={NavLink} to="/rosters" />
        <Tab label="Meetings" component={NavLink} to="/meetings" />
        <Tab label="New Meeting" component={NavLink} to="/meetings/new" />
      </Tabs>
    </Box>
  );
};

export default NavTabs;
