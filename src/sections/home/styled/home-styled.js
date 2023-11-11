import { useSettingsContext } from "@/settings/context";
import styled from "@emotion/styled";
import { Button, Card } from "@mui/material";
import { alpha } from "@mui/material/styles";

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

export const BlogButton = styled(Card)(({ theme }) => {
    const { isMobile } = useSettingsContext();

    return {
        borderRadius: 50,
        width: isMobile ? "100%" : theme.breakpoints.values.sm + 50,
        color: theme.palette.primary.main,
        backgroundColor: alpha(theme.palette.background.low, 0.5),
        gap: theme.spacing(2),
        "&:hover": {
            transform: "translateY(-0.5rem) !important",
        },
    };
});
