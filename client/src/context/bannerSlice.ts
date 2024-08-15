import { createSlice } from "@reduxjs/toolkit";

export const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    timerState: {},
    bannerData: {}
  },

  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setTimerState: (state, action) => {
      state.timerState = action.payload;
    }
  },
});

export const { setBannerData, setTimerState } = bannerSlice.actions;

export default bannerSlice.reducer;
