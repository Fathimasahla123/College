import axiosInstance from "../axios/axiosInstance"

export const adminSignup = (data)=>{
   return axiosInstance.post("/admin/register",data)
}

export const adminLogin = (data)=>{
   return axiosInstance.post("/admin/login",data)
}

export const adminLogout = ()=>{
   return axiosInstance.post("/admin/logout")
}
export const listDepartment = ()=>{
   return axiosInstance.get("/department/listdepartment")
}