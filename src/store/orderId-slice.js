import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  orderId:undefined
}

export const orderIdSlice = createSlice({
  name: 'orderId',
  initialState,
  reducers: {
    setOrderId: (state, action) => {
        state.orderId = action.payload;
    },
  },
})

export const {setOrderId} = orderIdSlice.actions

export default orderIdSlice.reducer
