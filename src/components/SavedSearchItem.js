import React from "react";

const SavedSearchItem = ({removeSavedSearch, searchSavedHandle, item}) => {
  return (
    <>
      <div className="cross-icon" id="open1">
        <button
          className="btn cross-button  d-flex align-items-center"
          type="button"
          onClick={() => removeSavedSearch(item.saveSearchId)}
        >
          X
        </button>
      </div>
      <div className="flex-items ">
        <div className="param">
          <h3 className="user-names">Parameters:</h3>
          <h3 className="name-dres">{item.searchDetail}</h3>
        </div>
        <div className="search">
          <button
            type="button"
            className="btn btn-outline-secondary w-75"
            onClick={() => searchSavedHandle(item)}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SavedSearchItem;
