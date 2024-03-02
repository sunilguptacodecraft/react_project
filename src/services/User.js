import axios from "axios";

export const register=async(userData)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/RegisterNewUser`, userData)
}

export const updateUserProfile=async(data)=>{
    return await axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/UpdateUserProfile`,data)
}


export const getUserProfile=async(userId)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetUserById/${userId}`)
}

export const changePassword=async(data)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/ChangePassword`,data)
}


