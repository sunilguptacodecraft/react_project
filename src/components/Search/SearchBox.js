import React, { useState } from "react";
import { fetchSearchByKeyword } from "../../store/search-slice";
import { useDispatch } from "react-redux";
const SearchBox = ({headerTitle}) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearchKeyword = () => {
    dispatch(fetchSearchByKeyword({ keyword }));
  };
  return (
    <section className="bg-data">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-text">
              <h1 className="main-text">{headerTitle}</h1>
            </div>
          </div>
        </div>
        <div className="row my-3 ">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="row ">
              <div className="col-lg-9 remove-left">
                <div className="input-group rounded">
                  <input
                    type="search"
                    className="form-control search-input"
                    placeholder="Harris, Timothy"
                    value={keyword}
                    onChange={handleKeyword}
                  />
                  <span className="search-icon">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-3 re-pa-hor">
                <button
                  type="button"
                  className="btn btn-primary w-100 btn-one search-text"
                  onClick={handleSearchKeyword}
                >
                  Search <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
