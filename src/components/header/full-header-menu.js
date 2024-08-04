"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//
import {
    GitHub,
    LoginRounded,
    LogoutRounded,
    Person2Rounded,
    AddCircleRounded,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { Button, IconButton, Menu, Stack, Typography } from "@mui/material";
//
import { enqueueSnackbar } from "notistack";
//
import { useAuthContext } from "@/context";
//
import { ConfirmDialog } from "../custom-dialog";
//
import { MyAvatar, MyMenuItem } from "./styled/header-styled";
import { PATHS } from "@/config/paths";

export default function FullHeaderMenu() {
    const theme = useTheme();
    const router = useRouter();
    const { user, authenticated, logout } = useAuthContext();

    const [iconAnchor, setIconAnchor] = useState(null);
    const [logoutDialog, setLogoutDialog] = useState(false);
    const [sourceCodeDialog, setSourceCodeDialog] = useState(false);

    const handleScroll = () => {
        setIconAnchor(null);
    };

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
                    {...(authenticated
                        ? {
                              src: user?.avatar,
                          }
                        : {})}
                    sx={{
                        border: `2px solid ${theme.palette.primary.main}`,
                    }}
                >
                    <Person2Rounded />
                </MyAvatar>
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
                        sx: {
                            py: 1,
                            px: 1,
                            borderRadius: 6,
                        },
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
                                        px: 2,
                                        py: 1,
                                        opacity: 1,
                                        background: "transparent",
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
                        <MyMenuItem onClick={() => router.push(PATHS.login)}>
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
                        size="large"
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
                        size="large"
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
