"use client";

import { configureStore } from "@reduxjs/toolkit";
//
import {
    authSliceReducer,
    blogSliceReducer,
    adminBlogSliceReducer,
} from "./slices";

export const reduxStore = configureStore({
    reducer: {
        blog: blogSliceReducer,
        auth: authSliceReducer,
        adminBlog: adminBlogSliceReducer,
    },
});

export * from "./slices";
export * from "./redux-provider";
