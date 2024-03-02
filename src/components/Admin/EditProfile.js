import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  editProfileImage,
  getProfileDetail,
} from "../../services/Admin/edit-profile";
import * as Yup from "yup";
import ProfileDetailForm from "../Forms/ProfileDetailForm";
import profileImage from "../../assets/images/shape/BlankProfile.png";
import { useSelector } from "react-redux";
import { useEditProfile, useAddProfile } from "../../hooks";
import AddVisaInfo from "./AddVisaInfo";
import { useParams } from "react-router-dom";

const editProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Minimum 3 characters are required!")
    .max(50, "Maximum 50 characters allowed!")
    .required("First Name is required!"),
  middleName: Yup.string().max(50, "Maximum 50 characters allowed!"),
  lastName: Yup.string()
    .min(3, "Minimum 3 characters are required!")
    .max(50, "Maximum 50 characters allowed!")
    .required("Last Name is required!"),
  classificationId: Yup.string().required("Class is required!"),
  countryId: Yup.string().required("Country is required!"),
  profileCategoryId: Yup.string().required("Category is required!"),
  gender: Yup.string().required("Gender is required!"),
});

const EditProfile = () => {
  const {id}=useParams()
  const { user } = useSelector((state) => state.auth);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showVisaInfo, setShowVisaInfo] = useState(false);
  const { isLoading, editProfileHandler, setIsLoading, msg, setMsg } =
    useEditProfile();
  const { uploadProfileImageHandler } = useAddProfile();

  const handleAddVisaInfo = () => {
    setShowVisaInfo(!showVisaInfo);
  };

  const getImageHandler = async () => {
    const res = await editProfileImage(id);
    let imageUrl;
    setSelectedImage(imageUrl);
    if (selectedImage instanceof File || selectedImage instanceof Blob) {
      imageUrl = URL.createObjectURL(selectedImage);
    }
  };
  const getProfileDetailHandler = async () => {
    console.log(id)
    const res = await getProfileDetail(id);
    let name = res.data.profileName?.split(" ");

    formik.setValues({
      userId: user.userID,
      profileId:id,
      firstName: name[0] || "",
      middleName: name.length === 3 ? name[1] : " ",
      lastName: name.length === 3 ? name[2] : "demo Name",
      classificationId: res.data.classificationId || "",
      countryId: res.data.countryId || "",
      profileCategoryId: res.data.profileCategoryId || "",
      actualPrice: res.data.actualPrice || "",
      discountPercentage: res.data.discountPercentage || "",
      gender: res.data.gender || "",
    });
  };
  useEffect(() => {
    getImageHandler();
    getProfileDetailHandler();
  }, []);

  const formik = useFormik({
    initialValues: {
      userId: user.userID,
      firstName: "",
      middleName: "",
      lastName: "",
      classificationId: "",
      countryId: "",
      profileCategoryId: "",
      actualPrice: "",
      discountPercentage: "",
      gender: "",
    },
    validationSchema: editProfileSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        await editProfileHandler(values);
        setMsg("Profile Edited!");
        if (selectedImage) {
          const formData = new FormData();
          formData.append("file", selectedImage);
          await uploadProfileImageHandler(formData);
        } else {
          console.log("No image selected.");
        }
      } catch (error) {
        setIsLoading(false);
      } finally {
        setTimeout(() => {
          setMsg("");
          // formik.resetForm();
        }, 2000);
      }
    },
  });
  return (
    <>
      <div className="col-lg-3">
        <div className="avatar-upload">
          <div className="avatar-edit">
            <input
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor="imageUpload" className="cam-iocon">
              <i className="fa fa-camera" aria-hidden="true"></i>
            </label>
          </div>
          <div className="avatar-preview">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Profile Preview"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={profileImage}
                alt="Profile Preview"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="col-lg-9">
        <ProfileDetailForm formik={formik} />
      </div>
      <div className="row justify-content-end mt-4">
        <div className="col-lg-3 ">
          <div className="add-to-favorite">
            <button
              type="submit"
              className="btn btn-primary w-100 btn-one search-text  "
              onClick={() => formik.submitForm()}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}{" "}
              <span style={{ top: "54.0625px", left: "-42.5px" }}></span>
            </button>
            {msg.length > 0 && (
              <h6 className="my-3 text-primary text-center">{msg}</h6>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h3 className="user-pro-name">Visa Information</h3>
        </div>
        <div className="col-lg-12">
          <div className="bts-find">
            <button
              type="button"
              className="btn btn-primary active filter-btn"
              onClick={handleAddVisaInfo}
            >
              <i className="fa fa-plus" aria-hidden="true"></i> Add Visa Info.
            </button>
          </div>
          <AddVisaInfo
            showVisaInfo={showVisaInfo}
            handleAddVisaInfo={handleAddVisaInfo}
            setShowVisaInfo={setShowVisaInfo}
            profileId={id}
          />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
