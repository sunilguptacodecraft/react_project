import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  buyingDetails:{
  },cartDetails:{
  },
  paymentConfirmDetail:{}
}

export const buyingDetailsSlice = createSlice({
  name: 'buyingDetails',
  initialState,
  reducers: {
    setBuyingDetails: (state, action) => {
        state.buyingDetails = action.payload;
    },
    setCartInfo: (state, action) => {
        state.cartDetails = action.payload;
    }, 
    setPaymentDetails: (state, action) => {
        state.paymentConfirmDetail = action.payload;
    },
  },
})

export const {setBuyingDetails,setPaymentDetails,setCartInfo} = buyingDetailsSlice.actions

export default buyingDetailsSlice.reducer
