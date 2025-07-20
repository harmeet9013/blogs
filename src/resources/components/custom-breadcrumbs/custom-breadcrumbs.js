"use client";

import {
    Box,
    Link,
    Stack,
    Button,
    Tooltip,
    useTheme,
    Typography,
    Breadcrumbs,
} from "@mui/material";
import {
    ChevronLeftRounded,
    FiberManualRecordRounded,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
//
import { bgBlur } from "@/resources";
import { DESIGN_CONFIG } from "@/config";
//
import { BreadcrumbsLink } from "./link-item";

export const CustomBreadcrumbs = ({
    action,
    heading,
    moreLink,
    activeLast,
    links = [],
    disableSticky = false,
    sx,
    filtersRow,
    ...other
}) => {
    const router = useRouter();
    const muiTheme = useTheme();
    const lastLink = links[links?.length - 1]?.name;

    return (
        <Box
            sx={{
                py: 2,
                ...(!disableSticky
                    ? {
                          position: "sticky",
                          zIndex: muiTheme.zIndex.appBar - 1,
                          top: muiTheme.spacing(DESIGN_CONFIG["HEADER"]),
                          ...bgBlur({
                              color: muiTheme.palette.background.default,
                          }),
                      }
                    : {}),
                ...sx,
            }}
        >
            <Stack direction="row" alignItems="center">
                <Box sx={{ flexGrow: 1 }}>
                    {/* HEADING */}
                    {heading && (
                        <Typography variant="h3" fontWeight={500} gutterBottom>
                            {heading}
                        </Typography>
                    )}

                    {!!links.length && (
                        <Breadcrumbs
                            separator={
                                <FiberManualRecordRounded
                                    sx={{
                                        fontSize: muiTheme.spacing(1),
                                    }}
                                />
                            }
                            {...other}
                        >
                            {typeof window !== undefined &&
                                links?.length > 1 &&
                                window.history.length > 0 && (
                                    <Tooltip title="Back" disableInteractive>
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                if (
                                                    !!links[links?.length - 2]
                                                        ?.href
                                                ) {
                                                    router.push(
                                                        links[links?.length - 2]
                                                            ?.href
                                                    );
                                                } else {
                                                    router.back();
                                                }
                                            }}
                                            sx={{
                                                p: 1,
                                                width: "auto",
                                                minWidth: "auto",
                                            }}
                                        >
                                            <ChevronLeftRounded />
                                        </Button>
                                    </Tooltip>
                                )}
                            {links?.map((link) => (
                                <BreadcrumbsLink
                                    link={link}
                                    key={link.name || ""}
                                    activeLast={activeLast}
                                    disabled={link.name === lastLink}
                                />
                            ))}
                        </Breadcrumbs>
                    )}
                </Box>

                {action && (
                    <Stack
                        gap={2}
                        flexWrap="wrap"
                        direction="row"
                        alignItems="center"
                    >
                        {action}
                    </Stack>
                )}
            </Stack>

            {/* MORE LINK */}
            {!!moreLink && (
                <Box sx={{ mt: 2 }}>
                    {moreLink.map((href) => (
                        <Link
                            key={href}
                            href={href}
                            variant="body2"
                            target="_blank"
                            rel="noopener"
                            sx={{ display: "table" }}
                        >
                            {href}
                        </Link>
                    ))}
                </Box>
            )}

            {!!filtersRow && <Stack pt={{ xs: 3, md: 4 }}>{filtersRow}</Stack>}
        </Box>
    );
};
