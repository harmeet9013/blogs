"use client";

import { configureStore } from "@reduxjs/toolkit";
//
import { blogSliceReducer } from "./slices";

export const reduxStore = configureStore({
    reducer: {
        blog: blogSliceReducer,
    },
});

export * from "./slices";
export * from "./redux-provider";
