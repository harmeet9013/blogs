"use client";

import {
    Box,
    Fade,
    Chip,
    alpha,
    Stack,
    useTheme,
    Typography,
    IconButton,
    Tooltip,
} from "@mui/material";
import {
    CancelRounded,
    FileCopyRounded,
    PlayArrowRounded,
    HeadphonesRounded,
    CheckCircleRounded,
} from "@mui/icons-material";
import { useState } from "react";
//
import { COMMON_ASSETS } from "@/config";
import { getImageURL } from "@/resources";

export const MediaLibraryItem = ({
    item,
    disableHover = false,
    itemHeight = 30,
    isSelected = false,
    handleImageClick,
    isDialog = true,
    onRemove,
}) => {
    const muiTheme = useTheme();

    return (
        <>
            <Stack
                overflow="hidden"
                borderRadius={2}
                position="relative"
                width={{ xs: 1, md: itemHeight ? 1 : 0.5 }}
                height={itemHeight ? muiTheme.spacing(itemHeight) : 1}
                {...(!disableHover && {
                    onClick: () => handleImageClick(item),
                })}
                sx={{
                    overflow: "hidden",
                    transition: muiTheme.transitions.create(["filter"], {
                        duration: muiTheme.transitions.duration.shortest,
                    }),
                    background: muiTheme.palette.action.disabled,
                    ...(!disableHover && {
                        cursor: "pointer",
                        ":hover": {
                            filter: "brightness(1.1)",
                        },
                    }),
                }}
            >
                {!!onRemove && (
                    <Tooltip
                        placement="top"
                        disableInteractive
                        title="Remove selected media"
                    >
                        <Stack position="absolute" top={2} right={2}>
                            <IconButton
                                color="error"
                                onClick={onRemove}
                                variant="contained"
                                disabled={disableHover}
                            >
                                <CancelRounded />
                            </IconButton>
                        </Stack>
                    </Tooltip>
                )}

                <RenderPreview item={item} isDialog={isDialog} />

                <Fade in={isSelected} unmountOnExit>
                    <Stack
                        width={1}
                        height={1}
                        display="flex"
                        position="absolute"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            background: alpha(
                                muiTheme?.palette?.background?.default,
                                0.9
                            ),
                            backdropFilter: "blur(4px)",
                        }}
                    >
                        <CheckCircleRounded
                            color="primary"
                            sx={{
                                fontSize: muiTheme.spacing(8),
                            }}
                        />
                    </Stack>
                </Fade>
            </Stack>
        </>
    );
};

const RenderPreview = ({ item, isDialog }) => {
    const muiTheme = useTheme();

    const mediaPath = getImageURL(item?.path);

    const [previewError, setPreviewError] = useState(false);

    switch (item?.type) {
        case "image":
            return (
                <Box
                    loading="lazy"
                    component="img"
                    src={mediaPath}
                    onError={(event) => {
                        setPreviewError(true);
                        event.target.src = COMMON_ASSETS["placeholder"];
                    }}
                    sx={{
                        height: 1,
                        objectFit: "cover",
                    }}
                />
            );
        case "video":
            return (
                <>
                    <Stack
                        width={1}
                        height={1}
                        display="flex"
                        position="absolute"
                        alignItems="center"
                        justifyContent="center"
                        zIndex={1}
                    >
                        <PlayArrowRounded
                            sx={{
                                fontSize: muiTheme.spacing(8),
                                color: muiTheme.palette.grey[100],
                            }}
                        />
                    </Stack>
                    <Box
                        muted
                        preload="metdata"
                        component="video"
                        sx={{
                            height: 1,
                            objectFit: "cover",
                            filter: "brightness(0.2)",
                        }}
                        onClick={(event) => event.preventDefault()}
                    >
                        <source src={mediaPath} />
                    </Box>
                </>
            );
        case "audio":
            return (
                <>
                    {/* {previewError ? ( */}
                    <Stack
                        gap={2}
                        width={1}
                        borderRadius={0.5}
                        alignItems="center"
                        justifyContent="center"
                        height={muiTheme.spacing(50)}
                    >
                        <HeadphonesRounded
                            sx={{
                                fontSize: muiTheme.spacing(8),
                            }}
                        />

                        <Stack
                            px={2}
                            gap={0.5}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Chip label="Audio" />

                            <Typography
                                align="center"
                                sx={{
                                    wordBreak: "break-all",
                                }}
                            >
                                {item?.name?.substring(
                                    item?.name?.indexOf("_") + 1,
                                    isDialog ? 40 : 20
                                )}
                            </Typography>
                        </Stack>
                    </Stack>
                    {/* ) : (
                        <Box
                            controls
                            component="audio"
                            onError={(event) => {
                                setPreviewError(true);
                            }}
                            sx={{
                                width: 1,
                            }}
                        >
                            <source src={item?.path} />
                        </Box>
                    )} */}
                </>
            );
        default:
            return (
                <>
                    {previewError ? (
                        <Stack
                            gap={2}
                            width={1}
                            borderRadius={0.5}
                            alignItems="center"
                            justifyContent="center"
                            height={muiTheme.spacing(50)}
                        >
                            <FileCopyRounded
                                sx={{
                                    fontSize: muiTheme.spacing(8),
                                }}
                            />

                            <Stack
                                px={2}
                                gap={0.5}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Chip label="File" />
                                <Typography
                                    align="center"
                                    sx={{
                                        wordBreak: "break-all",
                                    }}
                                >
                                    {item?.name?.substring(
                                        item?.name?.indexOf("_") + 1,
                                        isDialog ? 40 : 20
                                    )}
                                </Typography>
                            </Stack>
                        </Stack>
                    ) : (
                        <Box
                            loading="lazy"
                            component="img"
                            src={mediaPath}
                            onError={(event) => {
                                setPreviewError(true);
                                event.target.src = COMMON_ASSETS["placeholder"];
                            }}
                            sx={{
                                height: 1,
                                objectFit: "cover",
                            }}
                        />
                    )}
                </>
            );
    }
};
