// import React from 'react'
// import Header from '../components/admin/Header'
// import { Outlet } from 'react-router-dom'
// import Footer from '../components/admin/Footer'

// const Adminlayout = () => {
//   return (
//     <div className='flex flex-col min-h-screen'>
//         <Header/>
//          <div className='grow p-3'>
//           <Outlet/>
//           </div>
//          <Footer/>
//     </div>
//   )
// }

// export default Adminlayout


import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  GraduationCap,
  LogOut,
} from "lucide-react";

const Adminlayout = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin",
    },
    {
      name: "Students",
      icon: <Users size={20} />,
      path: "/admin/students",
    },
    {
      name: "Departments",
      icon: <Building2 size={20} />,
      path: "/admin/departments",
    },
    {
      name: "Faculty",
      icon: <GraduationCap size={20} />,
      path: "/admin/faculty",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-72 bg-white shadow-lg flex flex-col">

        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-blue-900">
            Admin Panel
          </h1>

          <p className="text-gray-500">
            College Website
          </p>
        </div>

        <div className="flex-1 p-4">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition text-blue-300 ${
                location.pathname === item.path
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="p-4 border-t">
          <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 hover:bg-gray-100">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
};

export default Adminlayout;