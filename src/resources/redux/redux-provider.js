"use client";

import { Provider } from "react-redux";
//
import { reduxStore } from ".";

export const ReduxProvider = ({ children }) => {
    return <Provider store={reduxStore}>{children}</Provider>;
};
