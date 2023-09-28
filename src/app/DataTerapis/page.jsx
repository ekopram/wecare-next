import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import Header from '@/components/Header';
import TableTerapis from '@/components/TableTerapis';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { tokens } from '../theme';
import { NavLink, useNavigate } from 'react-router-dom';

function DataTerapis() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let navigate = useNavigate();
  return (
    <Box m="20px">
      <Header title="Data Terapis" />
      <Box>
      <Button onClick={()=> {navigate("/dataterapis/Formterapis")}}
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
          <PersonAddOutlinedIcon sx={{ mr: "10px" }} />
          Tambah Data
        </Button>
      </Box>
      <TableTerapis />
    </Box>
  )
}

export default DataTerapis