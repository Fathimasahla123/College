import React, { useEffect, useState } from "react";
import Cards from "../../components/student/Cards";
import axiosInstance from "../../axios/axiosInstance";
import { listDepartment } from "../../services/studentServices";

const Departmentpage = () => {
  const [department, setDepartment] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    listDepartment()
      .then((res) => {
        console.log(res);
        setDepartment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const filteredDepartments = department.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className=" flex justify-content-center p-4">
        <label htmlFor="search" className="form-label">
          Search Your Department:
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
        {filteredDepartments.map((dept, i) => (
          <Cards key={i} department={dept} />
        ))}
      </div>
    </>
  );
};

export default Departmentpage;
