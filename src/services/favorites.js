import axios from "axios";

export const addToFavorite=async(data)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/AddFavorites`, data);

}

export const getFavorites=async(userId)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/GetfavoritesProfileData/${userId}`);
}

export const removeFavorite=async(data)=>{
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/RemoveFavorite/${data.userID}/${data.profileID}`);
}

