import axios from "axios";

export const saveOrderBillingInfo=async(data)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/SaveOrderBillingInfo`, data);
}
export const submitPaymentResponse=async(data)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/SubmitPaymentGetewayResponse`, data);
}
