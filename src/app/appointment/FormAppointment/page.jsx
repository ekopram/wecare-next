"use client"

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
// import Header from "../components/Header";
import { nanoid } from "nanoid";
import { Fragment } from "react";
// import ReadOnlyRowAppointment from "../components/ReadOnlyRowAppointment";
// import EditableRowAppointment from "../components/EditableRowAppointment";
// import { tokens } from "../theme";
import Header from "@/components/Header";
import ReadOnlyRowAppointment from "@/components/ReadOnlyRowAppointment";
import EditableRowAppointment from "@/components/EditableRowAppointment";
import { tokens } from "@/app/theme";

function createData(id ,name, noTelp, order, terapis, tanggal) {
    return {id, name, noTelp, order, terapis, tanggal };
  }
  
  const dataTerapis = [
    createData(1,'rudi', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(2,'hadi', '085465986325', 'pijat','reni','24-02-2023',),
    createData(3,'suwarno', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(4,'galang', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(5,'velop', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(6,'gulio', '085465986325', 'pijat','reni','24-02-2023',),
    createData(7,'rara', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(8,'gerio', '085465986325', 'pijat','basuki','24-02-2023',),
    createData(9,'rudi', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(10,'hadi', '085465986325', 'pijat','reni','24-02-2023',),
    createData(11,'suwarno', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(12,'galang', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(13,'velop', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(14,'gulio', '085465986325', 'pijat','reni','24-02-2023',),
    createData(15,'rara', '085727263498', 'pijat','basuki','24-02-2023',),
    createData(16,'gerio', '085465986325', 'pijat','basuki','24-02-2023',),
  ];

function FormAppointment() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [pasiens, setPasiens] = useState(dataTerapis);
  const [addFormData, setaddFormData] = useState({
    name: "",
    noTelp: "",
    order: "",
    terapis: "",
    tanggal: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    noTelp: "",
    order: "",
    terapis: "",
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
      order: addFormData.order,
      terapis: addFormData.terapis,
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
      order: editFormData.order,
      terapis: editFormData.terapis,
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
      order: pasien.order,
      terapis: pasien.terapis,
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
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box m="20px">
      <Header title="Tambah Appointment" />

      <Box
        onSubmit={handleAddFormSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
      >
        <Grid container spacing={2} maxWidth={1000}>
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
              name="order"
              label="order"
              type="text"
              required
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="terapis"
              label="terapis"
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
                    Order
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    Terapis
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    Tanggal
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold"}}
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
                      <EditableRowAppointment
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRowAppointment
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

export default FormAppointment;
