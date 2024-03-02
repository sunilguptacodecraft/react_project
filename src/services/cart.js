import axios from "axios";

export const addToCart=async(data)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/AddToCart`, data);
}
export const getCart=async(userId)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetCart/${userId}`);
}

export const removeCart=async(data)=>{
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/RemoveFromCart/${data.userID}/${data.profileID}`);
}

export const buyNow=async(data)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/BuyNow`, data);
}

