"use client";

import PropTypes from "prop-types";
import { useState, useMemo } from "react";
import { globalContext } from "./global-context";

export default function GlobalContextProvider({ children }) {
    const [blogs, setBlogs] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    const providerValues = useMemo(
        () => ({
            blogs,
            showLoader,
            setBlogs,
            setShowLoader,
        }),
        [blogs, showLoader, setBlogs, setShowLoader]
    );

    return (
        <globalContext.Provider value={providerValues}>
            {children}
        </globalContext.Provider>
    );
}

GlobalContextProvider.propTypes = {
    children: PropTypes.node,
};
