import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/student/Homepage";
import Studentlayout from "../layout/Studentlayout";
import Aboutpage from "../pages/student/Aboutpage";
import Departmentpage from "../pages/student/Departmentpage";
import Contactpage from "../pages/student/Contactpage";
import Loginpage from "../pages/shared/Loginpage";
import Signuppage from "../pages/student/Signuppage";

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
]);
