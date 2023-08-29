import { useNavigate } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";
import { Button, IconButton, styled } from "@mui/material";
import { green, orange, red } from "@mui/material/colors";
import { MaterialDesignContent, enqueueSnackbar } from "notistack";

export let navigate;
export let confirmDialog;
export let TooltipSX;

export let serverOffline;

export let StyledMaterialDesignContent;
export let CustomButton;

export default function CustomComponents(props) {
    // navigation for going to other pages
    navigate = useNavigate();

    // dialog component call
    confirmDialog = useConfirm();

    // tooltip custs
    TooltipSX = {
        tooltip: {
            sx: (theme) => ({
                backgroundColor: theme.palette.tertiary.fixed.on,
                color: theme.palette.tertiary.fixed.main,
                fontSize: theme.typography.caption.fontSize,
                borderRadius: 10,
                padding: "0.5rem 1rem",
                transition: `${theme.transitions.create()} !important`,
            }),
        },
    };

    // ------------------
    // ----FUNCTIONAL----
    // ------------------

    // server offline snackbar
    serverOffline = () => {
        enqueueSnackbar("Server Offline!", { variant: "info" });
    };

    // ------------------
    // ------STYLED------
    // ------------------

    // snackbar customizations
    StyledMaterialDesignContent = styled(MaterialDesignContent)(
        ({ theme }) => ({
            color: theme.palette.text.primary,
            borderRadius: 20,
            transition: (theme) => `${theme.transitions.create()} !important`,
            "&.notistack-MuiContent-success": {
                backgroundColor: props.darkMode ? green[900] : green[300],
            },
            "&.notistack-MuiContent-error": {
                backgroundColor: props.darkMode ? red[900] : red[300],
            },
            "&.notistack-MuiContent-warning": {
                backgroundColor: props.darkMode ? orange[900] : orange[300],
            },
            "&.notistack-MuiContent-info": {
                color: theme.palette.tertiary.main,
                backgroundColor: theme.palette.background.high,
            },
        })
    );

    // global button used for various purposes
    CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 40,
        backgroundColor: theme.palette.background.low,
        padding: "0.6rem",
        fontSize: theme.typography.h5.fontSize,
        width: "100%",
        border: `2px solid ${theme.palette.dividervar}`,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
            border: `2px solid ${theme.palette.primary.main}`,
        },
    }));

    return;
}
