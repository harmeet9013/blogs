import { default as styled } from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
//
import { useSettingsContext } from "@/settings/context";

export const BlogTitle = styled(Typography)(({ theme }) => ({
    transition: theme.transitions.create(),
    textAlign: "left",
    letterSpacing: "2px",
    fontWeight: "600",
}));

export const BlogImageBox = styled(Box)(({ theme }) => {
    const { isMobile } = useSettingsContext();

    return {
        transition: theme.transitions.create(),
        borderRadius: 50,
        width: "100%",
        height: isMobile ? "300px" : "500px",
        objectFit: "cover",
        pointerEvents: "none",
        border: `2px solid ${theme.palette.secondary.main}`,
    };
});

export const ActionButton = styled(Button)(({ theme }) => ({
    padding: `${theme.spacing(0.8)} ${theme.spacing(1.2)}`,
    borderRadius: 5,
    color: theme.palette.primary.main,
    transition: `${theme.transitions.create()} !important`,
    "&:hover": {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    },
}));
