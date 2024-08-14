import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";

export const store = configureStore({
    reducer: {banner: bannerSlice},
});

export type RootState = ReturnType<typeof store.getState>;