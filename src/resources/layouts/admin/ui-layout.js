"use client";

import {
    Avatar,
    Container,
    Divider,
    IconButton,
    Stack,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MenuRounded } from "@mui/icons-material";
//
import { DESIGN_CONFIG, useNavData } from "@/config";
import {
    NavItem,
    useBoolean,
    authSliceActions,
    UserProfilePopover,
    useSettingsContext,
} from "@/resources";

export const AdminUILayout = ({ children }) => {
    const { getSessionSelector } = authSliceActions;

    const { isTablet } = useSettingsContext();

    const muiTheme = useTheme();
    const { NAV_DATA } = useNavData();
    const showNav = useBoolean(!isTablet);
    const sessionData = useSelector(getSessionSelector);

    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <>
            <Container
                maxWidth="xl"
                sx={{
                    padding: 0,
                }}
            >
                <Stack
                    gap={2}
                    direction="row"
                    position="relative"
                    pt={muiTheme.spacing(DESIGN_CONFIG["HEADER"] + 2)}
                >
                    <Stack
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        width={muiTheme.spacing(
                            showNav?.value ? DESIGN_CONFIG["NAV"] : 0
                        )}
                        sx={{
                            top: 0,
                            left: 0,
                            position: "absolute",
                            zIndex: muiTheme.zIndex.drawer,
                            transition: muiTheme.transitions.create([
                                "width",
                                "border",
                            ]),
                        }}
                    >
                        <Stack
                            px={2}
                            width={1}
                            gap={4}
                            direction="row"
                            position="absolute"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{
                                left: 0,
                                top: muiTheme.spacing(DESIGN_CONFIG["HEADER"]),
                                background: muiTheme.palette.background.default,
                                borderBottom: `2px solid ${muiTheme.palette.divider}`,
                                borderBottomColor: showNav?.value
                                    ? muiTheme.palette.divider
                                    : "rgba(0, 0, 0, 0)",
                                transition: muiTheme.transitions.create([
                                    "border",
                                ]),
                                zIndex: muiTheme.zIndex.drawer + 1,
                            }}
                        >
                            <IconButton
                                variant="contained"
                                onClick={showNav.onToggle}
                                color={showNav?.value ? "default" : "primary"}
                            >
                                <MenuRounded />
                            </IconButton>

                            <IconButton
                                onClick={(event) => setAnchorEl(event.target)}
                            >
                                <Avatar
                                    sx={{
                                        color: muiTheme.palette.secondary
                                            .contrastText,
                                        background:
                                            muiTheme.palette.secondary.main,
                                    }}
                                >
                                    {sessionData?.user?.avatar ||
                                        sessionData?.user?.name
                                            ?.charAt(0)
                                            ?.toUpperCase()}
                                </Avatar>
                            </IconButton>
                        </Stack>

                        <Stack
                            gap={2}
                            minHeight={`calc(100dvh - ${muiTheme.spacing(
                                DESIGN_CONFIG["HEADER"] + 9
                            )})`}
                            divider={<Divider />}
                            px={showNav?.value ? 2 : 0}
                            width={showNav?.value ? 1 : 0}
                            sx={{
                                position: "absolute",
                                left: 0,
                                top: muiTheme.spacing(
                                    DESIGN_CONFIG["HEADER"] + 9
                                ),
                                overflow: "hidden",
                                borderRightStyle: "solid",
                                background: muiTheme.palette.background.default,
                                borderRightColor: showNav?.value
                                    ? muiTheme.palette.divider
                                    : "rgba(0, 0, 0, 0)",
                                borderRightWidth: showNav?.value ? 2 : 0,
                                transition: muiTheme.transitions.create([
                                    "width",
                                    "border",
                                    "padding",
                                ]),
                            }}
                        >
                            {NAV_DATA?.map((item, index) => (
                                <NavItem key={index} item={item} />
                            ))}
                        </Stack>
                    </Stack>

                    <Stack
                        width={1}
                        pt={10}
                        sx={{
                            transition: muiTheme.transitions.create([
                                "padding",
                            ]),
                            pl: muiTheme.spacing(
                                isTablet
                                    ? 0
                                    : showNav?.value
                                    ? DESIGN_CONFIG["NAV"]
                                    : 0
                            ),
                        }}
                    >
                        {children}
                    </Stack>
                </Stack>
            </Container>

            <UserProfilePopover
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
            />
        </>
    );
};
