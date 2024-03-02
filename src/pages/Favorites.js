import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import important from "../assets/images/shape/important-a.png";
import camera from "../assets/images/shape/camera.png";
import anchor from "../assets/images/shape/anchor-i.png";
import user from "../assets/images/shape/puser-user-1.png"
import { useSelector } from 'react-redux';
import { getFavorites, removeFavorite } from '../services/favorites';
import { useErrorHandler } from '../hooks';
import { ImageModal } from '../components/ImageModal';
import Banner from '../components/Layout/Banner';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Favorites = () => {
   const navigate=useNavigate()
   const [favoriteData, setFavoritesData] = useState([])
   const { user:userData } = useSelector((state) => state.auth);
   const {verifyErrorMsg} = useErrorHandler()
   const [modalShow, setModalShow] = useState(false);
   const [selectedImage, setSelectedImage] = useState('');
 
   
   const handleImageClick = (imageUrl) => {
     setSelectedImage(imageUrl);
     setModalShow(true);
   };
 
   const handleCloseModal = () => {
     setModalShow(false);
   };
   const getFavoritesHandler=async()=>{
      try {
         let res = await getFavorites(userData.userID)
         setFavoritesData(res.data)
      } catch (error) {
         verifyErrorMsg(error)
      }
   }  
   const removeFavoriteHandler =async(profileID)=>{
      try {
         let payload = {
            userID: userData.userID,
            profileID
          }
        await removeFavorite(payload)
         const filteredItem=favoriteData.filter(item => item.profileID !== payload.profileID)
       setFavoritesData(filteredItem)
      } catch (error) {
         verifyErrorMsg(error)
      }
   }
   useEffect(() => {
      getFavoritesHandler()
   }, [])
   
  return (
    <>

    <Banner bannerTitle="Favorites" classes="data-search"/>

    <section >
        <div className="container">
            <div className="row my-4">
                 <div className="col-lg-12">
                    <div className="login-text">
                        <h1 className="main-text text-start">Favorites</h1>
                   </div>
                   <div className="col-lg-12 my-5">
                    <div className="user-data-covers">
                     {
                        favoriteData.map(fav=>
                           <div style={{cursor:"pointer"}} className="user-box-covers  cross-relative" id="close1" key={fav.profileID}  
                           >
                            <div className="cross-icon" id="open3">
                           
                           <button className='btn cross-button' type='button' onClick={()=>removeFavoriteHandler(fav.profileID)}>
                              X
                           </button>
                           </div>
                           <div className="userimgcoves">
                                <div className="user-imgs">
                                   <img src={user} alt="" onClick={() => navigate(`/profile-data-locked/${fav.profileID}`)} style={{cursor:"pointer"}}/>
                                </div>
                                <div className="user-icon">
                                   <div className="icon-btns">
                                       <div className="import-icon" title={fav.info}><img src={important} alt=""  /></div>
                                       <div className="camera-icons">
                                       <PhotoProvider>
                          <PhotoView src={user}>
                            <img style={{cursor:"pointer"}} src={camera} alt="" />
                          </PhotoView>
                          </PhotoProvider>
                                          
                                          </div>
                                          
                                        <div className="user-a"><img src={anchor} alt="" /></div>
           
                                   </div>
                                </div>

                           </div>
                           <div onClick={() => navigate(`/profile-data-locked/${fav.profileID}`)} style={{cursor:"pointer"}}>
                           <div className="user-datas">
                                <div className="fistwrap">
                                   <h3 className="user-names">Name:</h3>
                                </div>
                                <div className="last-wrap"><h3 className="name-dres">{fav.profileName}</h3></div>
                           </div>
                         
                          <div className="user-datas">
                           <div className="fistwrap">
                              <h3 className="user-names">Country :</h3>
                           </div>
                           <div className="last-wrap"><h3 className="name-dres">{fav.countryName}</h3></div>
                      </div>
                      {/* <div className="user-datas">
                       <div className="fistwrap">
                          <h3 className="user-names">Position :</h3>
                       </div>
                       <div className="last-wrap"><h3 className="name-dres">Cease and Desist order issued for securities fraud - August 04,2008</h3></div>
                  </div> */}
                  <div className="user-datas">
                   <div className="fistwrap">
                      <h3 className="user-names">Class :</h3>
                   </div>
                   <div className="last-wrap"><h3 className="name-dres">{fav.classification}</h3>
                   </div>
                     </div>
                     <div className="user-datas">
                       <div className="fistwrap">
                          <h3 className="user-names">Gender :</h3>
                       </div>
                       <div className="last-wrap"><h3 className="name-dres">{fav.gender}</h3></div>
                  </div>
                       </div>
                       </div>
                           )
                     }
                        {/* <div className="user-box-covers cross-relative" id="close1">
                            <div className="cross-icon" id="open1">
                                 &#x2715
                            </div>
                            <div className="userimgcoves">
                                 <div className="user-imgs">
                                    <img src={user} alt="" />
                                 </div>
                                 <div className="user-icon">
                                    <div className="icon-btns">
                                        <div className="import-icon"><img src={important} alt="" /></div>
                                        <div className="camera-icons"><img src={camera} alt="" /></div>
                                         <div className="user-a"><img src={anchor} alt="" /></div>
            
                                    </div>
                                 </div>

                            </div>
                            <div className="user-datas">
                                 <div className="fistwrap">
                                    <h3 className="user-names">Name:</h3>
                                 </div>
                                 <div className="last-wrap"><h3 className="name-dres">Harris, Timothy</h3></div>
                            </div>
                          
                           <div className="user-datas">
                            <div className="fistwrap">
                               <h3 className="user-names">Country :</h3>
                            </div>
                            <div className="last-wrap"><h3 className="name-dres">United State</h3></div>
                       </div>
                       <div className="user-datas">
                        <div className="fistwrap">
                           <h3 className="user-names">Position :</h3>
                        </div>
                        <div className="last-wrap"><h3 className="name-dres">Cease and Desist order issued for securities fraud - August 04,2008</h3></div>
                   </div>
                   <div className="user-datas">
                    <div className="fistwrap">
                       <h3 className="user-names">Class :</h3>
                    </div>
                    <div className="last-wrap"><h3 className="name-dres">Enforcement</h3>
                    </div>
                      </div>
                      <div className="user-datas">
                        <div className="fistwrap">
                           <h3 className="user-names">Gender :</h3>
                        </div>
                        <div className="last-wrap"><h3 className="name-dres">Female</h3></div>
                   </div>
                        </div>
                        <div className="user-box-covers cross-relative" id="close2">
                            <div className="cross-icon" id="open2">
                                 &#x2715
                            </div>
                            <div className="userimgcoves">
                                 <div className="user-imgs">
                                    <img src={user} alt="" />
                                 </div>
                                 <div className="user-icon">
                                    <div className="icon-btns">
                                        <div className="import-icon"><img src={important} alt="" /></div>
                                        <div className="camera-icons"><img src={camera} alt="" /></div>
                                         <div className="user-a"><img src={anchor} alt="" /></div>
            
                                    </div>
                                 </div> 

                            </div>
                            <div className="user-datas">
                                 <div className="fistwrap">
                                    <h3 className="user-names">Name:</h3>
                                 </div>
                                 <div className="last-wrap"><h3 className="name-dres">Harris, Timothy</h3></div>
                            </div>
                          
                           <div className="user-datas">
                            <div className="fistwrap">
                               <h3 className="user-names">Country :</h3>
                            </div>
                            <div className="last-wrap"><h3 className="name-dres">United State</h3></div>
                       </div>
                       <div className="user-datas">
                        <div className="fistwrap">
                           <h3 className="user-names">Position :</h3>
                        </div>
                        <div className="last-wrap"><h3 className="name-dres">Cease and Desist order issued for securities fraud - August 04,2008</h3></div>
                   </div>
                   <div className="user-datas">
                    <div className="fistwrap">
                       <h3 className="user-names">Class :</h3>
                    </div>
                    <div className="last-wrap"><h3 className="name-dres">Enforcement</h3>
                    </div>
                      </div>
                      <div className="user-datas">
                        <div className="fistwrap">
                           <h3 className="user-names">Gender :</h3>
                        </div>
                        <div className="last-wrap"><h3 className="name-dres">Female</h3></div>
                   </div>
                        </div>
                        <div className="user-box-covers cross-relative" id="close3">
                            <div className="cross-icon" id="open3">
                                 &#x2715
                            </div>
                            <div className="userimgcoves">
                                 <div className="user-imgs">
                                    <img src={user} alt="" />
                                 </div>
                                 <div className="user-icon">
                                    <div className="icon-btns">
                                        <div className="import-icon"><img src={important} alt="" /></div>
                                        <div className="camera-icons"><img src={camera} alt="" /></div>
                                         <div className="user-a"><img src={anchor} alt="" /></div>
            
                                    </div>
                                 </div>

                            </div>
                            <div className="user-datas">
                                 <div className="fistwrap">
                                    <h3 className="user-names">Name:</h3>
                                 </div>
                                 <div className="last-wrap"><h3 className="name-dres">Harris, Timothy</h3></div>
                            </div>
                          
                           <div className="user-datas">
                            <div className="fistwrap">
                               <h3 className="user-names">Country :</h3>
                            </div>
                            <div className="last-wrap"><h3 className="name-dres">United State</h3></div>
                       </div>
                       <div className="user-datas">
                        <div className="fistwrap">
                           <h3 className="user-names">Position :</h3>
                        </div>
                        <div className="last-wrap"><h3 className="name-dres">Cease and Desist order issued for securities fraud - August 04,2008</h3></div>
                   </div>
                   <div className="user-datas">
                    <div className="fistwrap">
                       <h3 className="user-names">Class :</h3>
                    </div>
                    <div className="last-wrap"><h3 className="name-dres">Enforcement</h3>
                    </div>
                      </div>
                      <div className="user-datas">
                        <div className="fistwrap">
                           <h3 className="user-names">Gender :</h3>
                        </div>
                        <div className="last-wrap"><h3 className="name-dres">Female</h3></div>
                   </div>
                        </div>
                       */}

                    </div>
                    
                   </div>
                 </div>
              
            </div>
          
        </div>
    </section>
    {selectedImage && <ImageModal show={modalShow} imageUrl={selectedImage} onClose={handleCloseModal} /> }

    </>
  )
}

export default Favorites