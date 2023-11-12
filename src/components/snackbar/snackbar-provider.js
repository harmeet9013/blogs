"use client";

import PropTypes from "prop-types";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { StyledMaterialDesignContent } from "./styles";

export default function NotisSnackbarProvider({ children }) {
    const notisRef = useRef();

    return (
        <SnackbarProvider
            ref={notisRef}
            maxSnack={3}
            autoHideDuration={5000}
            preventDuplicate
            variant="success"
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
                        onClick={() => closeSnackbar(snackbarId)}
                        sx={{ p: 0.5 }}
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
