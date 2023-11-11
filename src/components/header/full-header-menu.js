"use client";

import { Button, IconButton, Menu, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { MyAvatar, MyMenuItem } from "./styled/header-styled";
import { useRouter } from "next/navigation";
import { useTheme } from "@emotion/react";
import { GitHub, LoginRounded } from "@mui/icons-material";
import { ConfirmDialog } from "../custom-dialog";

export default function FullHeaderMenu() {
    const theme = useTheme();
    const router = useRouter();

    const [iconAnchor, setIconAnchor] = useState(null);
    const [sourceCodeDialog, setSourceCodeDialog] = useState(false);

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
                <MyAvatar />
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
                    <MyMenuItem onClick={() => router.push("/login")}>
                        <LoginRounded /> Login
                    </MyMenuItem>
                    <MyMenuItem
                        onClick={() => {
                            setIconAnchor(null);
                            setSourceCodeDialog(true);
                        }}
                    >
                        <GitHub /> Source Code
                    </MyMenuItem>
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
                        Sure
                    </Button>
                }
            />
        </>
    );
}
