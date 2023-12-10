import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {apiAnalyticsSlice} from './services/apiAnalyticsSlice';
import {apiAuthSlice} from './services/apiAuthSlice';
import {apiReservationsSlice} from './services/apiReservationsSlice';
import {apiServicesSlice} from './services/apiServicesSlice';
import {apiStorageSlice} from './services/apiStorageSlice';
import authReducer from './services/authSlice';
import stateReservationsSliceReducer from './services/stateReservationsSlice';
import stateServiceSliceReducer from './services/stateServiceSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservationForm: stateReservationsSliceReducer,
    serviceForm: stateServiceSliceReducer,
    [apiServicesSlice.reducerPath]: apiServicesSlice.reducer,
    [apiReservationsSlice.reducerPath]: apiReservationsSlice.reducer,
    [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
    [apiAnalyticsSlice.reducerPath]: apiAnalyticsSlice.reducer,
    [apiStorageSlice.reducerPath]: apiStorageSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(apiServicesSlice.middleware)
      .concat(apiReservationsSlice.middleware)
      .concat(apiAuthSlice.middleware)
      .concat(apiAnalyticsSlice.middleware)
      .concat(apiStorageSlice.middleware),
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
