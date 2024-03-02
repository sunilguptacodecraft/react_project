import React, { useState } from "react";
import Banner from "../../components/Layout/Banner";
import ErrorMessage from "../../components/ErrorMessage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useErrorHandler } from "../../hooks";
import { changePasswordByAdmin } from "../../services/Admin/user-management";
import { useNavigate } from "react-router";

const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, "Minimum 6 characters are required!")
    .max(50, "Maximum 50 characters are allowed!")
    .required("New Password is required")
    .trim(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const AdminChangePassword = () => {
     const [msg, setMsg] = useState("")
  const { userId, email } = useSelector((state) => {
    return state.userDetail.changePasswordDetail;
  });
  const { verifyErrorMsg } = useErrorHandler();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      try {
        let res=await changePasswordByAdmin({
          userID: userId,
          newPassword: values.newPassword,
        });

        setMsg(res.data.updateMessage);
      } catch (error) {
        verifyErrorMsg(error);
      } finally {
        setTimeout(() => {
          setMsg("");
          navigate(-1)
        }, 2000);
        formik.resetForm();
      }
    },
  });
  
const submitHandler =()=>{
  formik.handleSubmit()
}
  return (
    <>
      <Banner bannerTitle="Change Password" classes="changepassword" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bg-data">
                <div className="order-wraprs">
                  <div className="order-s">
                    <h2 className="order-txt">Change Your Password</h2>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="col-lg-12">
                          <div className="form-group custom-lab">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              className="form-control my-3"
                              id="email"
                              placeholder="anjani@gmail.com"
                              defaultValue={email} // Use Formik's values for value
                              disabled
                            />
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
                                <ErrorMessage
                                  title={formik.errors.newPassword}
                                />
                              )}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group custom-lab">
                            <label htmlFor="confirmpassword">
                              Confirm Password
                            </label>
                            <input
                              type="Password"
                              id="confirmpassword"
                              aria-describedby="confirmpasswordHelp"
                              placeholder="Confirm Password"
                              className={`form-control my-3 ${
                                formik.errors.confirmPassword &&
                                formik.touched.confirmPassword
                                  ? "mb-0"
                                  : " mb-2"
                              }`}
                              {...formik.getFieldProps("confirmPassword")}
                            />

                            {formik.touched.confirmPassword &&
                              formik.errors.confirmPassword && (
                                <ErrorMessage
                                  title={formik.errors.confirmPassword}
                                />
                              )}
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6"></div>
                  </div>
                  <div className="row mt-4">
                 
                    <div className="col-lg-6 ">
                    
                      <div className="add-to-favorite">
                        <button
                          type="button"
                          className="btn btn-primary w-100 btn-one search-text"
                          onClick={submitHandler}
                        >
                          Update
                        
                        </button>
                        {msg.length > 0 && (
                        <h5 className="my-3 text-primary text-center">{msg}</h5>)}
                      </div>
                    </div>
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

export default AdminChangePassword;
