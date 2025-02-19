"use client";

import { configureStore } from "@reduxjs/toolkit";
//
import { authSliceReducer, blogSliceReducer } from "./slices";

export const reduxStore = configureStore({
    reducer: {
        blog: blogSliceReducer,
        auth: authSliceReducer,
    },
});

export * from "./slices";
export * from "./redux-provider";
