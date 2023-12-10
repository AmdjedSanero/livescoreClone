import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAdrressData: {},
};

const stateServiceSlice = createSlice({
  name: "serviceForm",
  initialState,
  reducers: {
    addSelectedAdrressData: (state, { payload }) => {
      {
        state.selectedAdrressData = payload;
      }
    },
    clearSelectedAdrressData: (state) => {
      state.selectedAdrressData = null;
    },
  },
});

export const { addSelectedAdrressData, clearSelectedAdrressData } =
  stateServiceSlice.actions;

export default stateServiceSlice.reducer;
