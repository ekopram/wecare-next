"use client"

import React from 'react';
// import Header from '../components/Header';
import { Box, Button, useTheme } from '@mui/material';
// import TableAppointment from '../components/TableAppointment';
import { tokens } from '../theme';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Header from '@/components/Header';
import TableAppointment from '@/components/TableAppointment';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';

function Appointment() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

// const router = useRouter();
  let navigate = useNavigate();
  return (
    <Box m="20px">
      <Header title="Appointment" />

      <Box>
        {/* <NavLink to="/appointment/formappointment">tambah</NavLink> */}
        <Button onClick={()=> {navigate("/appointment/formappointment")}}
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

      <TableAppointment />
    </Box>
  )
}

export default Appointment