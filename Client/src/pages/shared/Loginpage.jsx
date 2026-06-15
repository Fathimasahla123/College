import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { studentLogin } from "../../services/studentServices";
import { adminLogin } from "../../services/adminServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { saveStudent } from "../../redux/features/studentSlice";
import { saveAdmin } from "../../redux/features/adminSlice";

const Loginpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
  try {
    const adminRes = await adminLogin(values);

    toast.success("Admin Login Successful");

    dispatch(saveAdmin(adminRes.data.adminExist));

    navigate("/admin");
  } catch (adminError) {
    try {
      const studentRes = await studentLogin(values);

      toast.success("Student Login Successful");

      dispatch(saveStudent(studentRes.data.studentExist));

      navigate("/");
    } catch (studentError) {
      toast.error("Invalid Email or Password");
    }
  }
};

  // const onSubmit = () => {
  //   studentLogin(values)
  //     .then((res) => {
  //       console.log(res);
  //       toast.success("Login successfull");
  //       dispatch(saveStudent(res.data.studentExist))
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error(error.response.data.error);
  //     });
  // };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4" onClick={onSubmit}>
                Login
              </button>
            </fieldset>

            <div className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="font-bold">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
