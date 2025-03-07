"use client";

import { createSlice } from "@reduxjs/toolkit";
//
import {
    generatePaginationReducers,
    generatePaginationSelectors,
    generatePaginationStates,
    generateReduxReducers,
    generateReduxSelectors,
} from "../factory";

const initialState = {
    data: null,
    edit: null,
    pagination: { ...generatePaginationStates({ limit: 10 }) },
};

const storeName = "adminBlog";

const adminBlogSlice = createSlice({
    name: storeName,
    initialState,
    reducers: {
        ...generateReduxReducers("data"),
        ...generateReduxReducers("edit"),
        ...generatePaginationReducers(),
    },
    selectors: {
        ...generateReduxSelectors("data"),
        ...generateReduxSelectors("edit"),
        ...generatePaginationSelectors(),
    },
});

export const adminBlogSliceReducer = adminBlogSlice.reducer;
export const adminBlogSliceActions = {
    ...adminBlogSlice.actions,
    ...adminBlogSlice.selectors,
};
