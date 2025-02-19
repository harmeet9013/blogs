"use client";

import { createSlice } from "@reduxjs/toolkit";
//
import { generateReduxReducers, generateReduxSelectors } from "../factory";

const initialState = {
    session: null,
};

const storeName = "auth";

const authSlice = createSlice({
    name: storeName,
    initialState,
    reducers: {
        ...generateReduxReducers("session"),
    },
    selectors: {
        ...generateReduxSelectors("session"),
    },
});

export const authSliceReducer = authSlice.reducer;
export const authSliceActions = {
    ...authSlice.actions,
    ...authSlice.selectors,
};
