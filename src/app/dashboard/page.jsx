import React from "react";
import { Box, Button, Grid, Paper, useTheme } from "@mui/material";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from '@/components/Header';
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
// import StatBox from "../components/Statbox";
import TransferWithinAStationOutlinedIcon from "@mui/icons-material/TransferWithinAStationOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
// import Revenue from "../components/Revenue";
// import RecentTransaction from "../components/RecentTransaction";
import StatBox from "@/components/Statbox";
import Revenue from "@/components/Revenue";
import RecentTransaction from "@/components/RecentTransaction";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const topCardInfo = [
    {
      id: 1,
      name: "Appointment",
      value: 12.361,
      increase: "+14,5%",
      bgColors: colors.whiteAccent[200],
      icon: (
        <EditCalendarOutlinedIcon
          sx={{
            color: colors.whiteAccent[500],
            fontSize: "35px",
            backgroundColor: colors.greenAccent[100],
            padding: "5px",
            borderRadius: "5px",
          }}
        />
      ),
    },

    {
      id: 2,
      name: "Total Transaksi",
      value: 1.361,
      increase: "+30%",
      bgColors: colors.whiteAccent[300],
      icon: (
        <CompareArrowsOutlinedIcon
          sx={{
            color: colors.whiteAccent[600],
            fontSize: "35px",
            backgroundColor: colors.greenAccent[200],
            padding: "5px",
            borderRadius: "5px",
          }}
        />
      ),
    },

    {
      id: 3,
      name: "Total Pasien",
      value: 1.361,
      increase: "+7,5%",
      bgColors: colors.whiteAccent[400],
      icon: (
        <TransferWithinAStationOutlinedIcon
          sx={{
            color: colors.whiteAccent[700],
            fontSize: "35px",
            backgroundColor: colors.greenAccent[300],
            padding: "5px",
            borderRadius: "5px",
          }}
        />
      ),
    },

    {
      id: 4,
      name: "Total Terapis",
      value: 196,
      increase: "+15%",
      bgColors: colors.whiteAccent[450],
      icon: (
        <Diversity3OutlinedIcon
          sx={{
            color: colors.whiteAccent[750],
            fontSize: "35px",
            backgroundColor: colors.greenAccent[350],
            padding: "5px",
            borderRadius: "5px",
          }}
        />
      ),
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Grid container spacing="20px">
        {topCardInfo.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={3} marginBottom={5}>
            <Paper elevation={3}>
              <Box
                height={100}
                borderRadius={1}
                gridColumn="span 3"
                backgroundColor={card.bgColors}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title={card.value}
                  subtitle={card.name}
                  increase={card.increase}
                  icon={card.icon}
                />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box>
            <h2>Revenue</h2>
            <Revenue />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <h2>Transaksi Terakhir</h2>
            <RecentTransaction />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
