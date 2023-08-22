import {
    ArrowBack,
    CheckCircle,
    Edit,
    DeleteForever,
    Link,
} from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";
import { Fragment, useEffect, useState } from "react";
import { Button, Divider, Grow, Stack, styled } from "@mui/material";

export default function HeaderActions(props) {
    const navigate = useNavigate();
    const confirmDialog = useConfirm();

    // for the blog actions depending on the user's location
    const [headerSticky, setHeaderSticky] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
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
            setIsCopied(true);
        } catch (error) {
            setIsCopied(false);
            enqueueSnackbar("Could not copy link!", { variant: "error" });
        }
        setTimeout(() => {
            setIsCopied(false);
        }, 8000);
    };

    const ActionButton = styled(Button)(({ theme }) => ({
        padding: "10px ",
        color: theme.palette.text.primary,
        transition: theme.transitions.create(),
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
                    position={headerSticky ? "fixed" : "sticky"}
                    top={headerSticky && 0}
                    bottom={!headerSticky && "100px"}
                    width={props.isLoggedIn.logged ? "16rem" : "8rem"}
                    marginBottom="2rem"
                    zIndex={50}
                    borderRadius="30px"
                    overflow="hidden"
                    boxShadow="0 1px 5px rgba(0, 0, 0, 0.2)"
                    border={(theme) =>
                        `1px solid ${theme.palette.action.disabled}`
                    }
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
                    <ActionButton
                        onClick={(e) => {
                            e.preventDefault();
                            props.setShowLoading(true);
                            props.setRefresh(true);
                            navigate("/");
                        }}
                    >
                        <ArrowBack color="icon" />
                    </ActionButton>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    {props.isLoggedIn.logged && (
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
                        {isCopied ? (
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
