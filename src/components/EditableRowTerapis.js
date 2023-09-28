import { Button, Stack, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";

function EditableRowTerapis({
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
          name="keahlian"
          label="keahlian"
          type="text"
          required
          value={editFormData.keahlian}
          onChange={handleEditFormChange}
        
        />
      </TableCell>
      <TableCell>
        <TextField
          name="status"
          type="text"
          required
          value={editFormData.status}
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

export default EditableRowTerapis;
