import React, { useState } from "react";
import {  updateUserProfile } from "../services/user";
import { useFormik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useErrorHandler } from "../hooks";
import Banner from "../components/Layout/Banner";

const updateUserSchema = Yup.object().shape({
  firstName: Yup.string().min(3, "Minimum 3 characters are required!").max(50, "Maximum 50 characters allowed!"),
  middleName: Yup.string().min(3, "Minimum 3 characters are required!").max(50, "Maximum 50 characters allowed!"),
  lastName: Yup.string().min(3, "Minimum 3 characters are required!").max(50, "Maximum 50 characters allowed!"),
  contactNo: Yup.string().min(10, "Minimum 10 characters are required!").max(20, "Maximum 20 characters allowed!"),
});

const UserProfile = () => {
  const [msg, setMsg] = useState("");
  const { user } = useSelector((state) => state.auth);
  let { userID, userName, email, contactNo } = user;
  let name = userName?.split(" ")
  const {verifyErrorMsg} = useErrorHandler()
  const formik = useFormik({
    initialValues: {
      userID,
      firstName: name[0]||"",
      middleName: name.length === 3 ? name[1] : " ",
      lastName: name.length === 3 ? name[2] : name[1],
      contactNo,
      email,
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
        }, 5000);
      }
    },
  });


  return (
    <>
      <Banner bannerTitle="Profile" classes="changepassword"/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bg-data">
                <div className="order-wraprs">
                  <div className="order-s">
                    <h2 className="order-txt">Profile</h2>
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
                            vallue={formik.values.middleName}
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
                      <div className="col-lg-12">
                        <div className="form-group custom-lab">
                          <label htmlFor="email">Email</label>
                          <input
                            {...formik.getFieldProps("email")}
                            type="email"
                            name="email"
                            className={`form-control mt-2 ${
                              formik.errors.email && formik.touched.email
                                ? "mb-0"
                                : " mb-2"
                            }`}
                            id="email"
                            aria-describedby="emailHelp"
                            value={formik.values.email}
                            disabled={true}
                          />
                          {formik.touched.email && formik.errors.email && (
                            <ErrorMessage title={formik.errors.email} />
                          )}
                        </div>
                      </div>
                      {msg.length > 0 && (
                        <h5 className="my-3 text-primary text-center">{msg}</h5>
                      )}
                      <button
                        type="submit"
                        className="btn btn-primary w-100\ btn-one my-3 "
                        disabled={formik.isSubmitting || !formik.isValid}
                      >
                        Change Profile Info <span></span>
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

export default UserProfile;
