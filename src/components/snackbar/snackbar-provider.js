"use client";

import { useRef } from "react";
//
import { IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { SnackbarProvider, closeSnackbar } from "notistack";
//
import PropTypes from "prop-types";
//
import { StyledMaterialDesignContent } from "./styles";

export default function NotisSnackbarProvider({ children }) {
    const notisRef = useRef();

    return (
        <SnackbarProvider
            maxSnack={3}
            ref={notisRef}
            variant="success"
            preventDuplicate
            autoHideDuration={5000}
            Components={{
                default: StyledMaterialDesignContent,
                info: StyledMaterialDesignContent,
                success: StyledMaterialDesignContent,
                warning: StyledMaterialDesignContent,
                error: StyledMaterialDesignContent,
            }}
            action={(snackbarId) => {
                return (
                    <IconButton
                        size="small"
                        sx={{ p: 0.5 }}
                        onClick={() => closeSnackbar(snackbarId)}
                    >
                        <CloseRounded />
                    </IconButton>
                );
            }}
        >
            {children}
        </SnackbarProvider>
    );
}

NotisSnackbarProvider.propTypes = {
    children: PropTypes.node,
};
