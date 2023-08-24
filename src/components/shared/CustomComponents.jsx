import { Cancel, CheckCircle } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    IconButton,
    MenuItem,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";
import { green, grey, orange, red } from "@mui/material/colors";
import { useConfirm } from "material-ui-confirm";
import { MaterialDesignContent, enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export let navigate;
export let confirmDialog;
export let systemTheme;
export let DialogOptions;
export let TooltipSX;
export let TextFieldSX;

export let serverOffline;

export let StyledMaterialDesignContent;
export let NavbarHomeButton;
export let FooterButton;
export let MyMenuItem;
export let MyAvatar;
export let CustomButton;
export let BlogButton;
export let BlogsImageBox;
export let BlogTitle;
export let BlogImageBox;
export let ActionButton;
export let SocialIconButton;

export default function CustomComponents(props) {
    // navigation for going to other pages
    navigate = useNavigate();

    // dialog component call
    confirmDialog = useConfirm();

    // systemTheme (dynamic)
    systemTheme = useMediaQuery("(prefers-color-scheme: dark)") ? true : false;

    // dialog button SX object
    const DialogButtonSX = {
        color: (theme) => theme.palette.text.primary,
        backgroundColor: (theme) => theme.palette.action.hover,
        padding: "8px 15px",
        fontSize: "1rem",
        borderRadius: "15px",
        "&:hover": {
            backgroundColor: (theme) => theme.palette.accent.hover,
        },
    };

    // default config for dialog
    DialogOptions = {
        dialogProps: {
            maxWidth: "xs",
            disableScrollLock: true,

            PaperProps: {
                elevation: 0,
                sx: {
                    padding: "15px 0px 15px 0px",
                    justfifyContent: "center",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: (theme) => theme.palette.background.dialog,
                    transition: (theme) =>
                        `${theme.transitions.create()} !important`,
                },
            },
        },
        titleProps: {
            fontSize: "2.5rem",
        },
        contentProps: {
            sx: {
                fontSize: "1.2rem",
            },
        },
        confirmationButtonProps: {
            autoFocus: true,
            startIcon: <CheckCircle color="icon" />,
            sx: DialogButtonSX,
        },
        cancellationButtonProps: {
            startIcon: <Cancel color="icon" />,
            sx: DialogButtonSX,
        },
    };

    // tooltip custs
    TooltipSX = {
        tooltip: {
            sx: {
                backgroundColor: (theme) => theme.palette.accent.primary,
                color: (theme) => theme.palette.text.primary,
                fontSize: "0.8rem",
                borderRadius: "15px",
                transition: (theme) =>
                    `${theme.transitions.create()} !important`,
            },
        },
    };

    // TextField customizations
    TextFieldSX = {
        borderRadius: "15px",
        transition: (theme) => `${theme.transitions.create()} !important`,
        "&.Mui-focused": {
            backgroundColor: (theme) => theme.palette.action.hover,
        },
        "&.MuiOutlinedInput-root": {
            "& fieldset": {
                transition: (theme) => theme.transitions.create(),
                border: 2,
                borderColor: (theme) => theme.palette.action.disabled,
            },
            "&:hover fieldset": {
                borderColor: (theme) => theme.palette.text.primary,
            },
            "&.Mui-focused fieldset": {
                borderColor: (theme) => theme.palette.textField.main,
            },
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
            borderRadius: " 15px",
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
                backgroundColor: props.darkMode ? grey[900] : grey[300],
            },
        })
    );

    // BLOGS button that takes you to home page
    NavbarHomeButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.text.primary,
        padding: "8px 20px",
        fontSize: props.isMobile ? "18px" : "24px",
        fontWeight: "500",
        borderRadius: "15px",
        transition: theme.transitions.create(),
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));

    // footer buttons
    FooterButton = styled(NavbarHomeButton)(({ theme }) => ({
        fontSize: "16px",
        backgroundColor: theme.palette.background.button,
    }));

    // menu items
    MyMenuItem = styled(MenuItem)(({ theme }) => ({
        fontSize: "18px",
        width: "100%",
        padding: "15px 30px",
        gap: "10px",
        fontWeight: "500",
        justifyContent: "flex-start",
        transition: theme.transitions.create(),
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));

    // avatar on the header
    MyAvatar = styled(Avatar)(({ theme }) => ({
        transition: theme.transitions.create(),
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
    }));

    // global button used for various purposes
    CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.background.button,
        padding: "8px 20px",
        fontSize: "1.3rem",
        width: "100%",
        border: `2px solid ${theme.palette.action.disabled}`,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
            border: `2px solid ${theme.palette.accent.primary}`,
        },
    }));

    // big blog button
    BlogButton = styled(Button)(({ theme }) => ({
        transition: `${theme.transitions.create()}`,
        textTransform: "none",
        borderRadius: "15px",
        padding: props.isMobile ? "10px" : "20px 40px 20px 40px",
        flexDirection: "column",
        cursor: "pointer",
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.divider}`,
        gap: "20px",
        "&:hover": !props.isMobile && {
            backgroundColor: theme.palette.accent.hover,
            transform: "translateY(-0.5rem) !important",
            boxShadow: theme.shadows[4],
        },
    }));

    // blog image styles
    BlogsImageBox = styled(Box)(({ theme }) => ({
        transition: theme.transitions.create(),
        position: "relative",
        borderRadius: "15px",
        width: "100%",
        height: "300px",
        objectFit: "cover",
        pointerEvents: "none",
        border: `1px solid ${theme.palette.action.disabled}`,
    }));

    // blog title (solo blog)
    BlogTitle = styled(Typography)(({ theme }) => ({
        transition: theme.transitions.create(),
        textAlign: "left",
        letterSpacing: "2px",
        fontWeight: "600",
    }));

    // blog image (solo blog)
    BlogImageBox = styled(Box)(({ theme }) => ({
        transition: theme.transitions.create(),
        borderRadius: "15px",
        width: "100%",
        height: props.isMobile ? "300px" : "500px",
        objectFit: "cover",
        pointerEvents: "none",
    }));

    // small buttons that appear for solog blog and create blog components
    ActionButton = styled(Button)(({ theme }) => ({
        padding: "10px ",
        color: theme.palette.icon.main,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));

    SocialIconButton = styled(IconButton)(({ theme }) => ({
        transition: theme.transitions.create(),
        "&:hover": {
            transform: "translateY(-0.2rem)",
            color: theme.palette.icon.main,
            backgroundColor: theme.palette.accent.primary,
            boxShadow: theme.shadows[4],
        },
    }));

    return;
}
