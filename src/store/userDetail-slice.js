import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  changePasswordDetail: {
    userId: "",
    email: ""
  },
  userDetails:{
    userId:"",
    firstName:"",
    middleName:"",
    lastName:"",
    contactNo:"",
    email:""
  }
};

export const userDetailSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setChangePasswordDetail: (state, action) => {
      const { userId, email } = action.payload;
      state.changePasswordDetail.userId = userId;
      state.changePasswordDetail.email = email;
    },
    setUserDetail: (state, action) => {
      state.userDetails=  action.payload
      
    },
  },
});

export const { setChangePasswordDetail,setUserDetail } = userDetailSlice.actions;

export default userDetailSlice.reducer;
