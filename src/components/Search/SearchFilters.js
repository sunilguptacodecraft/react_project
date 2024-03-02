import React, { useEffect, useState } from "react";
import {
  getCategories,
  getCountry,
  getProfileClassifications,
} from "../../services/profile-search";

const SearchFilters = ({ setFilter, filter }) => {
  const [categories, setCategories] = useState([]);
  const [country, setCountry] = useState([]);
  const [classification, setClassification] = useState([]);
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

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
    <div className="filter-box">
      <div className="filters">
        <div className="filter-heading">Filter By</div>
        <div className="filter-icon">
          <i className="fa fa-filter"></i>
        </div>
      </div>
      <hr style={{ margin: "5px 0px" }} />
      <div className="filters">
        <select
          className="form-select remove-bg-select"
          name="gender"
          onChange={handleFilterChange}
          value={filter.gender}
        >
          <option value="" >
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <hr style={{ margin: "5px 0px" }} />
      <div className="filters">
        <select
          className="form-select remove-bg-select"
          name="categories"
          onChange={handleFilterChange}
          value={filter.categories}
        >
          <option value="" >
            Category
          </option>
          {categories?.map((cat) => (
            <option key={cat.profileCategoryId} value={cat.profileCategory}>
              {cat.profileCategory}
            </option>
          ))}
        </select>
      </div>

      <hr style={{ margin: "5px 0px" }} />
      <div className="filters">
        <select
          className="form-select remove-bg-select"
          name="class"
          onChange={handleFilterChange}
          value={filter.class}
        >
          <option value="" >
            Class
          </option>
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
      <hr style={{ margin: "5px 0px" }} />
      <div className="filters">
        <select
          className="form-select remove-bg-select"
          name="country"
          onChange={handleFilterChange}
          value={filter.country}
        >
          <option value="" >
            Countries
          </option>
          {country?.map((coun) => {
            if (coun.countryName.length > 0) {
              return (
                <option key={coun.countryId} value={coun.countryName}>
                  {coun.countryName}
                </option>
              );
            }
          })}
        </select>
      </div>
      <hr />
    </div>
  );
};

export default SearchFilters;
