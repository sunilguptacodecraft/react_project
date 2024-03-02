import {  useState } from "react";
import { addProfile,uploadProfileImage } from "../services/Admin/add-profile";

const useAddProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileId, setProfileId] = useState(null);

  const addProfileHandler = async (payload) => {
    setIsLoading(true);
    try {
      let res = await addProfile(payload);
      setProfileId(res.data.profileID)
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const uploadProfileImageHandler = async (file) => {

    setIsLoading(true);
    try {
      let res = await uploadProfileImage(file);
      console.log("🚀 ~ changeProfileImage ~ res:", res);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { addProfileHandler,uploadProfileImageHandler, isLoading, setIsLoading, profileId, setProfileId }; 
};

export default useAddProfile;
