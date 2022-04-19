import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          USING  MERN STACK
        </Typography>
        <Typography sx={{ fontFamily: "fantacy" }} variant="h5">
          By Aditi Jain
        </Typography>
      </Box>
    </div>
  );
};

export default About;