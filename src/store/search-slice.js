import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { getPreferredProfiles, searchByCriteria, searchByKeyword, searchByProfileId } from '../services/profile-search'

export const fetchSearchByCriteria = createAsyncThunk(
  'search/fetchSearchByCriteria',
  async (data, thunkAPI) => {
    try {
      const response = await searchByCriteria(data)

      return {data: response.data}
    } catch (error) {}
  }
)
export const fetchSearchByProfileId = createAsyncThunk(
  'search/fetchSearchByProfileId',
  async (data, thunkAPI) => {
    try {
      const response = await searchByProfileId(data.profileId)

      return {data: response.data}
    } catch (error) {}
  }
)
export const fetchSearchByKeyword = createAsyncThunk(
  'search/fetchSearchByKeyword',
  async (data, thunkAPI) => {
    try {
      const response = await searchByKeyword(data.keyword);
      return {data: response.data}
    } catch (error) {}
  }
)
export const fetchPreferredProfiles = createAsyncThunk(
  'search/fetchPreferredProfiles',
  async (data, thunkAPI) => {
    try {
      const response = await getPreferredProfiles(data.userId);
      return {data: response.data}
    } catch (error) {}
  }
)

const initialState = {
  entities: {},
  loading: false,
  errors: {},
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFilteredSearch: (state, action) => {
      state.entities = action.payload
    
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchByCriteria.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchSearchByCriteria.fulfilled, (state, action) => {
      state.entities = action.payload
      state.loading = false
    })
    builder.addCase(fetchSearchByCriteria.rejected, (state, action) => {
      state.loading = false
      state.errors = action.payload
    })
    builder.addCase(fetchSearchByProfileId.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchSearchByProfileId.fulfilled, (state, action) => {
      state.entities = action.payload
      state.loading = false
    })
    builder.addCase(fetchSearchByProfileId.rejected, (state, action) => {
      state.loading = false
      state.errors = action.payload
    })

    builder.addCase(fetchSearchByKeyword.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(fetchSearchByKeyword.fulfilled, (state, action) => {
        state.entities = action.payload
        state.loading = false
      })
      builder.addCase(fetchSearchByKeyword.rejected, (state, action) => {
        state.loading = false
        state.errors = action.payload
      }) 
      
      builder.addCase(fetchPreferredProfiles.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(fetchPreferredProfiles.fulfilled, (state, action) => {
        state.entities = action.payload
        state.loading = false
      })
      builder.addCase(fetchPreferredProfiles.rejected, (state, action) => {
        state.loading = false
        state.errors = action.payload
      })
  },
})

export const {setFilteredSearch} = searchSlice.actions;
export default searchSlice.reducer
