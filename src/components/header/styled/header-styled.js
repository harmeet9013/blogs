import styled from "@emotion/styled";
import { Avatar, Button, MenuItem, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Link from "next/link";

export const NavbarHomeButton = styled(Link)(({ theme }) => ({
    transition: theme.transitions.create(),
    textTransform: "none",
    color: theme.palette.primary.main,
    padding: "0.2rem 1.2rem",
    borderRadius: 40,
    fontSize: theme.typography.h3.fontSize,
    letterSpacing: 4,
    fontWeight: 600,
    border: "none",
    background: `linear-gradient(to left, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    "&:hover": {
        backgroundColor: "transparent",
    },
}));

export const HeaderContainer = styled(Stack)(({ theme }) => {
    return {
        overflow: "hidden",
        zIndex: 50,
        borderBottom: `2px solid ${theme.palette.divider}`,
        transition: theme.transitions.create(),
        backgroundColor: alpha(theme.palette.background.default, 0.95),
        WebkitBackfaceVisibility: "hidden",
        WebkitPerspective: "1000",
        WebkitTransform: "translate3d(0,0,0)",
        WebkitTransform: "translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: "1000",
        transform: "translate3d(0,0,0)",
        transform: "translateZ(0)",
        backdropFilter: "blur(6px)",
    };
});

// avatar on the header
export const MyAvatar = styled(Avatar)(({ theme }) => ({
    transition: theme.transitions.create(),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
}));

// menu items
export const MyMenuItem = styled(MenuItem)(({ theme, centered }) => ({
    width: "100%",
    fontWeight: 500,
    gap: theme.spacing(1),
    justifyContent: centered ? "center" : "flex-start",
    borderRadius: theme.spacing(2),
    color: theme.palette.primary.main,
    transition: theme.transitions.create(),
    fontSize: theme.typography.h6.fontSize,
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,

    "&:hover": {
        color: theme.palette.primary.contrastText,
        borderRadius: theme.spacing(3),
        backgroundColor: theme.palette.primary.main,
    },

    "&.Mui-selected": {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.main,
        },
    },
}));
