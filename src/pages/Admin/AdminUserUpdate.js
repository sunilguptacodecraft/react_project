import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { updateUserProfile } from "../../services/user";
import Banner from "../../components/Layout/Banner";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useErrorHandler } from "../../hooks";

const updateUserSchema = Yup.object().shape({
  firstName: Yup.string().min(3, "Minimum 3 characters are required!").max(50, "Maximum 50 characters allowed!"),
  middleName: Yup.string().max(50, "Maximum 50 characters are allowed!"),
  lastName: Yup.string().min(3, "Minimum 3 characters are required!").max(50, "Maximum 50 characters allowed!"),
  contactNo: Yup.string().max(20, "Maximum 20 characters allowed!"),
});

const AdminUserUpdate = () => {
  const [msg, setMsg] = useState("");
  const  { userId,firstName,middleName,lastName,contactNo,email } = useSelector((state) => state.userDetail.userDetails);
  const {verifyErrorMsg} = useErrorHandler()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
        userId,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      contactNo,
    },
    validationSchema: updateUserSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
       await updateUserProfile(values);
        setMsg("Profile Updated!");
      } catch (error) {
        verifyErrorMsg(error)
      } finally {
        setTimeout(() => {
          setMsg("");
          navigate(-1)
        }, 2000);

      }
    },
  });


  return (
    <>
      <Banner bannerTitle="Edit Profile" classes="changepassword"/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bg-data">
                <div className="order-wraprs">
                  <div className="order-s">
                    <h2 className="order-txt text-center">Edit User Profile</h2>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="row">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="firstname">First Name</label>
                          <input
                            {...formik.getFieldProps("firstName")}
                            type="text"
                            name="firstName"
                            className={`form-control mt-2 ${
                              formik.errors.firstName &&
                              formik.touched.firstName
                                ? "mb-0"
                                : " mb-2"
                            }`}
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            disabled={false}
                            value={formik.values.firstName}
                          />
                          {formik.touched.firstName &&
                            formik.errors.firstName && (
                              <ErrorMessage title={formik.errors.firstName} />
                            )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="middlename">Middle Name</label>
                          <input
                            {...formik.getFieldProps("middleName")}
                            type="text"
                            name="middleName"
                            className={`form-control mt-2 ${
                              formik.errors.middleName &&
                              formik.touched.middleName
                                ? "mb-0"
                                : " mb-2"
                            }`}
                            id="middlename"
                            aria-describedby="middlenameHelp"
                            disabled={false}
                            value={formik.values.middleName}
                          />
                          {formik.touched.middleName &&
                            formik.errors.middleName && (
                              <ErrorMessage title={formik.errors.middleName} />
                            )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="lastname">Last Name</label>
                          <input
                            {...formik.getFieldProps("lastName")}
                            type="text"
                            name="lastName"
                            className={`form-control mt-2 ${
                              formik.errors.lastName && formik.touched.lastName
                                ? "mb-0"
                                : " mb-2"
                            }`}
                            id="lastname"
                            aria-describedby="lastnameHelp"
                            disabled={false}
                            value={formik.values.lastName}
                          />
                          {formik.touched.lastName &&
                            formik.errors.lastName && (
                              <ErrorMessage title={formik.errors.lastName} />
                            )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="email">Email</label>
                          <input
                            // {...formik.getFieldProps("email")}
                            type="email"
                            name="email"
                            className={`form-control mt-2 ${
                            " mb-2"
                            }`}
                            id="email"
                            aria-describedby="emailHelp"
                            defaultValue={email}
                            disabled={true}
                          />
                          {/* {formik.touched.email && formik.errors.email && (
                            <ErrorMessage title={formik.errors.email} />
                          )} */}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="contactno">Contact No.</label>
                          <input
                            {...formik.getFieldProps("contactNo")}
                            type="text"
                            name="contactNo"
                            className={`form-control mt-2 ${
                              formik.errors.contactNo &&
                              formik.touched.contactNo
                                ? "mb-0"
                                : " mb-2"
                            }`}
                            id="contactno"
                            aria-describedby="contactnoHelp"
                            disabled={false}
                            value={formik.values.contactNo}
                          />
                          {formik.touched.contactNo &&
                            formik.errors.contactNo && (
                              <ErrorMessage title={formik.errors.contactNo} />
                            )}
                        </div>
                      </div>
                    
                     
                      <button
                        type="submit"
                        className="btn btn-primary w-100 btn-one my-3 "
                        disabled={formik.isSubmitting || !formik.isValid}
                      >
                        Update
                      </button>
                      {msg.length > 0 && (
                        <h5 className="my-3 text-primary text-center">{msg}</h5>
                      )}
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

export default AdminUserUpdate;
