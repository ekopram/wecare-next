import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  TablePagination,
  useTheme,
} from "@mui/material";
import Header from "@/components/Header";
import { nanoid } from "nanoid";
import { Fragment } from "react";
import EditableRowTerapis from "@/components/EditableRowTerapis";
import ReadOnlyRowTerapis from "@/components/ReadOnlyRowTerapis";
import { tokens } from "@/app/theme";

function createData(id ,name, noTelp, keahlian, status) {
    return {id, name, noTelp, keahlian, status };
  }
  
  const dataTerapis = [
    createData(1,'rudi', '085727263498', 'pijat','tersedia'),
    createData(2,'hadi', '085465986325', 'pijat','absen'),
    createData(3,'suwarno', '085727263498', 'pijat','tersedia'),
    createData(4,'galang', '085727263498', 'pijat','tersedia'),
    createData(5,'velop', '085727263498', 'pijat','tersedia'),
    createData(6,'gulio', '085465986325', 'pijat','absen'),
    createData(7,'rara', '085727263498', 'pijat','tersedia'),
    createData(8,'gerio', '085465986325', 'pijat','tersedia'),
    createData(9,'rudi', '085727263498', 'pijat','tersedia'),
    createData(10,'hadi', '085465986325', 'pijat','absen'),
    createData(11,'suwarno', '085727263498', 'pijat','tersedia'),
    createData(12,'galang', '085727263498', 'pijat','tersedia'),
    createData(13,'velop', '085727263498', 'pijat','tersedia'),
    createData(15,'gulio', '085465986325', 'pijat','absen'),
    createData(16,'rara', '085727263498', 'pijat','tersedia'),
    createData(17,'gerio', '085465986325', 'pijat','tersedia'),
  ];

function FormTerapis() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [pasiens, setPasiens] = useState(dataTerapis);
  const [addFormData, setaddFormData] = useState({
    name: "",
    noTelp: "",
    keahlian: "",
    status: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    noTelp: "",
    keahlian: "",
    status: "",
  });

  const [editPasienId, setEditPasienId] = useState(null);

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setaddFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newPasien = {
      id: nanoid(),
      name: addFormData.name,
      noTelp: addFormData.noTelp,
      keahlian: addFormData.keahlian,
      status: addFormData.status,
    };

    const newPasiens = [...pasiens, newPasien];
    setPasiens(newPasiens);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedPasien = {
      id: editPasienId,
      name: editFormData.name,
      noTelp: editFormData.noTelp,
      keahlian: editFormData.keahlian,
      status: editFormData.status,
    };

    const newPasiens = [...pasiens];

    const index = pasiens.findIndex((pasien) => pasien.id === editPasienId);

    newPasiens[index] = editedPasien;

    setPasiens(newPasiens);
    setEditPasienId(null);
  };

  const handleEditClick = (e, pasien) => {
    e.preventDefault();
    setEditPasienId(pasien.id);

    const formValues = {
      name: pasien.name,
      noTelp: pasien.noTelp,
      keahlian: pasien.keahlian,
      status: pasien.status,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditPasienId(null);
  };

  const handleDeleteClick = (pasienId) => {
    const newPasiens = [...pasiens];

    const index = pasiens.findIndex((pasien) => pasien.id === pasienId);

    newPasiens.splice(index, 1);

    setPasiens(newPasiens);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box m="20px">
      <Header title="Tambah Terapis" />

      <Box
        onSubmit={handleAddFormSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              name="name"
              label="Nama"
              type="text"
              required
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="noTelp"
              label="No.Telp"
              type="number"
              required
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="keahlian"
              label="Keahlian"
              type="text"
              required
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="status"
              label="Status"
              type="text"
              required
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs>
            <Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="info"
                style={{ marginTop: 12, marginLeft: 5 }}
                sx={{fontWeight: "bold"}}
              >
                Tambah
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="data-pasien-table" marginRight={"2rem"}>
        <form onSubmit={handleEditFormSubmit}>
          <Paper sx={{overflow: 'hidden', width: '100%', maxHeight: 600 }}>
          <TableContainer component={Paper} sx={{maxHeight: 600 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    Nama
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    No.Telp
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    Keahlian
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pasiens
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pasien) => (
                  <Fragment>
                    {editPasienId === pasien.id ? (
                      <EditableRowTerapis
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRowTerapis
                        pasiens={pasiens}
                        pasien={pasien}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={pasiens.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          ></TablePagination>
        </form>
      </Box>
    </Box>
  );
}

export default FormTerapis;
