import axios from "axios"

export const getAllUsers=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetAllUsers`)
}
export const changeStatus=async(payload)=>{
    return await axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/ChangeUserStatus`, payload)
}
export const deleteUser=async(id)=>{
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/DeleteUserProfile/${id}`)
}
export const changePasswordByAdmin=async(data)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/ChangePasswordByAdmin`,data)
}
