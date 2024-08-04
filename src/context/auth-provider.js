"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
//
import Cookies from "js-cookie";
import PropTypes from "prop-types";
//
import axiosInstance, { endpoints } from "@/lib/axios";
//
import { authContext } from "./auth-context";

const initialState = {
    user: null,
    loading: false,
    authenticated: false,
};

const reducer = (state, action) => {
    console.log(action);
    if (action.type === "LOADING") {
        return {
            ...state,
            loading: true,
        };
    }
    if (action.type === "LOGIN") {
        return {
            ...state,
            user: action.payload.user,
            loading: false,
            authenticated: true,
        };
    }
    if (action.type === "LOGOUT") {
        return {
            ...state,
            user: null,
            loading: false,
            authenticated: false,
        };
    }
};

const setSessionToken = (token, userID) => {
    if (token && userID) {
        Cookies.set("token", token);
        Cookies.set("userID", userID);
    } else {
        Cookies.remove("token");
        Cookies.remove("userID");
    }
};

export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = useCallback(async () => {
        dispatch({
            type: "LOADING",
        });

        try {
            const token = Cookies.get("token");
            const userID = Cookies.get("userID");

            if (token && userID) {
                setSessionToken(token, userID);

                const response = await axiosInstance.post(
                    endpoints.users.verify_token_path
                );

                const userDetails = response.data;

                dispatch({
                    type: "LOGIN",
                    payload: {
                        user: userDetails,
                    },
                });
            } else {
                setSessionToken(null, null);

                dispatch({
                    type: "LOGOUT",
                    payload: {
                        user: null,
                    },
                });
            }
        } catch (error) {
            setSessionToken(null, null);

            dispatch({
                type: "LOGOUT",
                payload: {
                    user: null,
                },
            });
        }
    }, []);

    const login = useCallback(async (userData) => {
        dispatch({
            type: "LOADING",
        });

        setSessionToken(userData.token, userData.userID);

        dispatch({
            type: "LOGIN",
            payload: {
                user: userData,
            },
        });
    }, []);

    const logout = useCallback(async () => {
        dispatch({
            type: "LOADING",
        });

        setSessionToken(null, null);
        dispatch({
            type: "LOGOUT",
            payload: {
                user: null,
            },
        });
    }, []);

    const providerValues = useMemo(
        () => ({
            user: state.user,
            loading: state.loading ? true : false,
            authenticated: state.user ? true : false,
            //
            login,
            logout,
        }),
        [state.user, state.loading, login, logout]
    );

    useEffect(() => {
        initialize();
    }, []);

    return (
        <authContext.Provider value={providerValues}>
            {children}
        </authContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};
