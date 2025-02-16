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
    pagination: { ...generatePaginationStates({ limit: 9 }) },
};

const storeName = "blog";

const blogSlice = createSlice({
    name: storeName,
    initialState,
    reducers: {
        ...generateReduxReducers("data"),
        ...generatePaginationReducers(),
    },
    selectors: {
        ...generateReduxSelectors("data"),
        ...generatePaginationSelectors(),
    },
});

export const blogSliceReducer = blogSlice.reducer;
export const blogSliceActions = {
    ...blogSlice.actions,
    ...blogSlice.selectors,
};
