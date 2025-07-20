"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { LogoutRounded } from "@mui/icons-material";
import { Menu, Stack, Divider, MenuItem, Typography } from "@mui/material";
//
import { PATHS } from "@/config";
import { authSliceActions, logoutAPI, useSettingsContext } from "@/resources";

export const UserProfilePopover = ({ anchorEl, onClose }) => {
    const { getSessionSelector } = authSliceActions;

    const router = useRouter();
    const { updateSession } = useSettingsContext();
    const sessionData = useSelector(getSessionSelector);

    const handleLogout = async () => {
        await logoutAPI();
        await updateSession();
        router.push(PATHS["auth"]["login"]);
    };

    return (
        <>
            <Menu
                open={anchorEl}
                onClose={onClose}
                anchorEl={anchorEl}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                slotProps={{
                    paper: {
                        elevation: 10,
                        sx: {
                            mt: 2,
                            ml: -5,
                        },
                    },
                }}
            >
                <Stack gap={1} width={1}>
                    <Stack
                        px={2}
                        gap={1}
                        alignItems="flex-start"
                        justifyContent="flex-start"
                    >
                        <Typography variant="body1" fontWeight={300}>
                            hey <br />
                            <Typography
                                variant="h6"
                                fontWeight={600}
                                color="secondary"
                            >
                                {sessionData?.user?.name}
                            </Typography>
                        </Typography>
                    </Stack>

                    <Divider />

                    <MenuItem
                        color="error"
                        onClick={handleLogout}
                        sx={{
                            gap: 1,
                        }}
                    >
                        <LogoutRounded />
                        logout
                    </MenuItem>
                </Stack>
            </Menu>
        </>
    );
};
