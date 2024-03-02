import React, {useEffect, useState} from 'react'
import ErrorMessage from '../ErrorMessage';
import { getCategories, getCountry, getProfileClassifications } from '../../services/profile-search';

const ProfileDetailForm = ({formik, disableOnSave}) => {
    const [categories, setCategories] = useState([]);
  const [country, setCountry] = useState([]);
  const [classification, setClassification] = useState([]);

  const getCategoriesHandler = async () => {
    try {
      let res = await getCategories();
      setCategories(res.data);
    } catch (error) {}
  };

  const getCountryHandler = async () => {
    try {
      let res = await getCountry();
      setCountry(res.data);
    } catch (error) {}
  };

  const getClassificationHandler = async () => {
    try {
      let res = await getProfileClassifications();
      setClassification(res.data);
    } catch (error) {}
  };


  useEffect(() => {
    getClassificationHandler();
    getCategoriesHandler();
    getCountryHandler();
  }, []);
  return (
    <>
    <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className={`form-control mt-2 ${
                    formik.errors.firstName && formik.touched.firstName
                      ? "mb-0"
                      : " mb-2"
                  }`}
                  id="firstName"
                  name="firstName"
                  disabled={disableOnSave}
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <ErrorMessage title={formik.errors.firstName} />
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="middleName">Middle Name</label>
                <input
                  type="text"
                  className={`form-control mt-2 ${
                    formik.errors.middleName && formik.touched.middleName
                      ? "mb-0"
                      : " mb-2"
                  }`}
                  id="middleName"
                  name="middleName"
                  disabled={disableOnSave}
                  {...formik.getFieldProps("middleName")}
                />
                {formik.touched.middleName && formik.errors.middleName && (
                  <ErrorMessage title={formik.errors.middleName} />
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className={`form-control mt-2 ${
                    formik.errors.lastName && formik.touched.lastName
                      ? "mb-0"
                      : " mb-2"
                  }`}
                  id="lastName"
                  name="lastName"
                  {...formik.getFieldProps("lastName")}
                  disabled={disableOnSave}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <ErrorMessage title={formik.errors.lastName} />
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="class">Class</label>
                <br />
                <select
                  className={`form-control form-select custom-tst w-100 mt-2 ${
                    formik.errors.classificationId &&
                    formik.touched.classificationId
                      ? "mb-0"
                      : " mb-2"
                  }`}
                  aria-label="Default select example"
                  id="class"
                  name="classificationId"
                  disabled={disableOnSave}
                  {...formik.getFieldProps("classificationId")}
                >
                <option value="" >
            Class
          </option>
          {classification?.map((cla) => (
            <option
              key={cla.profileClassificationId}
              value={cla.profileClassificationId}
            >
              {cla.profileClassification}
            </option>
          ))}
                </select>
                {formik.touched.classificationId &&
                  formik.errors.classificationId && (
                    <ErrorMessage title={formik.errors.classificationId} />
                  )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="class">Country</label>
                <br />
                <select
                  className={`form-control form-select custom-tst w-100  mt-2 ${
                    formik.errors.countryId && formik.touched.countryId
                      ? "mb-0"
                      : " mb-2"
                  }`}
                  aria-label="Default select example"
                  id="country"
                  name="countryId"
                  disabled={disableOnSave}
                  {...formik.getFieldProps("countryId")}
                >
              <option value="" >
            Countries
          </option>
          {country?.map((coun) => {
            if (coun.countryName.length > 0) {
              return (
                <option key={coun.countryId} value={coun.countryId}>
                  {coun.countryName}
                </option>
              );
            }
          })}
                </select>
                {formik.touched.countryId && formik.errors.countryId && (
                  <ErrorMessage title={formik.errors.countryId} />
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="class">Category</label>
                <br />
                <select
                  className={`form-control form-select custom-tst w-100 mt-2 ${
                    formik.errors.profileCategoryId &&
                    formik.touched.profileCategoryId
                      ? "mb-0"
                      : " mb-2"
                  }`}
                  aria-label="Default select example"
                  id="category"
                  name="profileCategoryId"
                  {...formik.getFieldProps("profileCategoryId")}
                  disabled={disableOnSave}
                >
                <option value="" >
            Category
          </option>
          {categories?.map((cat) => (
            <option key={cat.profileCategoryId} value={cat.profileCategoryId}>
              {cat.profileCategory}
            </option>
          ))}
                </select>
                {formik.touched.profileCategoryId &&
                  formik.errors.profileCategoryId && (
                    <ErrorMessage title={formik.errors.profileCategoryId} />
                  )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="actualPrice">Actual Price($)</label>
                <input
                 {...formik.getFieldProps("actualPrice")}
                  type="text"
                  className="form-control my-3"
                  id="actualPrice"
                  name="actualPrice"
                  disabled={disableOnSave}
                />
                {formik.touched.actualPrice && formik.errors.actualPrice ? (
                  <div className="error">{formik.errors.actualPrice}</div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="discount">Discount(%)</label>
                <input
                 {...formik.getFieldProps("discountPercentage")}
                  type="text"
                  className="form-control my-3"
                  id="discount"
                  name="discountPercentage"
                  disabled={disableOnSave}
                />
                {formik.touched.discountPercentage &&
                  formik.errors.discountPercentage && (
                    <ErrorMessage title={formik.errors.discountPercentage} />
                  )}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group custom-lab">
                <label htmlFor="gender" className="my-3">
                  Gender
                </label>
                <div className="my-3">
                  <input
                    type="radio"
                    id="test1"
                    name="gender"
                    checked={formik.values.gender === "Male"}
                    onChange={formik.handleChange}
                    value="Male"
                    disabled={disableOnSave}
                  />
                  <label htmlFor="test1" className="mx-1">
                    Male
                  </label>

                  <input
                    type="radio"
                    id="test2"
                    name="gender"
                    checked={formik.values.gender === "Female"}
                    onChange={formik.handleChange}
                    value="Female"
                    disabled={disableOnSave}
                  />
                  <label htmlFor="test2" className="mx-1">
                    Female
                  </label>
                </div>
                <div className="d-flex justify-content-center">

                {formik.touched.gender && formik.errors.gender && (
                  <ErrorMessage title={formik.errors.gender} />
                  )}
                  </div>
              </div>
            </div>
          </div>
        </form>
    </>
  )
}

export default ProfileDetailForm