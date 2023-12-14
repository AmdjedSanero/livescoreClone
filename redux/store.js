import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import favoritesReducer from '././services/favoritesSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()

});
setupListeners(store.dispatch);
export default store;

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import myServiceReducer from "./services/apiServicesSlice";
// const store = configureStore({
//   reducer: {
//     myServices: myServiceReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       immutableCheck: false,
//       serializableCheck: false,
//     }),
// });
// export default store;
