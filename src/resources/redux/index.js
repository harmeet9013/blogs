"use client";

import { configureStore } from "@reduxjs/toolkit";
//
import {
    authSliceReducer,
    blogSliceReducer,
    mediaSliceReducer,
    adminBlogSliceReducer,
} from "./slices";

export const reduxStore = configureStore({
    reducer: {
        blog: blogSliceReducer,
        auth: authSliceReducer,
        media: mediaSliceReducer,
        adminBlog: adminBlogSliceReducer,
    },
});

export * from "./slices";
export * from "./redux-provider";
