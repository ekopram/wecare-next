import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import Header from '@/components/Header';
// import TableTransaksi from "../components/TableTransaksi";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { tokens } from "../theme";
import TableTransaksi from "@/components/TableTransaksi";
import { NavLink, useNavigate } from 'react-router-dom';

function Transaksi() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let navigate = useNavigate();
  return (
    <Box m="20px">
      <Header title="Transaksi" />
      <Box>
      <Button onClick={()=> {navigate("/transaksi/Formtransaksi")}}
        style={{
          backgroundColor: colors.blueAccent[700],
        }}
          sx={{
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <AddOutlinedIcon sx={{ mr: "10px" }} />
          Tambah Data
        </Button>
      </Box>
      <TableTransaksi />
    </Box>
  );
}

export default Transaksi;
