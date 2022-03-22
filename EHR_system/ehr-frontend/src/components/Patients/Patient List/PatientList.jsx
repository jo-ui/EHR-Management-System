import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/patient-list");
      setData(res.data[0]);
    };
    fetchdata();
  }, []);

  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="add-patient flex flex-col col-span-3 p-0 my-6 mx-12 bg-white border-gray-700 rounded-md shadow">
        <h3 className="add-patient-header bg-blue-300 h-12 rounded-tr-md flex p-4 items-center rounded-tl-md">
          List of patients
        </h3>
        <div>
          {data !== null && data instanceof Array
            ? data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-6 items-center gap-4 px-10"
                  >
                    <span className="">{item.id}</span>
                    <span>{item.patient_id}</span>
                    <span>{item.name}</span>
                    <span className="col-span-2">{item.email}</span>
                    <div className="flex">
                      <button className="border rounded w-16 h-9 bg-yellow-300">
                        Edit
                      </button>
                      <button className="border rounded w-24 h-9 bg-red-300">
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="flex flex-1 px-4 my-10">patient detail</div>
    </div>
  );
};

export default PatientList;
