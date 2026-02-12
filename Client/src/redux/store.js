import { configureStore } from '@reduxjs/toolkit'
import studentReducer from "./features/studentSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["student"]
}

const persistedReducer = persistReducer(persistConfig, studentReducer)

export const store = configureStore({
  reducer: {
    student: persistedReducer
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false
    })
  
})

export const persistor = persistStore(store)