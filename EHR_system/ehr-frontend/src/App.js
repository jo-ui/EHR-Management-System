import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./dashboards/Admin/Admin";
import Doctor from "./dashboards/Doctor/Doctor";
import Patient from "./dashboards/Patient/Patient";
import Receptionist from "./dashboards/Receptionist/Receptionist.component";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="receptionist/*" element={<Receptionist />} />
        <Route exact path="doctor/*" element={<Doctor />} />
        <Route exact path="admin/*" element={<Admin />} />
        <Route exact path="patient/*" element={<Patient />} />
      </Routes>
    </div>
  );
}

export default App;
