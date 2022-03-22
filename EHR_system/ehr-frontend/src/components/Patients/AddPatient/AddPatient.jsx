import React from "react";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddPatient = () => {
  const current = new Date().toISOString().split("T")[0];

  return (
    <div className="add-patient flex flex-col p-0 my-6 mx-16 bg-white border-gray-700 rounded-md shadow">
      <h3 className="add-patient-header bg-blue-300 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
        Add New Patient
      </h3>
      <form className="ui form px-6 py-2">
        <div className="three fields">
          <div className="field">
            <label>First name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="field">
            <label>Middle name</label>
            <input type="text" placeholder="Middle Name" />
          </div>
          <div className="field">
            <label>Last name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="field">
            <label htmlFor="">Age</label>
            <input type="number" placeholder="Age" />
          </div>
        </div>

        <div className="three fields">
          <div className="field">
            <div className="field">
              <label htmlFor="">Birth Date</label>
              <input type="date" placeholder="Hospital ID" max={current} />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="ui selection dropdown ">
              <i className="dropdown icon"></i>
              <div className="text">Gender</div>
              <div className="menu active">
                <div className="item" data-value="1">
                  Male
                </div>
                <div className="item" data-value="0">
                  Female
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label>Blood Group</label>
            <div className="ui selection dropdown active">
              <input type="hidden" name="blood" />
              <i className="dropdown active icon"></i>
              <div className="default active text">Blood</div>
              <div className="menu">
                <div className="item" data-value="1">
                  A
                </div>
                <div className="item" data-value="0">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label htmlFor="">Patient ID</label>
            <input type="text" placeholder="ID Number" />
          </div>
          <div className="field">
            <label htmlFor="">Hospital ID</label>
            <input type="text" placeholder="Hospital ID" />
          </div>
        </div>
        <div className="w-full flex justify-center p-6">
          <button className="border rounded w-32 h-10 bg-blue-400 hover:bg-blue-600 font-semibold text-xl text-white flex items-center justify-center self-center">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPatient;
