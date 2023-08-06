import {
    BottomNavigation,
    BottomNavigationAction,
    Container,
    Divider,
    Grow,
    Paper,
    Stack,
} from "@mui/material";
import { ArrowBack, Save } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function HeaderActions(props) {
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

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            component={Container}
        >
            <Stack
                sx={{
                    position: "fixed",
                    bottom: props.isMobile ? 2 : 10,
                    margin: "10px 30px 10px 30px",
                    padding: props.isMobile ? 1 : "5px",
                    zIndex: "50",
                    borderRadius: "15px",
                    width: "20rem",
                    transition:
                        "transform 0.5s ease-out, background-color 0.2s ease",
                    backgroundColor: (theme) => theme.palette.backdrop,
                    backdropFilter: "blur(5px)",
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
                    <BottomNavigationAction
                        label="Discard"
                        icon={<ArrowBack color="icon" />}
                        onClick={() => {
                            props.setDialogInputs({
                                open: true,
                                title: "Discard changes?",
                                content:
                                    "Are you sure you want to go back? This will discard everything!",
                                navigate: "/blogs",
                                button: true,
                            });
                        }}
                    />
                    <Divider flexItem variant="middle" orientation="vertical" />
                    <BottomNavigationAction
                        label="Save"
                        icon={<Save color="icon" />}
                        onClick={() => {
                            props.setDialogInputs({
                                open: true,
                                title: "Submit Blog?",
                                content:
                                    "Are you sure you want to create the blog?",
                                navigate: "",
                                button: true,
                            });
                        }}
                    />
                </BottomNavigation>
            </Stack>
        </Stack>
    );
}
