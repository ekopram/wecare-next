import { Button, Stack, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";

function EditableRowAppointment({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <TableRow>
      <TableCell>
        <TextField
          name="name"
          label="Nama"
          type="text"
          required
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="noTelp"
          label="No"
          type="number"
          required
          value={editFormData.noTelp}
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="order"
          label="Order"
          type="text"
          required
          value={editFormData.order}
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="terapis"
          label="Terapis"
          type="text"
          required
          value={editFormData.terapis}
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="tanggal"
          label="Tanggal"
          type="text"
          required
          value={editFormData.tanggal}
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell>
      <Stack justifyContent="center" direction="row" spacing={2}>
          <Button variant="outlined" type="submit" color="success" sx={{fontWeight: 'bold'}}>
            Save
          </Button>
          <Button
            variant="outlined"
            type="button"
            color="error"
            onClick={handleCancelClick}
            sx={{fontWeight: 'bold'}}
          >
            Cancel
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default EditableRowAppointment;
