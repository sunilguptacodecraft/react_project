import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../components/Layout/Banner";
import SearchResultPaginatedList from "../components/Pagination/SearchResultPaginatedList";
import SearchFilters from "../components/Search/SearchFilters";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../components/Search/SearchBox";
import { fetchPreferredProfiles } from "../store/search-slice";
import { initAxios } from "../helper-functions/initAxios";

const PreferredProfiles = () => {

  const [filterProfile, setFilterProfile] = useState({
    gender: '',
    class: '',
    country: '',
    categories: '',
  });
  const profileResult = useSelector((state) => state.search);
  const { entities, loading } = profileResult;

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
const dispatch = useDispatch()
  
  const filteredProfiles = entities?.data?.filter((item) => {
    return (
        (filterProfile.gender===""|| item.gender === filterProfile.gender) &&
        (filterProfile.class===""|| item.classification ===filterProfile.class) &&
        (filterProfile.country===""|| item.countryName === filterProfile.country) &&
        (filterProfile.categories===""|| item.category===filterProfile.categories)
      )});

   
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(entities?.data?.length / itemsPerPage);

 const viewProfileHandler=(profileId)=>{
  navigate(`/profile-data-locked/${profileId}`)
 }

useEffect(() => {
    initAxios()
    dispatch(fetchPreferredProfiles({userId:user.userID}))
}, [])


 
  return (
    <>
      <Banner bannerTitle="Preferred Profiles" classes="data-search" />
      <SearchBox headerTitle="Preferred Profiles"/>
      <section>
        <div className="container">
          <div className="row custom-margin-fil mb-4">
            <div className="col-lg-3">
              <SearchFilters setFilter={setFilterProfile} filter={filterProfile}/>
            </div>
            <div className="col-lg-9">
              {!loading ? (
                <SearchResultPaginatedList
                  data={filteredProfiles}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  viewDetailHandler={viewProfileHandler}
                />
              ) : (
                <p className="text-center">Loading...</p>
              )}
            </div>
            {!loading && entities?.data?.length > 0 && (
              <div className="col-lg-12">
                <div className="paginations">
                  <div className="btn-wraps-pagin">
                  
                    <div className="bts-find">
                      {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                      ).map((pageNumber) => (
                        <button
                          type="button"
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          disabled={currentPage === pageNumber}
                          className="btn btn-info active psgis-2 me-1"
                        >
                          {pageNumber}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    
    </>
  );
};

export default PreferredProfiles;
