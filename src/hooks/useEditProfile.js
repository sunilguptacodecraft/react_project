import { useState } from "react";
import { addProfile, uploadProfileImage } from "../services/Admin/add-profile";
import {
  editProfileDetail,
  getProfileDetail,
} from "../services/Admin/edit-profile";

const useEditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileId, setProfileId] = useState(null);
  const [fetchedVisaDetail, setFetchedVisaDetail]=useState([]);
  const [msg, setMsg] = useState("");

  const getVisaDetailhandler = async () => {
    let profileId=1
    const res = await getProfileDetail(profileId);
    setFetchedVisaDetail(res.data.profileVisas);
  };
  
  const editProfileHandler = async (payload) => {
    setIsLoading(true);
    try {
      let res = await editProfileDetail(payload);
      setProfileId(res.data.profileID);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const getProfileDetailHandler = async (file) => {
    setIsLoading(true);
    try {
      let res = await getProfileDetail();
      console.log("🚀 ~ getProfileImage ~ res:", res);
    } catch (error) {
      console.error("Error getting detail:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    editProfileHandler,
    getProfileDetailHandler,
    isLoading,
    setIsLoading,
    profileId,
    setProfileId,
    msg,
    setMsg,
    getVisaDetailhandler,
    fetchedVisaDetail
  };
};

export default useEditProfile;
