import { Paper, Button, styled, Stack, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import HeaderShowDialog from "./HeaderShowDialog";
import HeaderActions from "./HeaderActions";

export default function Header({
    darkMode,
    isLoggedIn,
    verifyToken,
    updateThemeFromCookies,
    checkToken,
    setDarkMode,
    setShowLoading,
    setRefresh,
    setIsLoggedIn,
    setSnackbarInputs,
}) {
    const navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const [dialogInputs, setDialogInputs] = useState({
        open: false,
        title: "",
        content: "",
        navigate: "",
        icon: "",
    });

    const NavbarButton = styled(Button)(({ theme }) => ({
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        fontSize: isMobile ? "18px" : "24px",
        padding: "8px 20px",
        borderRadius: "15px",
        fontWeight: "600",
        "&:hover": {
            backgroundColor: theme.palette.accent.primary,
        },
    }));
    const DialogButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        padding: isMobile ? "8px 15px" : "8px 20px",
        fontSize: "16px",
        "&:hover": {
            backgroundColor: theme.palette.accent.secondary,
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

    useEffect(() => {
        verifyToken();
        updateThemeFromCookies();
    }, []);

    return (
        <Fragment>
            {/* Dialog component specifically for header usage */}
            <HeaderShowDialog
                dialogInputs={dialogInputs}
                DialogButton={DialogButton}
                isMobile={isMobile}
                checkToken={checkToken}
                setDialogInputs={setDialogInputs}
                setIsLoggedIn={setIsLoggedIn}
                setSnackbarInputs={setSnackbarInputs}
                setRefresh={setRefresh}
                setShowLoading={setShowLoading}
            />

            {/* Component that renders the header */}
            <Stack
                sx={{
                    position: "fixed",
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "transparent",
                    backdropFilter: "blur(5px)",
                    borderRadius: "0px",
                    padding: "0.5% 0% 0.5% 0%",
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    overflow: "hidden",
                    transition: "all 0.3s ease-out",
                    zIndex: "50",
                    borderBottom: (theme) =>
                        `1px solid ${theme.palette.action.disabled}`,
                    transform: !showHeader
                        ? "translateY(-100px)"
                        : "translateY(0px)",
                }}
            >
                {/* Takes you to home page when you click on BLOGS */}

                <NavbarButton
                    onClick={() => {
                        setTimeout(() => {
                            navigate("/blogs");
                        }, 200);
                        setShowLoading(true);
                        setRefresh(true);
                    }}
                    sx={{
                        fontSize: isMobile ? "28px" : "35px",
                        letterSpacing: isMobile ? "4px" : "8px",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    BLOGS
                </NavbarButton>

                <Stack direction="row" spacing={isMobile ? 1 : 3}>
                    <HeaderActions
                        isLoggedIn={isLoggedIn}
                        darkMode={darkMode}
                        NavbarButton={NavbarButton}
                        setDarkMode={setDarkMode}
                        setShowLoading={setShowLoading}
                        setDialogInputs={setDialogInputs}
                    />
                </Stack>
            </Stack>
        </Fragment>
    );
}
