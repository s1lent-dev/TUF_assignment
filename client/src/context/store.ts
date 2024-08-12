import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";

export const store = configureStore({
    reducer: {banner: bannerSlice},
});