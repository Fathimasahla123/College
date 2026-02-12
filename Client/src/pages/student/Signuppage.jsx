import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { studentSignup } from "../../services/studentServices";
import { toast } from "react-toastify";

const Signuppage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();
  const onSubmit = () => {
    studentSignup(values)
      .then((res) => {
        console.log(res);
        toast.success("Signup successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "error");
        toast.error(error.response.data.error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold p-5">Sign Up now!</h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          {/* </div> */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => {
                    setValues({ ...values, [e.target.name]: e.target.value });
                  }}
                />
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
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  onChange={(e) => {
                    setValues({ ...values, [e.target.name]: e.target.value });
                  }}
                />
                {/* <div>
                <a className="link link-hover">Forgot password?</a>
              </div> */}
                <button className="btn btn-neutral mt-4" onClick={onSubmit}>
                  Sign Up
                </button>
              </fieldset>
              <div className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="font-bold">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
