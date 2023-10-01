"use client";

import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Header from "@/components/Header";
import TableAppointment from "@/components/TableAppointment";
import Link from "next/link";

function Appointment() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Appointment" />

      <Box>
        <Link href="/appointment/FormAppointment">
          <Button
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
        </Link>
      </Box>

      <TableAppointment />
    </Box>
  );
}

export default Appointment;
