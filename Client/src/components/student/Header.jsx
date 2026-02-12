import React from "react";
import DarkMode from "../shared/DarkMode";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { studentLogout } from "../../services/studentServices";
import { persistor } from "../../redux/store";
import { claerStudent } from "../../redux/features/studentSlice";

const Header = () => {
  const studentData = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      studentLogout().then((res) => {
        persistor.purge();
        dispatch(claerStudent());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li onClick={() => navigate("/")}>
              <a>Home</a>
            </li>
            <li onClick={() => navigate("/about")}>
              <a>About</a>
            </li>
            <li onClick={() => navigate("/department")}>
              <a>Departments</a>
            </li>
            <li onClick={() => navigate("/contact")}>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">College</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li onClick={() => navigate("/")}>
            <a>Home</a>
          </li>
          <li onClick={() => navigate("/about")}>
            <a>About</a>
          </li>
          <li onClick={() => navigate("/department")}>
            <a>Departments</a>
          </li>
          <li onClick={() => navigate("/contact")}>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-5">
        <DarkMode />
        {studentData.student && Object.keys(studentData.student).length > 0 ? (
          <div>
            <span> {studentData.student.name}</span>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <a className="btn" onClick={() => navigate("/login")}>
            Join Us
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
