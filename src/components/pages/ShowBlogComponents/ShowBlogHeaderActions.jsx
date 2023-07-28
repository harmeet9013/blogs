import { Fragment } from "react";
import {
    ArrowBack,
    CheckCircle,
    Link,
    Edit,
    DeleteForever,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Divider, Paper, Stack, Tooltip } from "@mui/material";

export default function HeaderActions(props) {
    const navigate = useNavigate();

    const DividerSX = {
        borderBottomWidth: 4,
        borderRadius: "15px",
    };

    const handleCopyURL = async () => {
        props.setShowLoading(true);
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
        props.setShowLoading(false);
        setTimeout(() => {
            props.setIsCopied(false);
        }, 8000);
    };

    return (
        <Paper
            elevation={2}
            component={Stack}
            spacing={0}
            sx={{
                borderRadius: "15px",
                position: "sticky",
                top: "50%",
                marginLeft: "73%",
                width: "5rem",
                overflow: "hidden",
                opacity: "0.8",
                zIndex: "50",
            }}
        >
            <Tooltip title="Back" placement="right" disableInteractive>
                <props.HeaderButton
                    onClick={() => {
                        setTimeout(() => {
                            navigate("/");
                            props.setShowLoading(false);
                        }, 300);
                        props.setShowLoading(true);
                        props.setRefresh(true);
                    }}
                >
                    <ArrowBack color="icon" />
                </props.HeaderButton>
            </Tooltip>

            <Divider variant="middle" sx={DividerSX} />

            <Tooltip
                title={props.isCopied ? "Copied!" : "Copy Link"}
                placement="right"
                disableInteractive
            >
                <props.HeaderButton
                    onClick={handleCopyURL}
                    sx={{
                        backgroundColor: (theme) =>
                            props.isCopied && theme.palette.accent.success,
                    }}
                >
                    {props.isCopied ? (
                        <CheckCircle color="icon" />
                    ) : (
                        <Link color="icon" />
                    )}
                </props.HeaderButton>
            </Tooltip>

            {props.logged && (
                <Fragment>
                    <Divider variant="middle" sx={DividerSX} />

                    <Tooltip title="Edit" placement="right" disableInteractive>
                        <props.HeaderButton>
                            <Edit color="icon" />
                        </props.HeaderButton>
                    </Tooltip>

                    <Divider variant="middle" sx={DividerSX} />

                    <Tooltip
                        title="Delete Blog"
                        placement="right"
                        disableInteractive
                    >
                        <props.HeaderButton
                            onClick={async (e) => {
                                e.preventDefault();
                                props.setDialogInputs({
                                    open: true,
                                    title: "Delete blog",
                                    desc: "Are you sure you want to remove this blog?",
                                    button: true,
                                });
                            }}
                        >
                            <DeleteForever color="icon" />
                        </props.HeaderButton>
                    </Tooltip>
                </Fragment>
            )}
        </Paper>
    );
}
