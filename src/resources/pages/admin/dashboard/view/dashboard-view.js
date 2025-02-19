"use client";

import { useSelector } from "react-redux";
//
import { authSliceActions } from "@/resources";

export const DashboardView = () => {
    const { getSessionSelector } = authSliceActions;

    const sessionData = useSelector(getSessionSelector);

    console.log(sessionData);

    return <>hi world</>;
};
