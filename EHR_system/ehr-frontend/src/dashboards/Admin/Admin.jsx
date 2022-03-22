import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import AddPatient from "../../components/Patients/AddPatient/AddPatient";
import AdminSideBar from "../../components/sidebar/individuals/AdminSideBar";

const Admin = () => {
  return (
    <div className="flex text-xl">
      <AdminSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route path="patients/add_patient" element={<AddPatient />} />
        </Routes>
      </div>
    </div>
  );
};
export default Admin;
