import React from "react";
import { Box } from "@mui/material";
import "./Styles/App.css";
import Section01 from "./Components/Section01";
import Section02 from "./Components/Section02";

const App = () => {
  return (
    <Box height="100vh">
      <Section01 />
      <Section02 />
    </Box>
  );
};

export default App;
