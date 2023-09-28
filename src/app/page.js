"use client";

import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "@/app/theme";
// import Calendar from "./components/calendar/calendar";

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
// import page from "./dashboard/page";
// import Dashboard from './pages/Dashboard'
// import DataPasien from './pages/DataPasien'
// import DataTerapis from './pages/DataTerapis'
// import Transaksi from './pages/Transaksi'
// import FormTransaksi from "./pages/FormTransaksi";
// import FormTerapis from "./pages/FormTerapis";
// import FormAppointment from "./pages/FormAppointment";
// import FormPasien from "./pages/FormPasien";

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
                <Route path="/appointment" Component={Appointment} />
                <Route
                  path="/appointment/formappointment"
                  Component={FormAppointment}
                />
                {/* </Route> */}
                <Route path="/DataPasien" Component={DataPasien} />
                <Route path="/DataTerapis" Component={DataTerapis} />
                <Route path="/Transaksi" Component={Transaksi} />
                <Route path="/calendar" Component={Calendar} />
                <Route path="/transaksi/FormTransaksi" Component={FormTransaksi} />
                <Route path="/dataterapis/FormTerapis" Component={FormTerapis} />
                {/* <Route path='/FormAppointment' Component={FormAppointment} /> */}
                <Route path="/datapasien/FormPasien" Component={FormPasien} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default Home;
