// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// // import usered from './userRedux'
// import useredtwo from './UseModRedux'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'loginUSER',
//   version: 1,
//   storage,
// }

// const rootreducer = combineReducers({ userLogin:useredtwo})

// const persistedReducer = persistReducer(persistConfig, rootreducer)
// export const storeTwo = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export let persistor = persistStore(storeTwo);

