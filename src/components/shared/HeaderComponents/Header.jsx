import {
    Button,
    styled,
    Stack,
    useMediaQuery,
    Slide,
    Fade,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

import HeaderActions from "./HeaderActions";

export default function Header({
    darkMode,
    isLoggedIn,
    selectedTheme,
    setRefresh,
    setDarkMode,
    setIsLoggedIn,
    setShowLoading,
    setSelectedTheme,
}) {
    const navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const NavbarButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.text.primary,
        fontSize: isMobile ? "18px" : "24px",
        padding: "8px 20px",
        borderRadius: "15px",
        fontWeight: "500",
        "&:hover": {
            backgroundColor: theme.palette.accent.primary,
        },
    }));

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setShowHeader(
            currentScrollPos < 100 || prevScrollPos > currentScrollPos
        );
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <Fragment>
            {/* Dialog component specifically for header usage */}

            {/* Component that renders the header */}
            <Slide direction="down" in={showHeader}>
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    position="fixed"
                    width="100%"
                    overflow="hidden"
                    zIndex="50"
                    borderBottom={(theme) =>
                        `2px solid ${theme.palette.divider}`
                    }
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.background.header,
                        backdropFilter: "blur(10px)",
                        transition: (theme) => theme.transitions.create(),
                    }}
                >
                    {/* Takes you to home page when you click on BLOGS */}

                    <Fade in={true}>
                        <NavbarButton
                            onClick={() => {
                                setShowLoading(true);
                                setRefresh(true);
                                navigate("/");
                            }}
                            sx={{
                                fontSize: isMobile ? "1.8rem" : "2.2rem",
                                letterSpacing: isMobile ? 4 : 8,
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                background: (theme) =>
                                    `linear-gradient(to right, ${theme.palette.icon.main}, ${theme.palette.accent.secondary})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            BLOGS
                        </NavbarButton>
                    </Fade>

                    <Fade in={true}>
                        <Stack direction="row" spacing={isMobile ? 1 : 3}>
                            <HeaderActions
                                darkMode={darkMode}
                                isLoggedIn={isLoggedIn}
                                NavbarButton={NavbarButton}
                                selectedTheme={selectedTheme}
                                setDarkMode={setDarkMode}
                                setIsLoggedIn={setIsLoggedIn}
                                setShowLoading={setShowLoading}
                                setSelectedTheme={setSelectedTheme}
                            />
                        </Stack>
                    </Fade>
                </Stack>
            </Slide>
        </Fragment>
    );
}
