import axios from "axios";

export const login=async(userData)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/Authentication/login`, userData);
}