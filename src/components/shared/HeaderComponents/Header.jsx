import { useEffect, useState } from "react";
import { Stack, Slide, Fade } from "@mui/material";

import HeaderActions from "./HeaderActions";
import { NavbarHomeButton, navigate } from "../CustomComponents";

export default function Header(props) {
    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

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
        <Slide direction="down" in={showHeader}>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                position="fixed"
                width="100%"
                overflow="hidden"
                zIndex="50"
                borderBottom={(theme) => `2px solid ${theme.palette.divider}`}
                sx={{
                    transition: (theme) => theme.transitions.create(),
                    backgroundColor: (theme) => theme.palette.background.header,
                    backdropFilter: "blur(10px)",
                }}
            >
                {/* Takes you to home page when you click on BLOGS */}

                <Fade in={true}>
                    <NavbarHomeButton
                        onClick={() => {
                            props.setShowLoading(true);
                            props.setRefresh(true);
                            setTimeout(() => {
                                navigate("/");
                            }, 200);
                        }}
                        sx={{
                            fontSize: props.isMobile ? "1.8rem" : "2.2rem",
                            letterSpacing: props.isMobile ? 4 : 8,
                            fontWeight: "bold",
                            border: "none",
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                            background: (theme) =>
                                `linear-gradient(to right, ${theme.palette.icon.main}, ${theme.palette.accent.secondary})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Blogs
                    </NavbarHomeButton>
                </Fade>

                <Fade in={true}>
                    <Stack direction="row" spacing={props.isMobile ? 1 : 3}>
                        <HeaderActions
                            isMobile={props.isMobile}
                            isLoggedIn={props.isLoggedIn}
                            selectedTheme={props.selectedTheme}
                            setDarkMode={props.setDarkMode}
                            setIsLoggedIn={props.setIsLoggedIn}
                            setShowLoading={props.setShowLoading}
                            setSelectedTheme={props.setSelectedTheme}
                        />
                    </Stack>
                </Fade>
            </Stack>
        </Slide>
    );
}
