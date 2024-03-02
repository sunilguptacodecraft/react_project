import axios from "axios";

export const searchByCriteria=async(payload)=>{
    let {name,gender,profileClass,country} = payload
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/SearchBasedOnCriteria?Name=${name}&Gender=${gender}&Class=${profileClass}&CountryCode=${country}`);
}

export const searchByProfileId=async(id)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/SearchBasedOnProfileID/${id}`);
}

export const searchByKeyword=async(keyword)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/SearchBasedOnKeyword/${keyword}`);
}
export const getProfileData=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetProfileDetail/1`);
}

export const getCategories=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetAllProfileCategories`);
}
export const getCountry=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetAllCountries`);
}
export const getProfileClassifications=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetAllProfileClassifications`);
}
export const saveSearch=async(data)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/SaveSearch`, data);
}
export const savedSearches=async(id)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetSavedSearches`,id);
}
export const removeSavedSearches=async(data)=>{
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/RemoveSavedSearch/${data.userId}/${data.savedSearchId}`);
}

export const getPurchasedProfiles=async(userId)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/PurchasedProfiles/${userId}`);
}
export const getPreferredProfiles=async(userId)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/Dashboard/${userId}`);
}

