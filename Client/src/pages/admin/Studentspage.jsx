import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

const Studentspage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      const res = await axiosInstance.get("/student/liststudents");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-blue-950">
        Students
      </h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-blue-900">Name</th>
              <th className="p-4 text-left text-blue-900">Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student._id}
                className="border-t"
              >
                <td className="p-4 text-gray-600">
                  {student.name}
                </td>

                <td className="p-4 text-gray-600">
                  {student.email}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Studentspage;