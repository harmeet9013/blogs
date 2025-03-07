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
    authSliceActions,
    NavItem,
    useBoolean,
    UserProfilePopover,
} from "@/resources";

export const AdminUILayout = ({ children }) => {
    const { getSessionSelector } = authSliceActions;

    const muiTheme = useTheme();
    const showNav = useBoolean(true);
    const { NAV_DATA } = useNavData();
    const sessionData = useSelector(getSessionSelector);

    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <>
            <Container maxWidth="xl">
                <Stack
                    gap={2}
                    direction="row"
                    pt={muiTheme.spacing(DESIGN_CONFIG["HEADER"] + 2)}
                >
                    <Stack
                        position="relative"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        width={muiTheme.spacing(
                            showNav?.value ? DESIGN_CONFIG["NAV"] : 0
                        )}
                        sx={{
                            transition: muiTheme.transitions.create([
                                "width",
                                "border",
                            ]),
                        }}
                    >
                        <Stack
                            px={2}
                            top={0}
                            left={0}
                            width={1}
                            gap={4}
                            direction="row"
                            position="absolute"
                            alignItems="center"
                            justifyContent="space-between"
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
                                <Avatar>
                                    {sessionData?.user?.avatar ||
                                        sessionData?.user?.name
                                            ?.charAt(0)
                                            ?.toUpperCase()}
                                </Avatar>
                            </IconButton>
                        </Stack>

                        <Stack
                            mt={8}
                            gap={2}
                            minHeight="50dvh"
                            divider={<Divider />}
                            px={showNav?.value ? 2 : 0}
                            width={showNav?.value ? 1 : 0}
                            sx={{
                                overflow: "hidden",
                                borderRightStyle: "solid",
                                borderRightColor: muiTheme.palette.divider,
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

                    <Stack width={1} pt={10}>
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
