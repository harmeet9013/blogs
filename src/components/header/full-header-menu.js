"use client";

import { Button, IconButton, Menu, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MyAvatar, MyMenuItem } from "./styled/header-styled";
import { useRouter } from "next/navigation";
import { useTheme } from "@emotion/react";
import {
    AddCircleRounded,
    GitHub,
    LoginRounded,
    LogoutRounded,
} from "@mui/icons-material";
import { ConfirmDialog } from "../custom-dialog";
import { useAuthContext } from "@/context";
import { enqueueSnackbar } from "notistack";

export default function FullHeaderMenu() {
    const theme = useTheme();
    const router = useRouter();
    const { user, authenticated, logout } = useAuthContext();

    const [iconAnchor, setIconAnchor] = useState(null);
    const [sourceCodeDialog, setSourceCodeDialog] = useState(false);
    const [logoutDialog, setLogoutDialog] = useState(false);

    const handleScroll = () => {
        setIconAnchor(null);
    };

    // scroll check
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [iconAnchor]);

    return (
        <>
            <IconButton onClick={(e) => setIconAnchor(e.currentTarget)}>
                <MyAvatar
                    src={authenticated && user?.avatar}
                    sx={{
                        border: `2px solid ${theme.palette.primary.main}`,
                    }}
                />
            </IconButton>

            <Menu
                open={Boolean(iconAnchor)}
                anchorEl={iconAnchor}
                onClose={() => setIconAnchor(null)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                disableScrollLock
                slotProps={{
                    paper: {
                        elevation: 0,
                    },
                }}
            >
                <Stack spacing={2}>
                    {authenticated ? (
                        <>
                            <MyMenuItem
                                disabled
                                sx={{
                                    "&.Mui-disabled": {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <MyAvatar
                                    src={user?.avatar}
                                    sx={{
                                        border: `2px solid ${theme.palette.primary.main}`,
                                    }}
                                />

                                <Stack
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={0}
                                >
                                    <Typography
                                        variant="caption"
                                        marginBottom={-1}
                                    >
                                        Hey,
                                    </Typography>
                                    {user?.name}
                                </Stack>
                            </MyMenuItem>

                            <MyMenuItem>
                                <AddCircleRounded /> New blog
                            </MyMenuItem>

                            <MyMenuItem
                                onClick={() => {
                                    setIconAnchor(null);
                                    setLogoutDialog(true);
                                }}
                            >
                                <LogoutRounded /> Logout
                            </MyMenuItem>
                        </>
                    ) : (
                        <MyMenuItem onClick={() => router.push("/login")}>
                            <LoginRounded /> Login
                        </MyMenuItem>
                    )}

                    <MyMenuItem
                        onClick={() => {
                            setIconAnchor(null);
                            setSourceCodeDialog(true);
                        }}
                    >
                        <GitHub /> Source Code
                    </MyMenuItem>

                    <Typography
                        align="center"
                        color="tertiary.main"
                        variant="body2"
                        px={4}
                        py={0}
                        sx={{
                            cursor: "default",
                        }}
                    >
                        Theming is <br /> now system based
                    </Typography>
                </Stack>
            </Menu>

            <ConfirmDialog
                open={sourceCodeDialog}
                onClose={() => setSourceCodeDialog(false)}
                title="Source Code"
                content="View source code on GitHub?"
                action={
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setSourceCodeDialog(false);
                            window.open("https://github.com/harmeet9013/blogs");
                        }}
                    >
                        Yes
                    </Button>
                }
            />

            <ConfirmDialog
                open={logoutDialog}
                onClose={() => setLogoutDialog(false)}
                title="Logout"
                content="Are you sure you want to logout?"
                action={
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setLogoutDialog(false);
                            logout();
                            enqueueSnackbar("You are now logged out!", {
                                variant: "info",
                            });
                        }}
                    >
                        Yes
                    </Button>
                }
            />
        </>
    );
}
