import { Box, Button, Pagination, Tab, Tabs, Typography } from "@mui/material";
import {
  DataGrid,
  GridToolbarQuickFilter,
  gridPageCountSelector,
  gridPaginationModelSelector,
  useGridSelector,
} from "@mui/x-data-grid";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useGridApiContext } from "@mui/x-data-grid";
import { Input } from "@mui/base";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const modleStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "4px solid #fc7500",
  borderRadius: "8px",
  boxShadow: 24,
  p: 1,
};

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    // width: 150,
    // editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    // width: 150,
    // editable: true,
  },
  {
    field: "COMPANY_CODE",
    headerName: "COMPANY_CODE",
    type: "number",
    // width: 170,
    // editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    // width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const Section02 = () => {
  const [value, setValue] = useState(0); // not in use
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [rows, setrows] = useState([
    { id: 1, lastName: "Snow", firstName: "Jon", COMPANY_CODE: 3500000000 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", COMPANY_CODE: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", COMPANY_CODE: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", COMPANY_CODE: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", COMPANY_CODE: null },
    { id: 6, lastName: "Melisandre", firstName: null, COMPANY_CODE: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", COMPANY_CODE: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", COMPANY_CODE: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
    { id: 10, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
    { id: 11, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
    { id: 12, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
    { id: 13, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
    { id: 14, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
    { id: 15, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
    { id: 16, lastName: "Roxie", firstName: "Harvey", COMPANY_CODE: 65 },
  ]);
  const [editableid, setEditableid] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    const foundObject = rows.find((obj) => obj.id === rowSelectionModel[0]);
    setEditableid(foundObject.id);
    setFirstName(foundObject.firstName);
    setLastname(foundObject.lastName);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue); // not in use
  };

  const handleDelete = () => {
    let updatedRows = rows.filter((row) => !rowSelectionModel.includes(row.id));
    setrows(updatedRows);
    setRowSelectionModel([]);
  };

  function Toolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
      >
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
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput) =>
            searchInput
              .split(",")
              .map((value) => value.trim())
              .filter((value) => value !== "")
          }
        />
      </Box>
    );
  }
  function CustomPagination() {
    const apiRef = useGridApiContext();
    const paginationModel = useGridSelector(
      apiRef,
      gridPaginationModelSelector
    );
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <Pagination
        count={pageCount}
        page={paginationModel.page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }
  const Footer = () => {
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <Box >
          <Button
            sx={{ margin: "0px 0px 5px 15px", backgroundColor: "#fc7500" }}
            variant="contained"
          >
            REFRESH DATA
          </Button>
          <Button
            sx={{ margin: "0px 0px 5px 8px", backgroundColor: "#fc7500" }}
            variant="contained"
            disabled={rowSelectionModel.length !== 1}
            onClick={handleOpen}
          >
            EDIT
          </Button>
          <Button
            sx={{ margin: "0px 0px 5px 8px", backgroundColor: "#fc7500" }}
            variant="contained"
            onClick={() => handleDelete()}
          >
            DELETE
          </Button>
          <Button
            sx={{ margin: "0px 0px 5px 8px", backgroundColor: "#fc7500" }}
            variant="contained"
          >
            PREDICT
          </Button>
        </Box>
        {CustomPagination()}
      </Box>
    );
  };

  const dynamicEditInput = () => {
    return (
      <>
        <Input
          value={editableid}
          onChange={(e) => setEditableid(e.value)}
        ></Input>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.value)}
        ></Input>
        <Input value={lastname} onChange={(e) => setLastname(e.value)}></Input>
        <Input value={"COMPANY_CODE"}></Input>
        <Button variant="contained">SUBMIT</Button>
        <Button onClick={handleClose} variant="contained">
          CANCEL
        </Button>
      </>
    );
  };

  return (
    <Box height={"90vh"} width={"100vw"} sx={{ padding: "0 7px" }}>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modleStyle}>
            <Typography variant="h5">EDIT</Typography>
            {rowSelectionModel.length > 0
              ? dynamicEditInput()
              : console.log("first")}
          </Box>
        </Modal>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterValues: [""],
            },
          },
          pagination: {
            paginationModel: { pageSize:10, page: 0 },
          },
        }}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        slots={{ toolbar: Toolbar, footer: Footer }}
        pagination
      />
    </Box>
  );
};

export default Section02;
