import React from "react";
import { Link } from "react-router-dom";

import profileUser from "../assets/images/shape/profile-user.png";
import list from "../assets/images/shape/list.png";
import mail from "../assets/images/shape/mail.png";
import printer from "../assets/images/shape/printer.png";
import fileSearch from "../assets/images/shape/file-search.png";
import Banner from "../components/Layout/Banner";

const profileDataUnlocked = () => {
  return (
    <>
   

      <Banner bannerTitle="User Data" classes="payment-recieved"/>

      <section className="">
        <div className="container ">
          <div className="row my-5  bg-data-user">
            <div className="col-lg-9">
              <div className="wraper-user-profile">
                <div className="main-user-box">
                  <div className="wraper-box">
                    <div className="wraper-img">
                      <div className="profile-user">
                        <img src={profileUser} alt="" />
                        <div className="active-dot"></div>
                      </div>
                      <div className="profiles-names">
                        <h3 className="user-pro-name">Annette White</h3>
                        <h3 className="name-dres">Enforcement</h3>
                        <div className="user-tbl">
                          <div className="user-first">
                            <h3 className="user-details">Country: </h3>
                            <h3 className="user-details">Class:</h3>
                            <h3 className="user-details">Gender:</h3>
                          </div>
                          <div className="user-last">
                            <h4 className="user-detail">United State</h4>
                            <h4 className="user-detail">Enforcement</h4>
                            <h4 className="user-detail">Female</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            
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

      <section>
        <div className="container">
          <div className="row bg-data-user">
            <div className="col-lg-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link customtabs active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Personal Information
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link customtabs"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Additional Information
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link customtabs"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Report Address
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link customtabs"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Individual Source
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link customtabs"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Relationships{" "}
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row my-4">
                    <div className="col-lg-6">
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Gender:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Female </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Date of Birth:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">23/02/1987 </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Nick Name:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Not Available </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Designation:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Not Available </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Place of Birth:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">
                            Saint John Capisterre, Saint Kitts and Nevis{" "}
                          </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">National ID:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Not Available </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Other ID:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Not Available </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Passport No:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Not Available </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Passport No:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">12032 </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Suffix:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">
                            Not Available &nbsp;
                            <span className="lock-icon">
                              <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Aliases:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Not available </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Level:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">National </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Categories:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">PEP </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Sub Categories:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Govt Branch Member</h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Designation:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">Not Available </h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Primary Country:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">St.Kitts & Nevis</h2>
                        </div>
                      </div>
                      <div className="wraper-list">
                        <div className="child-wraper">
                          <h2 className="user-detailed">Position:</h2>
                        </div>
                        <div className="lighted-wraper">
                          <h2 className="detail-u">
                            Former Prime Minister of Saint Kitts and
                            Nevis(February 18,2015 August 2022).{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  {" "}
                  <div className="row my-4">
                    <div className="row my-4">
                      <div className="col-lg-6">
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Gender:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Female </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Date of Birth:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">23/02/1987 </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Nick Name:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Designation:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Place of Birth:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">
                              Saint John Capisterre, Saint Kitts and Nevis{" "}
                            </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">National ID:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Other ID:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Passport No:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Passport No:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">12032 </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Suffix:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">
                              Not Available &nbsp;
                              <span className="lock-icon">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                              </span>
                            </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Aliases:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Level:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">National </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Categories:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">PEP </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Sub Categories:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Govt Branch Member</h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Designation:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Primary Country:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">St.Kitts & Nevis</h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Position:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">
                              Former Prime Minister of Saint Kitts and
                              Nevis(February 18,2015 August 2022).{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  {" "}
                  <div className="row my-4">
                    <div className="row my-4">
                      <div className="col-lg-6">
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Gender:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Female </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Date of Birth:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">23/02/1987 </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Nick Name:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Designation:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Place of Birth:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">
                              Saint John Capisterre, Saint Kitts and Nevis{" "}
                            </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">National ID:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Other ID:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Passport No:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Passport No:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">12032 </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Suffix:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">
                              Not Available &nbsp;
                              <span className="lock-icon">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                              </span>
                            </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Aliases:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Level:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">National </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Categories:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">PEP </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Sub Categories:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Govt Branch Member</h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Designation:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">Not Available </h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Primary Country:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">St.Kitts & Nevis</h2>
                          </div>
                        </div>
                        <div className="wraper-list">
                          <div className="child-wraper">
                            <h2 className="user-detailed">Position:</h2>
                          </div>
                          <div className="lighted-wraper">
                            <h2 className="detail-u">
                              Former Prime Minister of Saint Kitts and
                              Nevis(February 18,2015 August 2022).{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    {" "}
                    <div className="row my-4">
                      <div className="row my-4">
                        <div className="col-lg-6">
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Gender:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Female </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Date of Birth:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">23/02/1987 </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Nick Name:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Not Available </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Designation:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Not Available </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Place of Birth:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                Saint John Capisterre, Saint Kitts and Nevis{" "}
                              </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">National ID:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Not Available </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Other ID:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Not Available </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Passport No:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Not Available </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Passport No:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">12032 </h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Suffix:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                Not Available &nbsp;
                                <span className="lock-icon">
                                  <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                              </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Aliases:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Not available </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Level:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">National </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Categories:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">PEP </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Sub Categories:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Govt Branch Member</h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Designation:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">Not Available </h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Primary Country:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">St.Kitts & Nevis</h2>
                            </div>
                          </div>
                          <div className="wraper-list">
                            <div className="child-wraper">
                              <h2 className="user-detailed">Position:</h2>
                            </div>
                            <div className="lighted-wraper">
                              <h2 className="detail-u">
                                Former Prime Minister of Saint Kitts and
                                Nevis(February 18,2015 August 2022).{" "}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      {" "}
                      <div className="row my-4">
                        <div className="row my-4">
                          <div className="col-lg-6">
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Gender:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Female </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Date of Birth:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">23/02/1987 </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Nick Name:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Not Available </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Designation:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Not Available </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Place of Birth:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">
                                  Saint John Capisterre, Saint Kitts and Nevis{" "}
                                </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">National ID:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Not Available </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Other ID:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Not Available </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Passport No:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Not Available </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Passport No:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">12032 </h2>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Suffix:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">
                                  Not Available &nbsp;
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
                                <h2 className="user-detailed">Aliases:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Not available </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Level:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">National </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Categories:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">PEP </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Sub Categories:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Govt Branch Member</h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Designation:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">Not Available </h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Primary Country:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">St.Kitts & Nevis</h2>
                              </div>
                            </div>
                            <div className="wraper-list">
                              <div className="child-wraper">
                                <h2 className="user-detailed">Position:</h2>
                              </div>
                              <div className="lighted-wraper">
                                <h2 className="detail-u">
                                  Former Prime Minister of Saint Kitts and
                                  Nevis(February 18,2015 August 2022).{" "}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        {" "}
                        <div className="row my-4">
                          <div className="row my-4">
                            <div className="col-lg-6">
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Gender:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Female </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Date of Birth:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">23/02/1987 </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Nick Name:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Not Available </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Designation:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Not Available </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Place of Birth:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">
                                    Saint John Capisterre, Saint Kitts and Nevis{" "}
                                  </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">National ID:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Not Available </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Other ID:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Not Available </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Passport No:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Not Available </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Passport No:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">12032 </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Suffix:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">
                                    Not Available &nbsp;
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
                                  <h2 className="user-detailed">Aliases:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Not available </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Level:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">National </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Categories:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">PEP </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Sub Categories:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Govt Branch Member</h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Designation:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">Not Available </h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">
                                    Primary Country:
                                  </h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">St.Kitts & Nevis</h2>
                                </div>
                              </div>
                              <div className="wraper-list">
                                <div className="child-wraper">
                                  <h2 className="user-detailed">Position:</h2>
                                </div>
                                <div className="lighted-wraper">
                                  <h2 className="detail-u">
                                    Former Prime Minister of Saint Kitts and
                                    Nevis(February 18,2015 August 2022).{" "}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default profileDataUnlocked;
