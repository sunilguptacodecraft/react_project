import {  useState } from "react";
import { AddVisaInfo, addProfile,uploadProfileImage } from "../services/Admin/add-profile";

const useAddVisa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [visaMsg, setVisaMsg] = useState("");
  const [visaInfo, setVisaInfo] = useState({
    userId: "",
    profileId: "",
    visaNumber: "",
    visaIssueDate: "",
    visaExpiryDate: "",
    visaCountryId: "",
  });

  const addVisaHandler = async (payload) => {
    setIsLoading(true);
    try {
      let res = await AddVisaInfo(payload);
      setVisaMsg(res.data.insertMessage)
    } catch (error) {
      console.error("Error adding visa info:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setVisaMsg("")
        
      }, 2000);
    }
  };

  return { addVisaHandler, isLoading, setIsLoading , setVisaInfo, visaInfo,visaMsg}; 
};

export default useAddVisa;
