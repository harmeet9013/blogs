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
import { BLOG_LISTING_TAB_HEAD } from "@/config";

const initialState = {
    data: null,
    edit: null,
    selectedTab: BLOG_LISTING_TAB_HEAD?.at(0)?.value,
    pagination: { ...generatePaginationStates({ limit: 10 }) },
};

const storeName = "adminBlog";

const adminBlogSlice = createSlice({
    name: storeName,
    initialState,
    reducers: {
        ...generateReduxReducers("data"),
        ...generateReduxReducers("edit"),
        ...generateReduxReducers("selectedTab"),
        ...generatePaginationReducers(),
    },
    selectors: {
        ...generateReduxSelectors("data"),
        ...generateReduxSelectors("edit"),
        ...generateReduxSelectors("selectedTab"),
        ...generatePaginationSelectors(),
    },
});

export const adminBlogSliceReducer = adminBlogSlice.reducer;
export const adminBlogSliceActions = {
    ...adminBlogSlice.actions,
    ...adminBlogSlice.selectors,
};
