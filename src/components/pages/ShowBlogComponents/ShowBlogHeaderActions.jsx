import {
    ArrowBack,
    CheckCircle,
    Link,
    Edit,
    DeleteForever,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
    BottomNavigation,
    BottomNavigationAction,
    Divider,
    Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

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

    return (
        <Stack
            sx={{
                position: "fixed",
                bottom: props.isMobile ? 2 : 10,
                margin: "10px 30px 10px 30px",
                padding: props.isMobile ? "2px" : "5px",
                zIndex: "50",
                borderRadius: "15px",
                backgroundColor: (theme) => theme.palette.backdrop,
                backdropFilter: "blur(5px)",
                width: props.isMobile
                    ? "90%"
                    : props.isLoggedIn.logged
                    ? "30rem"
                    : "20rem",
                transition:
                    "transform 0.5s ease-out, background-color 0.2s ease",
                border: (theme) => `1px solid ${theme.palette.action.disabled}`,
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
                <BottomNavigationAction
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
                    <BottomNavigationAction
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
                    <BottomNavigationAction
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
                <BottomNavigationAction
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
    );
}
