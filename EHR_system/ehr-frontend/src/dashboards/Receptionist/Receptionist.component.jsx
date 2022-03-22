import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
// import AddPatient from "../../components/Patients/AddPatient/AddPatient";
import PatientRegistration from "../../components/Patients/AddPatient/PatientRegistration";
import PatientList from "../../components/Patients/Patient List/PatientList";
import ReceptionistSideBar from "../../components/sidebar/individuals/ReceptionistSideBar";

const Receptionist = () => {
  return (
    <div className="flex text-xl">
      <ReceptionistSideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Routes>
          <Route
            path="patients/add_patient"
            element={<PatientRegistration />}
          />
          <Route path="patients/lists" element={<PatientList />} />
        </Routes>
      </div>
    </div>
  );
};
export default Receptionist;
