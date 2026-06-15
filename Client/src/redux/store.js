// import { configureStore } from '@reduxjs/toolkit'
// import studentReducer from "./features/studentSlice"
// import adminReducer from "./features/adminSlice"
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ["student"]
// }
// const persistConfigAdmin = {
//   key: 'root',
//   storage,
//   whitelist: ["admin"]
// }

// const persistedReducer = persistReducer(persistConfig, studentReducer)
// const persistedReducerAdmin = persistReducer(persistConfigAdmin, adminReducer)

// export const store = configureStore({
//   reducer: {
//     student: persistedReducer,
//     admin: persistedReducerAdmin
//   },
//   middleware: (getDefaultMiddleware)=>
//     getDefaultMiddleware({
//         serializableCheck: false
//     })
  
// })

// export const persistor = persistStore(store)


import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./features/studentSlice";
import adminReducer from "./features/adminSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const studentPersistConfig = {
  key: "student",
  storage,
};

const adminPersistConfig = {
  key: "admin",
  storage,
};

const persistedStudentReducer = persistReducer(
  studentPersistConfig,
  studentReducer
);

const persistedAdminReducer = persistReducer(
  adminPersistConfig,
  adminReducer
);

export const store = configureStore({
  reducer: {
    student: persistedStudentReducer,
    admin: persistedAdminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);