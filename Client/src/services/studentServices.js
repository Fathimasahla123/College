import axiosInstance from "../axios/axiosInstance"

export const listDepartment = ()=>{
   return axiosInstance.get("/department/listdepartment")
}

export const studentSignup = (data)=>{
   return axiosInstance.post("/student/register",data)
}

export const studentLogin = (data)=>{
   return axiosInstance.post("/student/login",data)
}

export const studentLogout = ()=>{
   return axiosInstance.post("/student/logout")
}

export const addToCart = (departmentId)=>{
   return axiosInstance.post(`/cart/addtocart/${departmentId}`)
}