import React from 'react'

const SearchByProfileId = ({handleSearchProfileId,profileId,handleProfileId}) => {
  const isSearchDisabled = (profileId.length < 3 || profileId.length > 15);

  return (
    <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row my-4">
                      <div className="col-lg-4 mt-3">
                        <div className="form-group ">
                          <label htmlFor="name" className="box-choose">
                            Profile ID
                          </label>
                          <input
                            value={profileId}
                            onChange={handleProfileId}
                            type="text"
                            className="form-control  custom-names"
                            id="name"
                            placeholder="Enter Profile ID"
                            maxLength={15}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 mt-3">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 btn-one my-3 "
                          onClick={handleSearchProfileId}
                          disabled={isSearchDisabled}
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

export default SearchByProfileId