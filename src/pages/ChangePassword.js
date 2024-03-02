import React, { useState } from "react";
import { changePassword } from "../services/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import { useErrorHandler } from "../hooks";
import Banner from "../components/Layout/Banner";

const changePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .required("Current Password is required")
      .trim(),
    newPassword: Yup.string()
    .min(6, "Minimum 6 characters are required!")
    .max(50, "Maximum 50 characters are allowed!")
      .required("New Password is required")
      .trim(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  
const ChangePassword = () => {
    const [msg, setMsg] = useState("")
    const { user } = useSelector((state) => state.auth);
    let { userID } = user;
    const {verifyErrorMsg} = useErrorHandler()

    const formik = useFormik({
        initialValues: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        },
        validationSchema: changePasswordSchema,
        onSubmit: async(values) => {
          try {
            
            let res = await changePassword({
                userID,
                password: values.newPassword
              });
              setMsg("Password Changed!");
          } catch (error) {
            verifyErrorMsg(error)

          } finally {
            setTimeout(() => {
              setMsg("");
              formik.resetForm()
            }, 5000);
          }
        },
      });
    
  return (
    <>
   
      <Banner bannerTitle="Change Password" classes="changepassword"/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bg-data">
                <div className="order-wraprs">
                  <div className="order-s">
                    <h2 className="order-txt">Change Your Password</h2>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="currentpassword">Current Password</label>
                          <input
                            type="Password"
                            id="currentpassword"
                            aria-describedby="currentpasswordHelp"
                            placeholder="Current Password"
                            className={`form-control my-3 ${
                                formik.errors.currentPassword &&
                                formik.touched.currentPassword
                                  ? "mb-0"
                                  : " mb-2"
                              }`}
                      
                            {...formik.getFieldProps("currentPassword")}
                          />
                        
                          {formik.touched.currentPassword &&
                            formik.errors.currentPassword && (
                              <ErrorMessage title={formik.errors.currentPassword} />
                            )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="newpassword">New Password</label>
                          <input
                            type="Password"
                            id="newpassword"
                            aria-describedby="newpasswordHelp"
                            placeholder="New Password"
                            className={`form-control my-3 ${
                                formik.errors.newPassword &&
                                formik.touched.newPassword
                                  ? "mb-0"
                                  : " mb-2"
                              }`}
                      
                            {...formik.getFieldProps("newPassword")}
                          />
                               {formik.touched.newPassword &&
                            formik.errors.newPassword && (
                              <ErrorMessage title={formik.errors.newPassword} />
                            )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="confirmpassword">Confirm Password</label>
                          <input
                            type="Password"
                            className="form-control my-3"
                            id="confirmpassword"
                            aria-describedby="confirmpasswordHelp"
                            placeholder="Confirm Password"
                            {...formik.getFieldProps("confirmPassword")}
                          />
                               {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                              <ErrorMessage title={formik.errors.confirmPassword} />
                            )}
                        </div>
                        {msg.length > 0 && (
                        <h5 className="my-3 text-primary text-center">{msg}</h5>
                      )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 btn-one my-3 "
                      >
                        Submit <span></span>
                      </button>
                    </form>
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

export default ChangePassword;
