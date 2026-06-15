import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import { Pencil, Trash2 } from "lucide-react";

const Departmentspage = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    try {
      const res = await axiosInstance.get("/department/listdepartment");
      setDepartments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDepartment = async (id) => {
    try {
      await axiosInstance.delete(
        `/department/departmentdetails/${id}`
      );

      getDepartments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold text-blue-950">
          Departments
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Add Department
        </button>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {departments.map((department) => (
          <div
            key={department._id}
            className="bg-white rounded-xl shadow p-4"
          >
            <img
              src={department.image}
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="font-bold text-xl mt-4 text-blue-900">
              {department.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {department.description}
            </p>

            <div className="flex justify-end gap-3 mt-4">

              <button className="text-blue-600">
                <Pencil />
              </button>

              <button
                className="text-red-600"
                onClick={() =>
                  deleteDepartment(department._id)
                }
              >
                <Trash2 />
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Departmentspage;