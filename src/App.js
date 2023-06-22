import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./Styles/App.css";
import abc from "./Assets/abclogo.svg";
import hrc from "./Assets/hrclogo.svg";

const App = () => {
  const [page, setPage] = useState(0);
  const pageSize = 5;

  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];
  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  return (
    <div id="main">
      <Box height="100vh">
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "16px 12px" }}
        >
          <img src={abc} alt="abc logo" />
          <img src={hrc} alt="abc logo" />

          <Box width="20%"></Box>
        </Box>
        <Box height={"85vh"}>
          <Box display="flex" justifyContent="space-between">
            <Box></Box>
            <Box></Box>
          </Box>
          <DataGrid
            height="85vh"
            rows={rows.slice(page * pageSize, (page + 1) * pageSize)}
            columns={columns}
            pagination
            pageSize={pageSize}
            rowCount={rows.length}
            onPageChange={handlePageChange}
          />
        </Box>
        <Button variant="contained">Hello Gend</Button>
      </Box>
    </div>
  );
};

export default App;
