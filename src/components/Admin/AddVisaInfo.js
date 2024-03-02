import React, { useState, useEffect } from "react";
import useAddVisa from "../../hooks/useAddVisa";
import { useSelector } from "react-redux";
import { getCountry } from "../../services/profile-search";
import { convertDateToLocal } from "../../helper-functions/dateConversion";
import { useEditProfile } from "../../hooks";

const AddVisaInfo = ({
  showVisaInfo,
  setShowVisaInfo,
  handleAddVisaInfo,
  profileId,
}) => {
  const { user } = useSelector((state) => state.auth);
  const { addVisaHandler, isLoading, visaInfo, setVisaInfo, visaMsg } =
    useAddVisa();
  const { getVisaDetailhandler, fetchedVisaDetail } = useEditProfile();
  const [country, setCountry] = useState([]);
  const [visaDetail, setVisaDetail] = useState([]);

  const getCountryHandler = async () => {
    try {
      let res = await getCountry();
      setCountry(res.data);
    } catch (error) {}
  };

  const addVisaInfo = async () => {
    try {
      const payload = {
        ...visaInfo,
        userId: user.userID,
        profileId: profileId,
      };
      await addVisaHandler(payload);
      setShowVisaInfo(false);
      setVisaDetail((prevVisaDetail) => [...prevVisaDetail, payload]);
    } catch (error) {
    } finally {
    }
  };
  useEffect(() => {
    getCountryHandler();
    getVisaDetailhandler();
  }, []);
  return (
    <>
      {" "}
      {showVisaInfo && (
        <div className={`col-lg-12 visainfoinput`}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="name">Visa No.</label>
                <input
                  type="text"
                  className="form-control my-3"
                  id="name"
                  name="visaNumber"
                  value={visaInfo.visaNumber}
                  onChange={(e) =>
                    setVisaInfo({
                      ...visaInfo,
                      visaNumber: e.target.value,
                    })
                  }
                  maxLength={8}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="name">Valid From</label>
                <input
                  type="date"
                  className="form-control my-3"
                  id="name"
                  name="visaIssueDate"
                  value={visaInfo.visaIssueDate}
                  onChange={(e) =>
                    setVisaInfo({
                      ...visaInfo,
                      visaIssueDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="name">Valid To</label>
                <input
                  type="date"
                  className="form-control my-3"
                  id="name"
                  name="visaExpiryDate"
                  value={visaInfo.visaExpiryDate}
                  onChange={(e) =>
                    setVisaInfo({
                      ...visaInfo,
                      visaExpiryDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group custom-lab">
                <label htmlFor="name" className="mb-3">
                  Visa Country
                </label>
                <br />
                <select
                  className="form-select custom-tst w-100 mb-3"
                  aria-label="Default select example"
                  name="visaCountryId"
                  value={visaInfo.visaCountryId}
                  onChange={(e) =>
                    setVisaInfo({
                      ...visaInfo,
                      visaCountryId: e.target.value,
                    })
                  }
                >
                  <option value="">Country</option>
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
              </div>
            </div>
            <div className="row justify-content-end mt-4">
              <div className="col-lg-3 ">
                <div className="add-to-favorite">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-one search-text"
                    onClick={addVisaInfo}
                  >
                    Save{" "}
                    <span style={{ top: "54.0625px", left: "-42.5px" }}></span>
                  </button>
                  {visaMsg.length > 0 && (
                    <h6 className="my-3 text-primary text-center">{visaMsg}</h6>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="col-lg-12 mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.N0.</th>
              <th scope="col">Visa.N0.</th>
              <th>Valid From</th>
              <th scope="col">Valid To</th>
              <th scope="col">Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {profileId && (fetchedVisaDetail?.map((visa, index) => (
                <tr key={index}>
                  <td scope="col">{index + 1}</td>
                  <td scope="col">{visa.visaNumber}</td>
                  <td scope="col">
                    {convertDateToLocal(visa.visaIssueDate).split(",")}
                  </td>
                  <td scope="col">{convertDateToLocal(visa.visaExpiryDate)}</td>
                  <td scope="col">{visa.visaCountry}</td>
                  <td scope="col">
                    <button
                      type="button"
                      className="btn btn-danger mx-1"
                      // onClick={()=>removeVisaDetail()}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              )))}
            {visaDetail &&
              visaDetail.map((visa, index) => (
                <tr key={index}>
                  <td scope="col">{index + 1}</td>
                  <td scope="col">{visa.visaNumber}</td>
                  <td scope="col">{visa.visaIssueDate}</td>
                  <td scope="col">{visa.visaExpiryDate}</td>
                  <td scope="col">{visa.visaCountryId}</td>
                  <td scope="col">
                    <button
                      type="button"
                      className="btn btn-danger mx-1"
                      // onClick={()=>removeVisaDetail()}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddVisaInfo;
