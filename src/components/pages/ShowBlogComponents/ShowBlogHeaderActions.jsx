import {
    ArrowBack,
    CheckCircle,
    Link,
    Edit,
    DeleteForever,
    ArrowUpward,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
    BottomNavigation,
    BottomNavigationAction,
    Divider,
    Fab,
    Stack,
    styled,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";

export default function HeaderActions(props) {
    const navigate = useNavigate();

    const [showBottomNavigation, setShowBottomNavigation] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setShowBottomNavigation(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

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

    const ActionButton = styled(BottomNavigationAction)(({ theme }) => ({
        transition: "all 0.3s ease",
        borderRadius: 0,
        "&:hover": {
            backgroundColor: !props.isMobile && theme.palette.action.hover,
        },
    }));

    return (
        <Fragment>
            <Stack
                sx={{
                    position: "fixed",
                    bottom: props.isMobile ? 2 : 10,
                    margin: "10px 30px 10px 30px",
                    padding: props.isMobile ? "2px" : "5px",
                    zIndex: "50",
                    borderRadius: "15px",
                    backgroundColor: (theme) =>
                        theme.palette.background.actions,
                    backdropFilter: "blur(5px)",
                    width: props.isMobile
                        ? "90%"
                        : props.isLoggedIn.logged
                        ? "30rem"
                        : "20rem",
                    transition:
                        "transform 0.5s ease-out, background-color 0.2s ease",
                    border: (theme) =>
                        `1px solid ${theme.palette.action.disabled}`,
                    transform: !showBottomNavigation
                        ? "translateY(100px)"
                        : "translateY(0px)",
                    "&:hover": {
                        backgroundColor: (theme) =>
                            theme.palette.background.default,
                    },
                }}
            >
                <BottomNavigation
                    showLabels
                    sx={{
                        borderRadius: "15px",
                        overflow: "hidden",
                        transition: "all 0.5s ease",
                        backgroundColor: "transparent",
                        transform: !showBottomNavigation
                            ? "translateY(100px)"
                            : "translateY(0px)",
                    }}
                >
                    <ActionButton
                        label="Back"
                        icon={<ArrowBack color="icon" />}
                        onClick={() => {
                            setTimeout(() => {
                                navigate("/blogs");
                                props.setShowLoading(false);
                            }, 300);
                            props.setShowLoading(true);
                            props.setRefresh(true);
                        }}
                    />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    {props.isLoggedIn.logged && (
                        <ActionButton
                            label="Edit"
                            icon={<Edit color="icon" />}
                            onClick={() => {
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
                        />
                    )}
                    {props.isLoggedIn.logged && (
                        <ActionButton
                            label="Delete"
                            icon={<DeleteForever color="icon" />}
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
                        />
                    )}
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <ActionButton
                        label="Copy Link"
                        icon={
                            props.isCopied ? (
                                <CheckCircle color="iconSuccess" />
                            ) : (
                                <Link color="icon" />
                            )
                        }
                        onClick={handleCopyURL}
                    />
                </BottomNavigation>
            </Stack>
            <Fab
                sx={{
                    position: "fixed",
                    bottom: 25,
                    right: props.isMobile ? 30 : 50,
                    backgroundColor: (theme) => theme.palette.background.header,
                    transition:
                        "transform 0.5s ease-out, background-color 0.2s ease",
                    transform: showBottomNavigation
                        ? "translateY(100px)"
                        : "translateY(0px)",
                    "&:hover": {
                        backgroundColor: (theme) =>
                            theme.palette.background.actions,
                    },
                }}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            >
                <ArrowUpward color="icon" />
            </Fab>
        </Fragment>
    );
}
