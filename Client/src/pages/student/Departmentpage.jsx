import React, { useEffect, useState } from "react";
import Cards from "../../components/student/Cards";
import axiosInstance from "../../axios/axiosInstance";
import { listDepartment } from "../../services/studentServices";

const Departmentpage = () => {
  const [department,setDepartment] = useState([])

  useEffect(() => {
    listDepartment().then((res)=>{
      console.log(res);
      setDepartment(res.data)
    }).catch((err)=>{
      console.log(err);
    });
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
      {
        department && department.map((department,i)=>(
          <Cards key={i}/>
        ))
      }
      
     
    </div>
  );
};

export default Departmentpage;
