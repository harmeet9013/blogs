import {
    ArrowBack,
    CheckCircle,
    Edit,
    DeleteForever,
    Link,
} from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Button, Divider, Grow, Stack, Tooltip, styled } from "@mui/material";
import {
    TooltipSX,
    confirmDialog,
    navigate,
} from "../../shared/CustomComponents";

export default function HeaderActions(props) {
    // for the blog actions depending on the user's location
    const [headerSticky, setHeaderSticky] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [animateButton, setAnimateButton] = useState(true);

    // small buttons that appear for solog blog and create blog components
    const ActionButton = styled(Button)(({ theme }) => ({
        padding: "0.6rem 2rem",
        color: theme.palette.primary.main,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
        },
    }));

    // intersection handling
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

    // copy the link function
    const handleCopyURL = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(window.location.href);
            setAnimateButton(false);

            setIsCopied(true);
            setAnimateButton(true);
        } catch (error) {
            enqueueSnackbar("Could not copy link!", { variant: "error" });

            setAnimateButton(false);

            setIsCopied(false);
            setAnimateButton(true);
        }
        setTimeout(() => {
            setAnimateButton(false);

            setIsCopied(false);
            setAnimateButton(true);
        }, 8000);
    };

    return (
        <Grow in={!props.showLoading}>
            <Stack
                direction="row"
                id="header-actions"
                sx={(theme) => ({
                    ...(headerSticky
                        ? {
                              position: "fixed",
                              top: 0,
                          }
                        : {
                              position: "sticky",
                              bottom: props.isMobile ? 100 : 50,
                          }),
                    width: props.isLoggedIn.logged ? "16rem" : "8rem",
                    zIndex: 50,
                    borderRadius: 50,
                    marginBottom: 4,
                    overflow: "hidden",
                    transition: theme.transitions.create(),
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.action.disabled}`,
                })}
            >
                <Tooltip
                    title="Back"
                    placement="top"
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
                        placement="top"
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
                        placement="top"
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
                    title={!isCopied && "Create Link"}
                    placement="top"
                    disableInteractive
                    componentsProps={TooltipSX}
                >
                    <ActionButton onClick={handleCopyURL}>
                        <Grow in={animateButton}>
                            {isCopied ? (
                                <CheckCircle
                                    sx={(theme) => ({
                                        color: theme.palette.tertiary.main,
                                    })}
                                />
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
