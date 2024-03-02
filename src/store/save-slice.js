import {createSlice} from '@reduxjs/toolkit'

const initialState = {

  search:{}
}

export const saveSlice = createSlice({
  name: 'save',
  initialState,
  reducers: {
    setSave: (state, action) => {
      state.search = action.payload;
    },
  },
})

export const {setSave} = saveSlice.actions

export default saveSlice.reducer
