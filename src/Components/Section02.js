import { Box, Button, Tab, Tabs } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Section02 = () => {
  const [value, setValue] = useState(0); // not in use
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "COMPANY_CODE",
      headerName: "COMPANY_CODE",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", COMPANY_CODE: 3500000000 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", COMPANY_CODE: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", COMPANY_CODE: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", COMPANY_CODE: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", COMPANY_CODE: null },
    { id: 6, lastName: "Melisandre", firstName: null, COMPANY_CODE: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", COMPANY_CODE: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", COMPANY_CODE: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue); // not in use
  };

  const Footer = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "8px",
        }}
      >
        <Button
          sx={{ margin: "0px 0px 20px 15px", backgroundColor: "#fc7500" }}
          variant="contained"
        >
          REFRESH DATA
        </Button>
        <Button
          sx={{ margin: "0px 0px 20px 8px", backgroundColor: "#fc7500" }}
          variant="contained" disabled={rowSelectionModel.length !== 1}
        >
          EDIT
        </Button>
        <Button
          sx={{ margin: "0px 0px 20px 8px", backgroundColor: "#fc7500" }}
          variant="contained"
        >
          DELETE
        </Button>
        <Button
          sx={{ margin: "0px 0px 20px 8px", backgroundColor: "#fc7500" }}
          variant="contained"
        >
          PREDICT
        </Button>
      </div>
    );
  };

  return (
    <Box height={"85vh"} sx={{ padding: "0 7px" }}>
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="HOME PAGE" {...a11yProps(0)} />
            <Tab label="ADD DATA" {...a11yProps(1)} />
            <Tab label="ANALYTICS VIEW" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Box></Box>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        slots={{
          //   toolbar: GridToolbar,
          footer: Footer,
        }}
      />
    </Box>
  );
};

export default Section02;
