import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { setAuth } from "../store/auth-slice";
import { login } from "../services/login";
import { useDispatch } from 'react-redux';
import ErrorMessage from "./ErrorMessage";
import * as Yup from "yup";
import loginImg from "../assets/images/shape/login.png";
import facebook from "../assets/images/shape/facebook.png";
import google from "../assets/images/shape/google.png";
import { initAxios } from "../helper-functions/initAxios";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Wrong email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};


const Login = () => {
  const [credentialsStatus, setCredentialsStatus] = useState("");
  const lastVisitedPath=localStorage.getItem('lastVisitedPath')
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setCredentialsStatus("");
        const response = await login(values);
        dispatch(setAuth({ isAuthenticated:true, user:response.data }));
        localStorage.setItem("auth", response.data.token);
        if(lastVisitedPath) {
          navigate(lastVisitedPath)
        }
        else{
          navigate("/preferred-profiles");
        }
      } catch (error) {
        let msg = error.response.data.message
        if(msg === "Invalid Email Or Password") setCredentialsStatus(msg)
      }
    },
  });


  return (
    <>
      <section className="login-pages">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login-img">
                <img src={loginImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 custom-p-l">
              <div className="login-text">
                <h1 className="main-text">Login</h1>
              </div>
              <div className="input-type">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control mt-2 ${
                        formik.errors.email && formik.touched.email
                          ? "mb-0"
                          : " mb-2"
                      }`}
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="mishainfotech@gmail.com"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <ErrorMessage title={formik.errors.email} />
                    )}
                  </div>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="exampleInputPassword1">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className={`form-control mt-2 ${
                        formik.errors.password && formik.touched.password
                          ? "mb-0"
                          : "mb-2"
                      }`}
                      id="exampleInputPassword1"
                      placeholder="Password"
                      {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <ErrorMessage title={formik.errors.password} />
                    )}
                    {credentialsStatus.length > 0 && (
                      <ErrorMessage title={credentialsStatus} />
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-one my-3 "
                    // onClick={handleLogin}
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    Login
                    <span></span>
                  </button>
                </form>
              </div>

              <div className="other-sign">
                <p className="text-center w-100">
                  Don't have an account?
                  <Link className="signuplink" to="/signup">
                    Sign Up
                  </Link>
                </p>
                <p className="text-center w-100" htmlFor="email">
                  or sign in with
                </p>
                <div className="login-act">
                  <div className="google-act">
                    <span>
                      <img src={facebook} alt="" />
                    </span>
                  </div>
                  <div className="facebook-act">
                    <span>
                      <img src={google} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
