import { useEffect, useState } from "react";
import { Stack, Slide, Fade, styled, Button } from "@mui/material";

import HeaderActions from "./HeaderActions";
import { navigate } from "../CustomComponents";

export default function Header(props) {
    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    // BLOGS button that takes you to home page
    const NavbarHomeButton = styled(Button)(({ theme }) => ({
        transition: theme.transitions.create(),
        textTransform: "none",
        color: theme.palette.primary.main,
        padding: "0.2rem 1.2rem",
        fontSize: theme.typography.h5.fontSize,
        fontWeight: 500,
        borderRadius: 40,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
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
        <Slide direction="down" in={showHeader}>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                position="fixed"
                width="100%"
                overflow="hidden"
                zIndex="50"
                borderBottom={(theme) => `1px solid ${theme.palette.divider}`}
                sx={{
                    transition: (theme) => theme.transitions.create(),
                    backgroundColor: (theme) => theme.palette.background.header,
                    backdropFilter: "blur(10px)",
                }}
            >
                {/* Takes you to home page when you click on BLOGS */}

                <Fade in={true}>
                    <NavbarHomeButton
                        disableRipple
                        onClick={() => {
                            props.setShowLoading(true);
                            props.setRefresh(true);
                            setTimeout(() => {
                                navigate("/");
                            }, 200);
                        }}
                        sx={(theme) => ({
                            fontSize: theme.typography.h4.fontSize,
                            letterSpacing: props.isMobile ? 4 : 8,
                            fontWeight: "bold",
                            border: "none",
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                            background: `linear-gradient(to left, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        })}
                    >
                        BLOGS
                    </NavbarHomeButton>
                </Fade>

                <Fade in={true}>
                    <Stack direction="row" spacing={props.isMobile ? 1 : 3}>
                        <HeaderActions
                            isMobile={props.isMobile}
                            isLoggedIn={props.isLoggedIn}
                            systemTheme={props.systemTheme}
                            selectedTheme={props.selectedTheme}
                            NavbarHomeButton={NavbarHomeButton}
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
