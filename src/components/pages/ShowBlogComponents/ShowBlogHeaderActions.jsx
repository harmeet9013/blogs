import {
    ArrowBack,
    CheckCircle,
    Edit,
    DeleteForever,
    Link,
} from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Divider, Grow, Stack, Tooltip } from "@mui/material";
import {
    ActionButton,
    TooltipSX,
    confirmDialog,
    navigate,
} from "../../shared/CustomComponents";

export default function HeaderActions(props) {
    // for the blog actions depending on the user's location
    const [headerSticky, setHeaderSticky] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [animateButton, setAnimateButton] = useState(true);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        setHeaderSticky(!entry.isIntersecting);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0,
        });

        const headerActions = document.getElementById("header-actions");

        if (headerActions) {
            observer.observe(headerActions);
        }

        return () => {
            if (headerActions) {
                observer.unobserve(headerActions);
            }
        };
    }, [headerSticky]);

    const handleCopyURL = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(window.location.href);
            setAnimateButton(false);
            setTimeout(() => {
                setIsCopied(true);
                setAnimateButton(true);
            }, 200);
        } catch (error) {
            enqueueSnackbar("Could not copy link!", { variant: "error" });

            setAnimateButton(false);
            setTimeout(() => {
                setIsCopied(false);
                setAnimateButton(true);
            }, 200);
        }
        setTimeout(() => {
            setAnimateButton(false);
            setTimeout(() => {
                setIsCopied(false);
                setAnimateButton(true);
            }, 200);
        }, 8000);
    };

    return (
        <Grow in={true}>
            <Stack
                direction="row"
                id="header-actions"
                position={headerSticky ? "fixed" : "sticky"}
                top={headerSticky && 0}
                bottom={!headerSticky && "100px"}
                width={props.isLoggedIn.logged ? "16rem" : "8rem"}
                marginBottom="2rem"
                zIndex={50}
                borderRadius="30px"
                overflow="hidden"
                boxShadow="0 1px 5px rgba(0, 0, 0, 0.1)"
                border={(theme) => `1px solid ${theme.palette.action.disabled}`}
                sx={{
                    backdropFilter: "blur(5px)",
                    transition: (theme) => theme.transitions.create(),
                    backgroundColor: (theme) =>
                        theme.palette.background.actions,
                    "&:hover": {
                        backgroundColor: (theme) =>
                            theme.palette.background.default,
                    },
                }}
            >
                <Tooltip
                    title="Back"
                    disableInteractive
                    componentsProps={TooltipSX}
                >
                    <ActionButton
                        onClick={(e) => {
                            e.preventDefault();
                            props.setShowLoading(true);
                            props.setRefresh(true);
                            setTimeout(() => {
                                navigate("/");
                                props.setShowLoading(false);
                            }, 200);
                        }}
                    >
                        <ArrowBack />
                    </ActionButton>
                </Tooltip>

                <Divider orientation="vertical" variant="middle" flexItem />

                {props.isLoggedIn.logged && (
                    <Tooltip
                        title="Edit"
                        disableInteractive
                        componentsProps={TooltipSX}
                    >
                        <ActionButton
                            onClick={(e) => {
                                e.preventDefault();
                                confirmDialog({
                                    title: "Edit",
                                    description:
                                        "This action is in development.",
                                    hideCancelButton: true,
                                })
                                    .then(() => {
                                        //
                                    })
                                    .catch(() => {
                                        //
                                    });
                            }}
                        >
                            <Edit />
                        </ActionButton>
                    </Tooltip>
                )}

                {props.isLoggedIn.logged && (
                    <Divider orientation="vertical" variant="middle" flexItem />
                )}

                {props.isLoggedIn.logged && (
                    <Tooltip
                        title="Delete"
                        disableInteractive
                        componentsProps={TooltipSX}
                    >
                        <ActionButton
                            onClick={(e) => {
                                e.preventDefault();
                                confirmDialog({
                                    title: "Delete blog",
                                    description:
                                        "Are you sure you want to delete this blog?",
                                    confirmationText: "Yes",
                                    cancellationText: "No",
                                })
                                    .then(props.deleteBlog)
                                    .catch(() => {
                                        //
                                    });
                            }}
                        >
                            <DeleteForever />
                        </ActionButton>
                    </Tooltip>
                )}

                {props.isLoggedIn.logged && (
                    <Divider orientation="vertical" variant="middle" flexItem />
                )}

                <Tooltip
                    title="Copy Link"
                    disableInteractive
                    componentsProps={TooltipSX}
                >
                    <ActionButton onClick={handleCopyURL}>
                        <Grow in={animateButton} unmountOnExit>
                            {isCopied ? (
                                <CheckCircle color="iconSuccess" />
                            ) : (
                                <Link />
                            )}
                        </Grow>
                    </ActionButton>
                </Tooltip>
            </Stack>
        </Grow>
    );
}
