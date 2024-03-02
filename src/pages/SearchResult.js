import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { saveSearch } from "../services/profile-search";
import { ImageModal } from "../components/ImageModal";
import Banner from "../components/Layout/Banner";
import SearchResultPaginatedList from "../components/Pagination/SearchResultPaginatedList";
import SearchFilters from "../components/Search/SearchFilters";
import SearchBox from "../components/Search/SearchBox";

const SearchResult = () => {

  const [saveSearchMsg, setSaveSearchMsg] = useState("");
  const [filterProfile, setFilterProfile] = useState({
    gender: '',
    class: '',
    country: '',
    categories: '',
  });
  const profileResult = useSelector((state) => state.search);
  const { entities, loading } = profileResult;

  const saveResult = useSelector((state) => state.saveSearch.search);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const filteredProfiles = entities?.data?.filter((item) => {
    return (
        (filterProfile.gender===""|| item.gender === filterProfile.gender) &&
        (filterProfile.class===""|| item.classification ===filterProfile.class) &&
        (filterProfile.country===""|| item.countryName === filterProfile.country) &&
        (filterProfile.categories===""|| item.category===filterProfile.categories)
      )});

   
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(entities?.data?.length / itemsPerPage);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const saveSearchHandler = async () => {
    if (user) {
      try {
        const res = await saveSearch(saveResult);
        setSaveSearchMsg(res.data.insertMessage);
      } catch (error) {
      } finally {
        setTimeout(() => {
          setSaveSearchMsg("");
        }, 5000);
      }
    } else {
      localStorage.setItem("lastVisitedPath", "/search-initiate");
      navigate("/login");
    }
  };

  const viewProfileHandler=(profileId)=>{
    navigate(`/profile-data-locked/${profileId}`)
   }
  return (
    <>
      <Banner bannerTitle="Data Search" classes="data-search" />

      <SearchBox headerTitle="Find Data"/>

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
                  handleImageClick={handleImageClick}
                />
              ) : (
                <p className="text-center">Loading...</p>
              )}
            </div>
            {!loading && entities?.data?.length > 0 && (
              <div className="col-lg-12">
                <div className="paginations">
                  <div className="btn-wraps-pagin">
                    <span className="text-search-save text-center d-flex align-items-center align-self-end">
                      <span
                        className="d-inline-block"
                        onClick={() => {
                          if (saveSearchMsg.length > 0) {
                            return;
                          } else {
                            saveSearchHandler();
                          }
                        }}
                      >
                        {saveSearchMsg.length > 0 ? (
                          <>{saveSearchMsg}</>
                        ) : (
                          "Save this search"
                        )}
                      </span>
                    </span>
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
      {selectedImage && (
        <ImageModal
          show={modalShow}
          imageUrl={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default SearchResult;
