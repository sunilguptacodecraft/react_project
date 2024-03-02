import axios from "axios"

export const editProfileImage=async(id)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/ProfileImage/${id}`,)
}
export const editProfileDetail=async(payload)=>{
    return await axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/UpdateProfileData`,payload)
}
export const getProfileDetail=async(id)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetProfileDetail/${id}`)
}

// export const uploadProfileImage=async(file)=>{

//     return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/UploadProfileData`, file,{
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         }},)
// }

// export const AddVisaInfo=async(payload)=>{
//     return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/AddProfileVisa`, payload)
// }

