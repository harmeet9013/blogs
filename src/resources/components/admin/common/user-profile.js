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
        router.push(PATHS["users"]["login"]);
    };

    return (
        <>
            <Menu
                open={anchorEl}
                onClose={onClose}
                anchorEl={anchorEl}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                slotProps={{
                    paper: {
                        elevation: 1,
                        sx: {
                            mt: 2,
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
                        <Typography variant="h6">
                            hey{" "}
                            <Typography
                                variant="inline"
                                fontWeight={500}
                                color="secondary"
                            >
                                {sessionData?.user?.name}
                            </Typography>
                        </Typography>
                    </Stack>

                    <Divider />

                    <MenuItem
                        color="error"
                        sx={{
                            gap: 1,
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                        onClick={handleLogout}
                    >
                        <LogoutRounded />
                        Logout
                    </MenuItem>
                </Stack>
            </Menu>
        </>
    );
};
