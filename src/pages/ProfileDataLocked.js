import React, {useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileData } from "../services/profile-search";
import list from "../assets/images/shape/list.png";
import mail from "../assets/images/shape/mail.png";
import printer from "../assets/images/shape/printer.png";
import fileSearch from "../assets/images/shape/file-search.png";
import { useSelector } from "react-redux";
import { addToFavorite } from "../services/favorites";
import { addToCart } from "../services/cart";
import { initAxios } from "../helper-functions/initAxios";
import { convertDateToLocal } from "../helper-functions/dateConversion";
import Banner from "../components/Layout/Banner";

const ProfileDataLocked = () => {
  const [profileData, setProfileData]=useState({})

  const [activeTab, setActiveTab]=useState("info")
  const [message, setMessage]=useState("")
  const [cartMessage, setCartMessage]=useState("")
  const [disabledFavoriteBtn, setDisabledFavoriteBtn]=useState(false)
  const [disabledCartBtn, setDisabledCartBtn]=useState(false)
  const [disabledBuyBtn, setDisabledBuyBtn]=useState(false)
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
const params = useParams()

  // const StringToStars = (inputString) => {
  //   let formattedString = "";
  //   if (inputString && inputString.length > 0) {
  //     formattedString = inputString.substring(0, 1).toUpperCase() + "*****";
  //   }
  //   return formattedString;
  // };

  const fetchProfileData = async () => {
 
     try {
       const response = await getProfileData(params.profileId);
       setProfileData(response.data);
       if(response.data.isPurchased){
        setDisabledFavoriteBtn(true)
        setDisabledCartBtn(true)
        setDisabledBuyBtn(true)
       }
      } catch (error) {
        console.log(error);
      }
  };

  const addToFavoriteHandler=async()=>{

    if(user){
      let payload = {
        userID: user.userID,
        profileID: profileData.profileID
      }
      try {
     let res = await addToFavorite(payload)
     let msg = res.data.insertMessage
     setDisabledFavoriteBtn(true)
     setMessage(msg)
    } catch (error) {
      
    }finally{
      setTimeout(() => {
        setMessage("")
      }, 5000);
    }
    }else{
      localStorage.setItem('lastVisitedPath', '/profile-data-locked');
      navigate('/login')
    }
  }
  const addToCartHandler=async()=>{
    if(user){
      let payload = {
        userID: user.userID,
        profileID: profileData.profileID
      }
      try {
     let res = await addToCart(payload)
     let msg = res.data.insertMessage
     setDisabledCartBtn(true)
     setCartMessage(msg)
    } catch (error) {
      
    }finally{
      setTimeout(() => {
        setCartMessage("")
      }, 5000);
    }
    }else{
      localStorage.setItem('lastVisitedPath', '/profile-data-locked');
      navigate('/login')
    }
  }

  const buyNowHandler=async()=>{
    if(user){
        navigate("/cart")
   
    }else{
      localStorage.setItem('lastVisitedPath', '/profile-data-locked');
      navigate('/login')
    }
  }

  useEffect(() => {
    initAxios()
    fetchProfileData();
  }, []);

  return (
    <>


      <Banner bannerTitle="Data Search" classes="data-searches"/>
      {profileData && (
        <>
          <section className="">
            <div className="container ">
              <div className="row my-5  bg-data-user">
                <div className="col-lg-9">
                  <div className="wraper-user-profile">
                    <div className="main-user-box">
                      <div className="wraper-box">
                        <div className="wraper-img">
                          <div className="profile-user">
                            <img src={profileData.imagePath} alt="" />
                            <div className="active-dot"></div>
                          </div>
                          <div className="profiles-names">
                            <h3 className="user-pro-name">
                              {profileData.profileName}
                            </h3>
                            <h3 className="name-dres">
                              {profileData.classification}
                            </h3>
                            <div className="user-tbl">
                              <div className="user-first">
                                <h3 className="user-details">Country: </h3>
                                <h3 className="user-details">Class:</h3>
                                <h3 className="user-details">Gender:</h3>
                              </div>
                              <div className="user-last">
                                <h4 className="user-detail">
                                  {profileData.countryName}
                                </h4>
                                <h4 className="user-detail">
                                  {profileData.classification}
                                </h4>
                                <h4 className="user-detail">
                                  {profileData.gender}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="carts">
                  <div className="profile-data-price">
							<h3 className="user-pro-name mt-3 w-100 text-center">{profileData.currency}{" "}{profileData.actualPrice}</h3>
                       </div>
                    {/* <div className="d-flex justify-content-center my-1">Profile Price: {profileData.currency}{" "}{profileData.actualPrice}</div> */}
                    <div className="add-to-favorite">
                      <button
                      disabled={disabledFavoriteBtn}
                        type="button"
                        className="btn btn-primary w-100 btn-favorite cart-txt"
                        onClick={addToFavoriteHandler}
                      >
                        {" "}
                        <i className="fa fa-heart-o" aria-hidden="true"></i> 
                        {
                          message.length>0 ? message: " Add to Favorite"
                        }
                    
                        <span></span>
                      </button>
                    </div>
                    <div className="add-to-cart my-2">
                      <button
                        disabled={disabledCartBtn}
                        type="submit"
                        className="btn btn-primary w-100 add-cart cart-txt"
                        onClick={addToCartHandler}

                      >
                        {" "}
                        <i className="fa fa-heart-o" aria-hidden="true"></i> 
                        {
                          cartMessage.length>0 ? cartMessage: " Add to Cart"
                        }
                    
                        <span></span>
                      </button>
                    </div>
                    <div className="buy-now">
                      <button
                        type="submit"
                        className="btn btn-primary w-100  add-cart cart-txt  "
                        onClick={buyNowHandler}
                        disabled={disabledBuyBtn}

                      >
                        Buy Now<span></span>
                      </button>
                    </div>
                  </div>
                  <div className="user-help">
                    <div className="list">
                      <img src={list} alt="" />
                    </div>
                    <div className="list">
                      <img src={mail} alt="" />
                    </div>
                    <div className="list">
                      <img src={printer} alt="" />
                    </div>
                    <div className="list">
                      <img src={fileSearch} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {profileData && (
        <>
          <section>
            <div className="container">
              <div className="row bg-data-user">
                <div className="col-lg-12">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                       className={`nav-link customtabs ${
                        activeTab === "info" ? "active" : ""
                      }`}
                        id="info-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#info"
                        type="button"
                        role="tab"
                        aria-controls="info"
                        aria-selected={activeTab === "info" ? "true" : "false"}
                        onClick={() => setActiveTab("info")}
                      >
                        Personal Information
                      </button>
                    </li>

                    <li
                     className="nav-item" role="presentation">
                      <button
                         className={`nav-link customtabs ${
                          activeTab === "relationship" ? "active" : ""
                        }`}
                          id="relationship-tab"
                          data-bs-toggle="relationship"
                          data-bs-target="#relationship"
                          type="button"
                          role="tab"
                          aria-controls="relationship"
                          aria-selected={activeTab === "relationship" ? "true" : "false"}
                          onClick={() => setActiveTab("relationship")}
                      >
                          Relationships{" "}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                          className={`nav-link customtabs ${
                            activeTab === "visa" ? "active" : ""
                          }`}
                            id="visa-tab"
                            data-bs-toggle="visa"
                            data-bs-target="#visa"
                            type="button"
                            role="tab"
                            aria-controls="visa"
                            aria-selected={activeTab === "visa" ? "true" : "false"}
                            onClick={() => setActiveTab("visa")}
                      >
                           Visa Information{" "}
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    {activeTab === 'info' && (
                      <div
                      className="tab-pane fade show active"
                      id="info"
                      role="tabpanel"
                      aria-labelledby="info-tab"
                    >
                      <div className="row my-4">
                        <div className="col-lg-6">
                        <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Profile-ID:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                {profileData.profileKey} &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Gender:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                {profileData.gender} &nbsp;
                                {/* {StringToStars(profileData.gender)} &nbsp; */}
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div>
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Date of Birth:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                2****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Name:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                {profileData.profileName} &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div>
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Designation:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                N****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Place of Birth:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                S****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">National ID:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                N****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Other ID:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                O****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Passport No:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                N****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Passport No:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                1****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                        </div>
                        <div className="col-lg-6">
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Suffix:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                N****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Aliases:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                N****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Level:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                N****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                           <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Class:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                {profileData.classification} &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Category:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                {profileData.profileCategory} &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div>
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Sub Categories:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                N****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Designation:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                N****** &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">
                                Country:
                              </h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                {profileData.countryName}{" "}
                                &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div>
                          {/* <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Position:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                {StringToStars(profileData.gender)} &nbsp;
                                <span className="lock-icon">
                                  <i
                                    className="fa fa-lock"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h2>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    )}
                    {activeTab === 'relationship' && (
                        <div
                        className="tab-pane fade show active"
                        id=""
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >{profileData.profileMembers.map((item, index)=>(
                        <div key={index}>
                        <div className="main-user-box p-4" >
                          <div className="wraper-box">
                            <div className="wraper-img">
                              <div className="users-imgs">
                                <img src={item.imagePath} alt="" />
                                <div className="active-dot"></div>
                              </div>
                              <div className="users-names">
                                <h3 className="user-names">Name:      {item.profileName}</h3>
                                <h3 className="name-dres">Profile-ID: {item.profileKey}</h3>
                                <h3 className="name-dres">Gender:     {item.gender}</h3>
                              </div>
                            </div>
                            <div className="wraper-btn">
                              <div className="bts-find">
                                <button
                                  type="button"
                                  className="btn btn-primary details-btn"
                                  onClick={() => navigate(`/profile-data-locked/${item.profileId}`)}
                                >
                                  View Details
                                </button>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        <hr />
                        </div>
                      ))}
                       
                      </div>
                    )}
                  {activeTab === 'visa' &&(
                     <div
                     className="tab-pane fade show active"
                     id="visa"
                     role="tabpanel"
                     aria-labelledby="visa-tab"
                   >
                     {" "}
                        <div className="row my-4">
                          {
                            profileData.profileVisas.map(visa=>
                              <div className="col-lg-12 my-1 border rounded" key={visa.visaNumber}>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Visa Country:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">
                                    {visa.visaCountry} &nbsp;
                                    <span className="lock-icon">
                                      <i
                                        className="fa fa-lock"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </h2>
                                </div>
                              </div>  
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Visa Number:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">
                                    {visa.visaNumber} &nbsp;
                                    <span className="lock-icon">
                                      <i
                                        className="fa fa-lock"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Visa Issue Date:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">
                                    {convertDateToLocal(visa.visaIssueDate)} &nbsp;
                                    <span className="lock-icon">
                                      <i
                                        className="fa fa-lock"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </h2>
                                </div>
                              </div>
                               <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Visa Expiry Date:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">
                                    {convertDateToLocal(visa.visaExpiryDate)} &nbsp;
                                    <span className="lock-icon">
                                      <i
                                        className="fa fa-lock"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </h2>
                                </div>
                              </div>
                             
                            </div>
                              )
                          }
                        
                       
                        </div>
                  
                   </div>
                  )}
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProfileDataLocked;
