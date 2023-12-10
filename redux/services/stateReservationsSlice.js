import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../context/AuthContext';

const initialState = {
  selectedMyServiceId: '',
  serviceId: '',
  ticketID: null,
  selectedOptionIds: {},
  customerData: null,
  isLoading: false,
  error: null, // Add error state to capture 404 errors
  isDark: false
  // isFound: false,
};
export const fetchCustomerData = createAsyncThunk(
  'reservationForm/fetchCustomerData',
  async (value, { dispatch, getState }) => {
    try {
      dispatch(stateReservationsSlice.actions.setLoading(true));
      dispatch(stateReservationsSlice.actions.setError(null)); // Clear any previous errors

      const response = await axios.get(`${API_URL}/auth/search/${value}`);
      const data = response.data;

      if (response.status === 200) {
        dispatch(stateReservationsSlice.actions.setError(false));
      }

      dispatch(stateReservationsSlice.actions.setLoading(false));

      return data;
    } catch (error) {
      dispatch(stateReservationsSlice.actions.setLoading(false));
      dispatch(stateReservationsSlice.actions.setError(true));

      // Handle other errors
      // You can log or handle other types of errors here
      throw error;
    }
  },
);

const stateReservationsSlice = createSlice({
  name: 'reservationForm',
  initialState,
  reducers: {
    addSelectedMyServiceId: (state, { payload }) => {
      {
        state.selectedMyServiceId = payload;
      }
    },
    addTicketId: (state, { payload }) => {
      {
        state.ticketID = payload;
      }
    },
    addServiceId: (state, { payload }) => {
      {
        state.serviceId = payload;
      }
    },
    addSelectedOptionIds: (state, { payload }) => {
      {
        state.addSelectedOptionIds = payload;
      }
    },
    clearCustomerData: state => {
      state.customerData = null;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setIsDark: (state, { payload }) => {
      state.isDark = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.customerData = action.payload;
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        // Handle error if needed
      });
  },
});

export const {
  clearCustomerData,
  addSelectedMyServiceId,
  addServiceId,
  addTicketId,
  addSelectedOptionIds,
  setLoading,
  setError,
  setIsDark
} = stateReservationsSlice.actions;
export const selectCustomerData = state => state.reservationForm.customerData; // Selector for accessing customer data

export default stateReservationsSlice.reducer;
