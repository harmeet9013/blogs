import {
    Paper,
    Button,
    styled,
    Stack,
    useMediaQuery,
    ButtonGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import HeaderShowDialog from "./HeaderShowDialog";
import HeaderActions from "./HeaderActions";

export default function Header({
    darkMode,
    isLoggedIn,
    setDarkMode,
    setShowLoading,
    setRefresh,
    setIsLoggedIn,
    setSnackbarInputs,
}) {
    const navigate = useNavigate();

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const [menuOpen, setMenuOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);

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

    const MobileNavbarButton = styled(NavbarButton)(({ theme }) => ({
        fontSize: "18px",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    }));

    const DrawerButton = styled(MobileNavbarButton)(({ theme }) => ({
        padding: "20px 20px",
        margin: "0px 10px 0px 10px",
        borderRadius: "0px",
        justifyContent: "flex-end",
    }));

    const DialogButton = styled(Button)(({ theme }) => ({
        // border: `2px solid ${theme.palette.accent.secondary}`,
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        padding: isMobile ? "8px 15px" : "8px 20px",
        fontSize: "16px",
        "&:hover": {
            backgroundColor: theme.palette.accent.secondary,
        },
    }));

    const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
        backgroundColor: "transparent",
        borderRadius: "0px",
    }));

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Fragment>
            {/* Dialog component specifically for header usage */}
            <HeaderShowDialog
                dialogInputs={dialogInputs}
                DialogButton={DialogButton}
                isMobile={isMobile}
                setDialogInputs={setDialogInputs}
                setIsLoggedIn={setIsLoggedIn}
                setSnackbarInputs={setSnackbarInputs}
                setRefresh={setRefresh}
                setShowLoading={setShowLoading}
            />

            {/* Component that renders the header */}
            <Paper
                elevation={isTop ? 0 : 3}
                sx={{
                    position: "fixed",
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: isTop
                        ? "transparent"
                        : (theme) => theme.palette.background.header,
                    borderRadius: "0px",
                    padding: "0.5% 0% 0.5% 0%",
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    overflow: "hidden",
                    transition: "all 200ms ease",
                    zIndex: "99",
                }}
            >
                {/* Takes you to home page when you click on BLOGS */}

                <NavbarButton
                    onClick={() => {
                        setTimeout(() => {
                            navigate("/");
                            setMenuOpen(false);
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
                        logged={isLoggedIn.logged}
                        userName={isLoggedIn.name}
                        userAvatar={isLoggedIn.avatar}
                        darkMode={darkMode}
                        NavbarButton={NavbarButton}
                        setDarkMode={setDarkMode}
                        setShowLoading={setShowLoading}
                        setDialogInputs={setDialogInputs}
                    />
                </Stack>
            </Paper>
        </Fragment>
    );
}
