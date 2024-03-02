import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchByCriteria,SearchByProfileId, SearchByKeyword } from "../components/Search";
import { fetchSearchByCriteria, fetchSearchByKeyword, fetchSearchByProfileId } from "../store/search-slice";
import { useDispatch, useSelector } from "react-redux";
import { setSave } from "../store/save-slice";
import { initAxios } from "../helper-functions/initAxios";
import Banner from "../components/Layout/Banner";

const SearchInitiate = () => {
  const navigate = useNavigate();
  const [profileId, setProfileId] = useState("");
  const [criteriaFields, setCriteriaFields] = useState({
    name: "",
    gender: "",
    profileClass: "",
    categories: "",
    country: "",
  });
  
  const [keyword, setKeyword] = useState("");
  const [activeTab,setActiveTab] = useState("criteria");
  const { user } = useSelector((state) => state.auth);
  let  userID  = user?.userID;
  const dispatch = useDispatch()
  const handleProfileId = (e) => {
    setProfileId(e.target.value);
  };
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchCriteria = () => {
      dispatch(fetchSearchByCriteria({data:criteriaFields}))
      dispatch(setSave({
          userId:userID,
          profileName:criteriaFields.name,
          gender:criteriaFields.gender,
          countryCode:criteriaFields.country,
          classification:criteriaFields.categories,
          profileId: "",
          keyword: "",
      }))
      navigate("/search-result");
    
  };
  const handleSearchProfileId = () => {
    dispatch(fetchSearchByProfileId({profileId}))
    dispatch(setSave({
        userId:userID,
      profileName:"",
      gender:"",
      countryCode:"",
      classification:"",
      profileId: profileId,
      keyword: "",
  }))
    navigate("/search-result");
  };
  const handleSearchKeyword = () => {
      dispatch(fetchSearchByKeyword({keyword}))
      dispatch(setSave({
          userId:userID,
        profileName:"",
      gender:"",
      countryCode:"",
      classification:"",
        profileId: "",
        keyword:keyword,
    }))
      navigate("/search-result");
   
  };


useEffect(() => {
  initAxios()
}, [])

 
  return (
    <>
    
      <Banner bannerTitle="Data Search" classes="data-search"/>
      <section>
        <div className="container">
          <div className="row bg-data-user">
            <div className="col-lg-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link customtabs ${
                      activeTab === "criteria" ? "active" : ""
                    }`}
                    id="criteria-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#criteria"
                    type="button"
                    role="tab"
                    aria-controls="criteria"
                    aria-selected={activeTab === "criteria" ? "true" : "false"}
                    onClick={() => setActiveTab("criteria")}
                  >
                    Search by criteria
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link customtabs ${
                      activeTab === "profile" ? "active" : ""
                    }`}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected={activeTab === "profile" ? "true" : "false"}
                    onClick={() => setActiveTab("profile")}
                  >
                    Search by Profile ID
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link customtabs ${
                      activeTab === "keyword" ? "active" : ""
                    }`}
                    id="keyword-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#keyword"
                    type="button"
                    role="tab"
                    aria-controls="keyword"
                    aria-selected={activeTab === "keyword" ? "true" : "false"}
                    onClick={() => setActiveTab("keyword")}
                  >
                    Search by keyword
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                {activeTab === "criteria" && (
                  <SearchByCriteria handleSearchCriteria={handleSearchCriteria} setCriteriaFields={setCriteriaFields} criteriaFields={criteriaFields} />
                )}
                {activeTab === "profile" && (
                 <SearchByProfileId handleSearchProfileId={handleSearchProfileId} handleProfileId={handleProfileId} profileId={profileId} />
                )}
                {activeTab === "keyword" && (
                  <SearchByKeyword handleSearchKeyword={handleSearchKeyword} keyword={keyword} handleKeyword={handleKeyword}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchInitiate;
