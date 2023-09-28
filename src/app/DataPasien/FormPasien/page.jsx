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
// import { dataPasien } from "../data/mockData";
import Header from "@/components/Header";
import { nanoid } from "nanoid";
import { Fragment } from "react";
import EditableRowPasien from "@/components/EditableRowPasien";
import ReadOnlyRowPasien from "@/components/ReadOnlyRowPasien";
import { tokens } from "@/app/theme";
import { dataPasien } from "@/components/dataPasien";

function FormPasien() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [pasiens, setPasiens] = useState(dataPasien);
  const [addFormData, setaddFormData] = useState({
    name: "",
    noTelp: "",
    alamat: "",
    tanggal: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    noTelp: "",
    alamat: "",
    tanggal: "",
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
      alamat: addFormData.alamat,
      tanggal: addFormData.tanggal,
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
      alamat: editFormData.alamat,
      tanggal: editFormData.tanggal,
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
      alamat: pasien.alamat,
      tanggal: pasien.tanggal,
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
      <Header title="Tambah Pasien" />

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
              label="No"
              type="number"
              required
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="alamat"
              label="Alamat"
              type="text"
              required
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="tanggal"
              type="date"
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
                sx={{ fontWeight: "bold" }}
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
                    Alamat
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    tanggal
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
                      <EditableRowPasien
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRowPasien
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

export default FormPasien;
