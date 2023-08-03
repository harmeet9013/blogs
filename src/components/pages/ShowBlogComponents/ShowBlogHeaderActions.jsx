import { Fragment, useState } from "react";
import {
    ArrowBack,
    CheckCircle,
    Link,
    Edit,
    DeleteForever,
    List,
    CancelRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
    Backdrop,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
} from "@mui/material";
import Cookies from "js-cookie";

export default function HeaderActions(props) {
    const navigate = useNavigate();

    const [dialOpen, setDialOpen] = useState(false);

    const handleCopyURL = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            props.setIsCopied(true);
        } catch (error) {
            props.setIsCopied(false);
            props.setSnackbarInputs({
                open: true,
                message: "Sorry. Could not copy link.",
            });
        }
        setTimeout(() => {
            props.setIsCopied(false);
        }, 8000);
    };

    return (
        <Fragment>
            <Backdrop open={dialOpen} sx={{ zIndex: "60" }} />
            <SpeedDial
                ariaLabel="dialButton"
                sx={{
                    position: "fixed",
                    bottom: props.isMobile ? 40 : "10%",
                    right: props.isMobile ? 30 : "23%",
                    color: (theme) => theme.palette.action.hover,
                    zIndex: "60",
                }}
                FabProps={{
                    sx: {
                        bgcolor: (theme) => theme.palette.accent.secondary,
                        color: (theme) => theme.palette.text.primary,
                        "&:hover": {
                            bgcolor: (theme) => theme.palette.accent.primary,
                        },
                    },
                }}
                icon={
                    <SpeedDialIcon
                        icon={<List />}
                        openIcon={<CancelRounded />}
                    />
                }
                onOpen={() => {
                    setDialOpen(true);
                }}
                onClose={() => {
                    setDialOpen(false);
                }}
                open={dialOpen}
            >
                <SpeedDialAction
                    onClick={() => {
                        setTimeout(() => {
                            navigate("/blogs");
                            props.setShowLoading(false);
                        }, 300);
                        props.setShowLoading(true);
                        props.setRefresh(true);
                    }}
                    icon={<ArrowBack color="icon" />}
                    tooltipOpen
                    tooltipTitle="Back"
                />
                <SpeedDialAction
                    onClick={handleCopyURL}
                    icon={
                        props.isCopied ? (
                            <CheckCircle color="iconSuccess" />
                        ) : (
                            <Link color="icon" />
                        )
                    }
                    tooltipTitle={props.isCopied ? "Copied!" : "Link"}
                    tooltipOpen
                />

                <SpeedDialAction
                    onClick={() => {
                        setDialOpen(false);
                        !Cookies.get("token") ||
                            (!Cookies.get("userID") &&
                                props.setDialogInputs({
                                    open: true,
                                    title: "Login",
                                    desc: "You need to login to perform this action.",
                                    button: false,
                                }));
                    }}
                    icon={<Edit color="icon" />}
                    tooltipTitle="Edit"
                    tooltipOpen
                />
                <SpeedDialAction
                    onClick={(e) => {
                        e.preventDefault();
                        setDialOpen(false);
                        !Cookies.get("token") || !Cookies.get("userID")
                            ? props.setDialogInputs({
                                  open: true,
                                  title: "Login",
                                  desc: "You need to login to perform this action.",
                                  button: false,
                              })
                            : props.setDialogInputs({
                                  open: true,
                                  title: "Delete blog",
                                  desc: "Are you sure you want to remove this blog?",
                                  button: true,
                              });
                    }}
                    icon={<DeleteForever color="icon" />}
                    tooltipOpen
                    tooltipTitle="Delete"
                />
            </SpeedDial>
        </Fragment>
    );
}
