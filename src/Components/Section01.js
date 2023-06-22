import React from "react";
import abc from "../Assets/abclogo.svg";
import hrc from "../Assets/hrclogo.svg";
import { Box } from "@mui/material";



const Section01 = () => {
  return (
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ padding: "16px 12px" }}
      >
        <img src={abc} alt="abc logo" />
        <img src={hrc} alt="abc logo" />
        <img style={{ visibility: "hidden" }} src={abc} alt="abc logo" />
      </Box>
  );
};

export default Section01;
