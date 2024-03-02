import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../services/user";
import login from "../assets/images/shape/login.png";
import ErrorMessage from "./ErrorMessage";

const emailRegex = /^(?=.{10,200}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Minimum 3 characters are required!")
    .max(50, "Maximum 50 characters are allowed!")
    .required("First Name is required"),
  middleName: Yup.string().max(50, "Maximum 50 characters are allowed!"),
  lastName: Yup.string()
    .min(3, "Minimum 3 characters are required!")
    .max(50, "Maximum 50 characters are allowed!")
    .required("Last Name is required!"),
  contactNo: Yup.string().max(20, "Maximum 20 characters are allowed!"),
  password: Yup.string()
    .min(6, "Minimum 6 characters are required!")
    .max(50, "Maximum 50 characters are allowed!")
    .required("Password is required")
    .trim(),
  email: Yup.string().email("Invalid Email Format!").required("Email is required").matches(emailRegex, 'Invalid Email Format!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});


const Signup = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const handleContactChange = (e) => {
    let input = e.target.value;
    let cleanedInput = input.replace(/\D/g, "");
  
    let formattedValue = "";
  
    if (cleanedInput.length >= 3) {
      formattedValue += `(${cleanedInput.slice(0, 3)})`;
  
      if (cleanedInput.length > 3) {
        formattedValue += `-${cleanedInput.slice(3, 6)}`;
      }
  
      if (cleanedInput.length > 6) {
        formattedValue += `-${cleanedInput.slice(6,20)}`;
      }
      
    } else {
      formattedValue = cleanedInput;
    }
  
    setContact(formattedValue);
    formik.setFieldValue("contactNo", formattedValue);
  };
  
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      contactNo: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registrationSchema,
    onSubmit: async(values) => {
      setEmailStatus("");
      try {
        const userData = {
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
          contactNo: values.contactNo,
          email: values.email,
          password: values.password,
        };
        let res = await register(userData);
        if(res.data==="Email Already Exists"){
          setEmailStatus(res.data);
          return
        }else{

          navigate("/login");
        }
      } catch (error) {
        console.error("Error creating user:", error);
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
                <img src={login} alt="" />
              </div>
            </div>
            <div className="col-lg-6 custom-p-l">
              <div className="login-text">
                <h1 className="main-text">Sign Up</h1>
              </div>
              <div className="input-type">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="firstname">
                      First Name
                    </label>

                    <input
                      name="firstName"
                      type="text"
                      className={`form-control mt-2 ${
                        formik.errors.firstName && formik.touched.firstName
                          ? "mb-0"
                          : " mb-2"
                      }`}
                      id="firstname"
                      aria-describedby="firstnameHelp"
                      placeholder="First Name"
                      {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <ErrorMessage title={formik.errors.firstName} />
                    )}
                  </div>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="middlename">
                      Middle Name
                    </label>
                    <input
                      name="middleName"
                      type="text"
                      className={`form-control mt-2 ${
                        formik.errors.middleName && formik.touched.middleName
                          ? "mb-0"
                          : " mb-2"
                      }`}
                      id="middlename"
                      aria-describedby="middlenameHelp"
                      placeholder="Middle Name"
                      {...formik.getFieldProps("middleName")}
                    />
                    {formik.touched.middleName && formik.errors.middleName && (
                      <ErrorMessage title={formik.errors.middleName} />
                    )}
                  </div>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="lastname">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      className={`form-control mt-2 ${
                        formik.errors.lastName && formik.touched.lastName
                          ? "mb-0"
                          : " mb-2"
                      }`}
                      id="lastname"
                      aria-describedby="lastnameHelp"
                      placeholder="Last Name"
                      {...formik.getFieldProps("lastName")}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <ErrorMessage title={formik.errors.lastName} />
                    )}
                  </div>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="contactno">
                      Contact No.
                    </label>
                    <input
                      name="contactNo"
                      type="text"
                      className={`form-control mt-2 ${
                        formik.errors.contactNo && formik.touched.contactNo
                          ? "mb-0"
                          : " mb-2"
                      }`}
                      id="contactno"
                      aria-describedby="contactnoHelp"
                      placeholder="(123)-456-7890"
                      value={contact}
                      onChange={handleContactChange}
                      // {...formik.getFieldProps("contactNo")}
                    />
                    {formik.touched.contactNo && formik.errors.contactNo && (
                      <ErrorMessage title={formik.errors .contactNo} />
                    )}
                  </div>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
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
                    {emailStatus.length > 0 && (
                      <ErrorMessage title={emailStatus} />
                    )}
                  </div>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="userpassword">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className={`form-control mt-2 ${
                        formik.errors.password && formik.touched.password
                          ? "mb-0"
                          : " mb-2"
                      }`}
                      id="userpassword"
                      placeholder="Password"
                      {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <ErrorMessage title={formik.errors.password} />
                    )}
                  </div>
                  <div className="form-group custom-lab">
                    <label className="mt-1" htmlFor="confirmpassword">
                      Confirm Password
                    </label>
                    <input
                      name="confirmPassword"
                      type="password"
                      className={`form-control mt-2 ${
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
                          ? "mb-0"
                          : " mb-2"
                      }`}
                      id="confirmpassword"
                      placeholder="Password"
                      {...formik.getFieldProps("confirmPassword")}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <ErrorMessage title={formik.errors.confirmPassword} />
                      )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-one my-3 "
                    disabled={formik.isSubmitting || !formik.isValid}
                    // onClick={handleRegister}
                  >
                    Sign Up <span></span>
                  </button>
             
                </form>
              </div>
              <div className="other-sign">
                <p className="text-center w-100">
                  Have an account?
                  <Link to="/login" className="signuplink">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
