import styled from "@emotion/styled";
import { MaterialDesignContent } from "notistack";

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
    ({ theme }) => ({
        color: theme.palette.text.primary,
        transition: (theme) => `${theme.transitions.create()} !important`,
        "&.notistack-MuiContent-success": {
            borderRadius: theme.spacing(5),
        },
        "&.notistack-MuiContent-error": {
            borderRadius: theme.spacing(5),
        },
        "&.notistack-MuiContent-warning": {
            borderRadius: theme.spacing(5),
        },
        "&.notistack-MuiContent-info": {
            borderRadius: theme.spacing(5),
            backgroundColor: theme.palette.background.high,
        },
    })
);
