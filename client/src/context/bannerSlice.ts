import { createSlice } from "@reduxjs/toolkit";

export const bannerSlice = createSlice({
  name: "sheet",
  initialState: {
    bannerData: [],
  },

  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
  },
});

export const { setBannerData } = bannerSlice.actions;

export default bannerSlice.reducer;
