import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
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

export const NavbarButton = styled(Button)(({ theme }) => ({
    transition: theme.transitions.create(),
    textTransform: "none",
    color: theme.palette.primary.main,
    padding: "0.2rem 1.2rem",
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 500,
    borderRadius: 40,
    "&:hover": {
        backgroundColor: theme.palette.primary.container.main,
    },
}));

export const HeaderContainer = styled(Stack)(({ theme }) => {
    return {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "fixed",
        width: "100%",
        overflow: "hidden",
        zIndex: 50,
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: theme.transitions.create(),
        backgroundColor: alpha(theme.palette.background.default, 0.9),
        WebkitBackfaceVisibility: "hidden",
        WebkitPerspective: "1000",
        WebkitTransform: "translate3d(0,0,0)",
        WebkitTransform: "translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: "1000",
        transform: "translate3d(0,0,0)",
        transform: "translateZ(0)",
        backdropFilter: "blur(2px)",
    };
});
