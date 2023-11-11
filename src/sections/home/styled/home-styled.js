import { useSettingsContext } from "@/settings/context";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    color: theme.palette.primary.main,
    borderRadius: 40,
    backgroundColor: theme.palette.background.low,
    padding: "0.8rem 1.5rem",
    fontSize: theme.typography.h5.fontSize,
    width: "100%",
    border: `2px solid ${theme.palette.dividervar}`,
    transition: `${theme.transitions.create()} !important`,
    "&:hover": {
        backgroundColor: theme.palette.primary.container.main,
        border: `2px solid ${theme.palette.secondary.container.main}`,
    },
}));

// big blog button
export const BlogButton = styled(Button)(({ theme }) => {
    const { isMobile } = useSettingsContext();

    return {
        transition: `${theme.transitions.create()} !important`,
        textTransform: "none",
        borderRadius: 50,
        padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
        width: isMobile ? "100%" : theme.breakpoints.values.sm + 50,
        flexDirection: "column",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.low,
        gap: theme.spacing(2),
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
            transform: "translateY(-0.5rem) !important",
            boxShadow: theme.shadows[2],
        },
    };
});

// blog image styles
export const BlogsImageBox = styled(Box)(({ theme }) => ({
    transition: theme.transitions.create(),
    position: "relative",
    borderRadius: 50,
    width: "100%",
    height: "300px",
    objectFit: "cover",
    pointerEvents: "none",
    border: `1px solid ${theme.palette.secondary.container.main}`,
}));
