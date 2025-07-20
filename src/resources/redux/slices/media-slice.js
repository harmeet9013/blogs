"use client";

import { createSlice } from "@reduxjs/toolkit";
//
import {
    generateReduxReducers,
    generateReduxSelectors,
    //
    generatePaginationStates,
    generatePaginationSelectors,
    generatePaginationReducers,
} from "../factory";

const initialState = {
    data: null,
    isLoading: false,

    // PAGINATION
    pagination: {
        ...generatePaginationStates({ limit: 30 }),
    },
};
const storeName = "media";

const slice = createSlice({
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

export const mediaSliceReducer = slice.reducer;
export const mediaSliceActions = {
    ...slice.actions,
    ...slice.selectors,
};
