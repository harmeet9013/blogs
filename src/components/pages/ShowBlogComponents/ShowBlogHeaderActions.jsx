import {
    ArrowBack,
    CheckCircle,
    Edit,
    DeleteForever,
    Share,
    Link,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Grow, Stack, Tooltip, styled } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

export default function HeaderActions(props) {
    const navigate = useNavigate();

    // for the blog actions depending on the user's location
    const [headerSticky, setHeaderSticky] = useState(false);
    const handleIntersection = (entries) => {
        const [entry] = entries;
        setHeaderSticky(!entry.isIntersecting);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: [0],
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

    const ActionButton = styled(Button)(({ theme }) => ({
        transition: theme.transitions.create(),
        padding: "10px ",
        color: theme.palette.text.primary,
        "&:hover": {
            backgroundColor: !props.isMobile && theme.palette.accent.hover,
        },
    }));

    return (
        <Fragment>
            <Grow in={true}>
                <Stack
                    direction="row"
                    id="header-actions"
                    sx={{
                        position: headerSticky ? "fixed" : "sticky",
                        top: headerSticky && 0,
                        bottom: !headerSticky && "100px",
                        width: props.isLoggedIn.logged ? "16rem" : "8rem",
                        marginBottom: "2rem",
                        zIndex: "50",
                        borderRadius: "30px",
                        overflow: "hidden",
                        backdropFilter: "blur(5px)",
                        boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
                        transition: (theme) => theme.transitions.create(),
                        backgroundColor: (theme) =>
                            theme.palette.background.actions,
                        border: (theme) =>
                            `1px solid ${theme.palette.action.disabled}`,
                        "&:hover": {
                            backgroundColor: (theme) =>
                                theme.palette.background.default,
                        },
                    }}
                >
                    <ActionButton
                        onClick={(e) => {
                            e.preventDefault();
                            setTimeout(() => {
                                navigate("/");
                                props.setShowLoading(false);
                            }, 300);
                            props.setShowLoading(true);
                            props.setRefresh(true);
                        }}
                    >
                        <ArrowBack color="icon" />
                    </ActionButton>

                    <Divider orientation="vertical" variant="middle" flexItem />
                    {props.isLoggedIn.logged && (
                        <ActionButton
                            onClick={(e) => {
                                e.preventDefault();
                                props.isLoggedIn.logged
                                    ? props.setDialogInputs({
                                          open: true,
                                          title: "Edit",
                                          desc: "This action is in development.",
                                          button: false,
                                      })
                                    : props.setDialogInputs({
                                          open: true,
                                          title: "Login",
                                          desc: "You need to login to perform this action.",
                                          button: false,
                                      });
                            }}
                        >
                            <Edit color="icon" />
                        </ActionButton>
                    )}
                    {props.isLoggedIn.logged && (
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                        />
                    )}
                    {props.isLoggedIn.logged && (
                        <ActionButton
                            onClick={(e) => {
                                e.preventDefault();
                                props.isLoggedIn.logged
                                    ? props.setDialogInputs({
                                          open: true,
                                          title: "Delete blog",
                                          desc: "Are you sure you want to remove this blog?",
                                          button: true,
                                      })
                                    : props.setDialogInputs({
                                          open: true,
                                          title: "Login",
                                          desc: "You need to login to perform this action.",
                                          button: false,
                                      });
                            }}
                        >
                            <DeleteForever color="icon" />
                        </ActionButton>
                    )}
                    {props.isLoggedIn.logged && (
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                        />
                    )}

                    <ActionButton onClick={handleCopyURL}>
                        {props.isCopied ? (
                            <Grow in={true}>
                                <CheckCircle
                                    color="iconSuccess"
                                    sx={{
                                        animation: "come-on-in 0.5s ease-in",
                                        "@keyframes come-on-in": {
                                            "0%": {
                                                transform: "translateY(-100px)",
                                            },
                                            "50%": {
                                                transform: "translateY(5px)",
                                            },
                                            "65%": {
                                                transform: "translateY(-10px)",
                                            },
                                            "100%": {
                                                transform: "translateY(0px)",
                                            },
                                        },
                                    }}
                                />
                            </Grow>
                        ) : (
                            <Grow in={true}>
                                <Link color="icon" />
                            </Grow>
                        )}
                    </ActionButton>
                </Stack>
            </Grow>
        </Fragment>
    );
}
