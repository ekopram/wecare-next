"use client";

import { useState } from "react";
import { Routes, Route, BrowserRouter, MemoryRouter } from "react-router-dom";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "@/app/theme";

import Appointment from "./appointment/page";
import Dashboard from "./dashboard/page";
import DataPasien from "./DataPasien/page";
import DataTerapis from "./DataTerapis/page";
import Transaksi from "./Transaksi/page";
import Calendar from "./calendar/page";
import FormAppointment from "./appointment/FormAppointment/page";
import FormPasien from "./DataPasien/FormPasien/page";
import FormTerapis from "./DataTerapis/FormTerapis/page";
import FormTransaksi from "./Transaksi/FormTransaksi/page";

function Home() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" Component={Dashboard} />
                <Route path="/appointment" Component={Appointment}>
                  <Route path="FormAppointment" Component={FormAppointment} />
                </Route>
                <Route path="/DataPasien" Component={DataPasien}>
                  <Route path="FormPasien" Component={FormPasien} />
                </Route>
                <Route path="/DataTerapis" Component={DataTerapis}>
                  <Route path="FormTerapis" Component={FormTerapis} />
                </Route>
                <Route path="/Transaksi" Component={Transaksi}>
                  <Route path="FormTransaksi" Component={FormTransaksi} />
                </Route>
                <Route path="/calendar" Component={Calendar} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default Home;
