import {configureStore} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import authReducer from './auth-slice';
import searchReducer from './search-slice';
import saveReducer from './save-slice';
import buyingDetailsReducer from './buyingDetails-slice';
import orderIdReducer  from './orderId-slice';
import userDetailReducer  from './userDetail-slice';

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  auth: authReducer,
  search: searchReducer,
  saveSearch:saveReducer,
  buyingDetails:buyingDetailsReducer,
  orderId:orderIdReducer,
  userDetail: userDetailReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


