import {
    Button,
    Stack,
    TableCell,
    TableRow,
  } from "@mui/material";
  import React from "react";
  
  function ReadOnlyRowTransaksi({ pasien, handleEditClick, handleDeleteClick }) {
    return (
      <TableRow hover>
        <TableCell component="th" scope="row" sx={{ fontSize: "1rem" }}>
          {pasien.name}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1rem" }}>
          {pasien.order}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1rem" }}>
          {pasien.nominal}
        </TableCell>
        <TableCell sx={{ fontSize: "1rem" }}>
          <Stack justifyContent="center" direction="row" spacing={2}>
            <Button
              onClick={(e) => handleEditClick(e, pasien)}
              variant="contained"
              color="warning"
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteClick(pasien.id)}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
    );
  }
  
  export default ReadOnlyRowTransaksi;
  