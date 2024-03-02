import React, { useEffect, useState } from 'react'
import { getCategories, getCountry, getProfileClassifications } from '../../services/profile-search';

const SearchByCriteria = ({handleSearchCriteria,setCriteriaFields,criteriaFields}) => {
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
  const isSearchDisabled = !(
    criteriaFields.name.length>0 ||
    criteriaFields.gender.length>0 ||
    criteriaFields.profileClass.length>0 ||
    criteriaFields.categories.length>0 ||
    criteriaFields.country.length>0
  );
  useEffect(() => {
    getClassificationHandler()
    getCategoriesHandler();
    getCountryHandler();
  }, []);
  
  return (
    <div
    className="tab-pane fade show active"
    id="home"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
    <div className="row my-4">
      <div className="col-lg-6">
        <div className="col-lg-12 mt-3">
          <div className="form-group">
            <label htmlFor="name" className="box-choose">
              Enter Name
            </label>
            <input
              type="text"
              className="form-control  custom-names"
              id="name"
              placeholder="Enter Credit card Name"
              value={criteriaFields.name}
              onChange={(e) =>
                setCriteriaFields({
                  ...criteriaFields,
                  name: e.target.value,
                })
              }
              maxLength={200}
            />
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <label className="box-choose">Gender</label>
          <br />
          <div className="choose-box">
            <select
              className="form-select"
              aria-label="Default select example"
              value={criteriaFields.gender}
              onChange={(e) =>
                setCriteriaFields({
                  ...criteriaFields,
                  gender: e.target.value,
                })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <label className="box-choose mt-3">Class</label>
          <div className="choose-box">
            <select
              className="form-select"
              aria-label="Default select example"
              value={criteriaFields.profileClass}
              onChange={(e) =>
                setCriteriaFields({
                  ...criteriaFields,
                  profileClass: e.target.value,
                })
              }
            >
              <option value="">Select Class</option>
              {classification?.map((cla) => (
                <option
                  key={cla.profileClassificationId}
                  value={cla.profileClassification}
                >
                  {cla.profileClassification}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-lg-12 mt-3">
          <label className="box-choose mt-3">Categories</label>
          <br />
          <div className="choose-box">
            <select
              className="form-select"
              aria-label="Default select example"
              value={criteriaFields.categories}
              onChange={(e) =>
                setCriteriaFields({
                  ...criteriaFields,
                  categories: e.target.value,
                })
              }
            >
              <option value="">Select Categories</option>
              {categories?.map((cat) => (
                <option
                  key={cat.profileCategoryId}
                  value={cat.profileCategory}
                >
                  {cat.profileCategory}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <label className="box-choose mt-3">Country</label>
          <br />
        
          <div className="choose-box">
            <select
              className="form-select"
              aria-label="Default select example"
              value={criteriaFields.country}
              onChange={(e) =>
                setCriteriaFields({
                  ...criteriaFields,
                  country: e.target.value,
                })
              }
            >
              <option value="">Select Country</option>
              {country?.map((coun) => {
                if (coun.countryName.length > 0) {
                  return (
                    <option
                      key={coun.countryId}
                      value={coun.countryCode}
                    >
                      {coun.countryName}
                    </option>
                  );
                }
              })}
            </select>
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <button
            type="submit"
            className="btn btn-primary w-100 btn-one my-3"
            disabled={isSearchDisabled}
            onClick={handleSearchCriteria}
            style={{color:isSearchDisabled && "#ffffffad" }}
          >
            <span
              className="icons-ser "
              style={{ display: "contents"}}
            >
              <i
                className="fa fa-search"
                aria-hidden="true"
              ></i>
            </span>{" "}
            Search <span></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SearchByCriteria