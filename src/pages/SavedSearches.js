import React, {useEffect, useState} from 'react'
import  {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { fetchSearchByCriteria, fetchSearchByKeyword, fetchSearchByProfileId } from "../store/search-slice";

import { savedSearches, removeSavedSearches } from '../services/profile-search'
import { useErrorHandler } from '../hooks';
import Banner from '../components/Layout/Banner';
import SavedSearchItem from '../components/SavedSearchItem';

const SavedSearches = () => {
    const navigate=useNavigate()
    const [saved, setSaved] = useState([]);
   const { user:userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const {verifyErrorMsg} = useErrorHandler()
   
   const searchSavedHandle=(item)=>{
        if(item.searchType === "Criteria"){
            let criteriaFields=item.searchParams
             dispatch(fetchSearchByCriteria({criteriaFields}))
             navigate("/search-result")
        }else if(item.searchType === "ProfileId"){
            let profileId=item.searchParams.ProfileKey
             dispatch(fetchSearchByProfileId({profileId}))
             navigate("/search-result")
        }else if(item.searchType === "Keyword"){
            let keyword=item.searchParams.Keyword
             dispatch(fetchSearchByKeyword({keyword}))
             navigate("/search-result")
        }
   }

    const getSavedSearches=async()=>{
        try {
            const id=userData.userID
            const res= await savedSearches(id)
            setSaved(res.data)
        } catch (error) {
            verifyErrorMsg(error)
        }
    }
    const removeSavedSearch=async(id)=>{
        try {
            const data={
                userId: userData.userID,
                savedSearchId:id
            }
            await removeSavedSearches(data)
            const updatedSavedSearch= saved.filter(item=> item.saveSearchId !== id)
            setSaved(updatedSavedSearch)

        } catch (error) {
            verifyErrorMsg(error)
        }
    }
    useEffect(() => {
       getSavedSearches()
    }, []);
  return (
    
    <>
 

    <Banner bannerTitle="Saved Searches" classes="data-search"/>

    <section >
        <div className="container">
            <div className="row my-4">
                 <div className="col-lg-12">
                    <div className="login-text">
                        <h1 className="main-text text-start">Searches</h1>
                   </div>
                   <div className="col-lg-12 my-5">
                    <div className="user-data-covers">
						{saved && saved.map((item, index)=>(
                          <div className="favorites-box cross-relative" id="close1" key={index}>
                        <SavedSearchItem removeSavedSearch={removeSavedSearch} searchSavedHandle={searchSavedHandle} item={item} /></div>
                        ))}			
                        
                    </div>
                    
                   </div>
                 </div>
              
            </div>
          
        </div>
    </section>
    </>
  )
}

export default SavedSearches