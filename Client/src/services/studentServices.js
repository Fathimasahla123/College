import axiosInstance from "../axios/axiosInstance"

export const listDepartment = ()=>{
   return axiosInstance.get("/department/listdepartment")
}