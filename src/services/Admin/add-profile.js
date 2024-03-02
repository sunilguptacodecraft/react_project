import axios from "axios"

export const addProfile=async(payload)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/AddProfileData`, payload)
}

export const uploadProfileImage=async(file)=>{

    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/UploadProfileData`, file,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }},)
}

export const AddVisaInfo=async(payload)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/AddProfileVisa`, payload)
}

