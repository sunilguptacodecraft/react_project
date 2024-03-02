import axios from "axios";

export const orderHistory=async(id)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetOrderHistory/${id}`, );
}

export const orderDetail=async(id)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetOrderDetail/${id}`, );
}