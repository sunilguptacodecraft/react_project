import React from 'react'

const SearchByKeyword = ({handleSearchKeyword,keyword,handleKeyword}) => {
  const isSearchDisabled = (keyword.length < 3 || keyword.length > 200);

  return (
    <div
    className={`tab-pane fade show active`}
    id="contact"
    role="tabpanel"
    aria-labelledby="contact-tab"
  >
    <div className="row my-4">
      <div className="col-lg-4 mt-3">
        <div className="form-group ">
          <label htmlFor="name" className="box-choose">
            Keyword
          </label>
          <input
            type="text"
            className="form-control  custom-names"
            id="name"
            placeholder="Enter Keyword"
            value={keyword}
            onChange={handleKeyword}
            maxLength={200}
          />
        </div>
      </div>
      <div className="col-lg-4 mt-3">
        <button
          type="submit"
          className="btn btn-primary w-100 btn-one my-3 "
          disabled={isSearchDisabled}
          onClick={handleSearchKeyword}
          style={{color:isSearchDisabled && "#ffffffad" }}
        >
          <span className="icons-ser" style={{ display: "contents" }}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>{" "}
          Search <span></span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default SearchByKeyword