import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import important from "../assets/images/shape/important-a.png";
import camera from "../assets/images/shape/camera.png";
import anchor from "../assets/images/shape/anchor-i.png";
import { useSelector } from "react-redux";
import { useErrorHandler } from "../hooks";
import { getPurchasedProfiles } from "../services/profile-search";
import { initAxios } from "../helper-functions/initAxios";
import {ImageModal }from "../components/ImageModal"
import Banner from "../components/Layout/Banner";
import { PhotoProvider, PhotoView } from 'react-photo-view';
const PurchasedData = () => {
  const [profiles, setProfiles] = useState([])
  const { user } = useSelector((state) => state.auth);
  let { userID} = user;
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };
  const {verifyErrorMsg} = useErrorHandler()
  const purchasedProfileHandler=async()=>{
    try {
      let res = await getPurchasedProfiles(userID)
      setProfiles(res.data)
    } catch (error) {
      verifyErrorMsg(error)
    }
  }
  useEffect(() => {
    initAxios()
   purchasedProfileHandler()
  }, [])
  
 
  return (
    <>
     

      <Banner bannerTitle="Purchased Data" classes="data-search"/>

      <section>
        <div className="container">
          <div className="row my-4">
            <div className="col-lg-12">
              <div className="login-text">
                <h1 className="main-text text-start">Purchased Data</h1>
              </div>
              <div className="col-lg-12 my-5">
                <div className="user-data-covers">
                  {
                    profiles.map(profile=>
                      <div
                
                      key={profile.profileID}
                      className="user-box-covers"
                      
                    >
                      <div className="userimgcoves">
                        <div className="user-imgs">
                          <img src={profile.imagePath} alt="" onClick={() => navigate(`/profile-data-locked/${profile.profileID}`)} style={{cursor:"pointer"}}/>
                        </div>
                        <div className="user-icon">
                          <div className="icon-btns">
                            <div className="import-icon" title={profile.info}
                      
                      >
                              <img src={important}  alt="" />
                            </div>
                            <div className="camera-icons">
                            <PhotoProvider>
                          <PhotoView src={profile.imagePath}>
                            <img style={{cursor:"pointer"}} src={camera} alt="" />
                          </PhotoView>
                          </PhotoProvider>
                              
                            </div>
                            <div className="user-a" >
                              <img src={anchor} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div onClick={() => navigate(`/profile-data-locked/${profile.profileID}`)} style={{cursor:"pointer"}}>
                      <div className="user-datas">
                        <div className="fistwrap">
                          <h3 className="user-names">Name:</h3>
                        </div>
                        <div className="last-wrap">
                          <h3 className="name-dres">{profile.profileName}</h3>
                        </div>
                      </div>
  
                      <div className="user-datas">
                        <div className="fistwrap">
                          <h3 className="user-names">Country :</h3>
                        </div>
                        <div className="last-wrap">
                          <h3 className="name-dres">{profile.countryName}</h3>
                        </div>
                      </div>
                     
                      <div className="user-datas">
                        <div className="fistwrap">
                          <h3 className="user-names">Class :</h3>
                        </div>
                        <div className="last-wrap">
                          <h3 className="name-dres">{profile.classification}</h3>
                        </div>
                      </div>
                      <div className="user-datas">
                        <div className="fistwrap">
                          <h3 className="user-names">Gender :</h3>
                        </div>
                        <div className="last-wrap">
                          <h3 className="name-dres">{profile.gender}</h3>
                        </div>
                      </div>
                      </div>
                    </div>
                      )
                  }
               
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {selectedImage && <ImageModal show={modalShow} imageUrl={selectedImage} onClose={handleCloseModal} /> }
    </>
  );
};

export default PurchasedData;
