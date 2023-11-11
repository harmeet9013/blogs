import { useSettingsContext } from "@/settings/context";
import { default as styled } from "@emotion/styled";
import { Box, Typography } from "@mui/material";

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
        border: `2px solid ${theme.palette.secondary.container.main}`,
    };
});