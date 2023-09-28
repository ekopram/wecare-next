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
import EditableRowTransaksi from "@/components/EditableRowTransaksi";
import ReadOnlyRowTransaksi from "@/components/ReadOnlyRowTransaksi";
import { tokens } from "@/app/theme";

function createData(id ,name, order, nominal, ) {
    return {id, name, order, nominal,  };
  }
  
  const dataTerapis = [
    createData(1,'sari', 'pijat','200.000'),      
    createData(2,'api', 'pijat','150.000'),         
    createData(3,'suwarno', 'pijat','200.000'),  
    createData(4,'gulio', 'pijat','200.000'),     
    createData(5,'velop', 'pijat','200.000'),     
    createData(6,'adira', 'pijat','150.000'),     
    createData(7,'renata', 'pijat','200.000'),        
    createData(8,'gerio', 'pijat','200.000'),         
    createData(9,'sari', 'pijat','200.000'),      
    createData(10,'api', 'pijat','150.000'),         
    createData(11,'suwarno', 'pijat','200.000'),  
    createData(12,'gulio', 'pijat','200.000'),     
    createData(13,'velop', 'pijat','200.000'),     
    createData(14,'adira', 'pijat','150.000'),     
    createData(15,'renata', 'pijat','200.000'),        
    createData(16,'gerio', 'pijat','200.000'),   
  ];

function FormTransaksi() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [pasiens, setPasiens] = useState(dataTerapis);
  const [addFormData, setaddFormData] = useState({
    name: "",
    order: "",
    keahlian: "",
    nominal: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    order: "",
    keahlian: "",
    nominal: "",
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
      order: addFormData.order,
      keahlian: addFormData.keahlian,
      nominal: addFormData.nominal,
    };

    const newPasiens = [...pasiens, newPasien];
    setPasiens(newPasiens);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedPasien = {
      id: editPasienId,
      name: editFormData.name,
      order: editFormData.order,
      keahlian: editFormData.keahlian,
      nominal: editFormData.nominal,
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
      order: pasien.order,
      keahlian: pasien.keahlian,
      nominal: pasien.nominal,
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
      <Header title="Tambah Transaksi" />

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
              name="order"
              label="Order"
              type="text"
              required
              onChange={handleAddFormChange}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="nominal"
              label="Nominal"
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
                    Order
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    style={{backgroundColor: colors.primary[400] }}
                  >
                    Nominal
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
                      <EditableRowTransaksi
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRowTransaksi
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

export default FormTransaksi;
