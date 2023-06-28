import { Box, Button, Input, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

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

const Model = (props) => {
  const { open, handleCancle, rowSelectionModel, foundObject, id } = props;

  const [editableid, setEditableid] = useState(id);
  const [firstName, setFirstName] = useState("foundObject.firstName");
  const [lastname, setLastname] = useState("foundObject.lastname");

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
        <Button onClick={handleCancle} variant="contained">
          CANCEL
        </Button>
      </>
    );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCancle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
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
          }}
        >
          <Typography variant="h5">EDIT</Typography>
          {rowSelectionModel.length > 0
            ? dynamicEditInput()
            : console.log("first")}
        </Box>
      </Modal>
    </div>
  );
};

export default Model;
