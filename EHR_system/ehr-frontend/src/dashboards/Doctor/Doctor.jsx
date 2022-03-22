import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import AddPatient from "../../components/Patients/AddPatient/AddPatient";
import DoctorSideBar from "../../components/sidebar/individuals/DoctorSideBar";

const Doctor = () => {
  return (
    <div className="flex text-xl">
      <DoctorSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route path="patients/add_patient" element={<AddPatient />} />
        </Routes>
      </div>
    </div>
  );
};
export default Doctor;
