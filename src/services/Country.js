import axios from "axios";

export const countries=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_URL}/GetAllCountries`)

}