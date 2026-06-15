import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/student/Homepage";
import Studentlayout from "../layout/Studentlayout";
import Aboutpage from "../pages/student/Aboutpage";
import Departmentpage from "../pages/student/Departmentpage";
import Contactpage from "../pages/student/Contactpage";
import Loginpage from "../pages/shared/Loginpage";
import Signuppage from "../pages/student/Signuppage";
import CartPage from "../pages/CartPage";


import Adminlayout from "../layout/Adminlayout";
import Adminhome from "../pages/admin/Homepage";
import Adminsignup from "../pages/admin/Signuppage";
import Studentspage from "../pages/admin/Studentspage";
import Departmentspage from "../pages/admin/Departmentspage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Studentlayout />,
    errorElement:<h1>Error page</h1>,
    children: [
      {
        path: "",
        element: <Homepage/>,
      },
      {
        path: "about",
        element: <Aboutpage/>,
      },
      {
        path: "department",
        element: <Departmentpage/>,
      },
       {
        path: "cart",
        element: <CartPage/>,
      },
      {
        path: "contact",
        element: <Contactpage/>,
      },
        {
        path: "login",
        element: <Loginpage/>,
      },
        {
        path: "signup",
        element: <Signuppage/>,
      },
    ],
  },


  // {
  //   path: "/admin",
  //   element: <Adminlayout />,
  //   errorElement:<h1>Error page</h1>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Adminhome/>,
  //     },
  //       {
  //       path: "adminsignup",
  //       element: <Adminsignup/>,
  //     },
  //   ],
  // },

  {
  path: "/admin",
  element: <Adminlayout />,
  children: [
    {
      index: true,
      element: <Adminhome />,
    },
    {
  
       path: "students",
      element: <Studentspage />,
    },

    {
      path: "departments",
      element: <Departmentspage />,
    },
  ],
}
]);
