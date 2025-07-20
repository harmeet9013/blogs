"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { CloseRounded } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
//
import { useBoolean } from "@/resources";
import { PUBLIC_SERVER_URL } from "@/config";
//
import { MediaPopUp } from "../media-pop-up";

export const RHFMedia = ({ name, label = "Select Image" }) => {
    const showMediaPopup = useBoolean(false);
    const { watch, setValue } = useFormContext();
    const rawImageValue = watch(name);

    const [previewImage, setPreviewImage] = useState(null);

    const handleFieldUpdate = (value = null) => {
        setValue(name, value || "");
    };

    const selectPreviewImage = (path) => {
        if (!path) {
            return null;
        }

        setPreviewImage(path || null);
    };

    if (!watch) {
        throw new Error("RHFMedia must be wrapped inside the FormProvider");
    }

    useEffect(() => {
        if (typeof rawImageValue === "object") {
            selectPreviewImage(rawImageValue?.path);
            setValue(name, rawImageValue?._id);
        } else {
            selectPreviewImage(null);
            handleFieldUpdate();
        }
    }, []);

    return (
        <>
            <Stack
                width={1}
                position="relative"
                justifyContent="center"
                alignItems="center"
            >
                {!!rawImageValue && (
                    <Stack
                        width={1}
                        top={0}
                        right={0}
                        height={1}
                        position="absolute"
                        alignItems="flex-end"
                    >
                        <Tooltip title="Remove media" disableInteractive>
                            <IconButton
                                variant="contained"
                                onClick={() => handleFieldUpdate()}
                            >
                                <CloseRounded />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                )}

                {!!rawImageValue ? (
                    <Box
                        component="img"
                        src={previewImage}
                        onClick={() => showMediaPopup.onTrue()}
                        sx={(theme) => ({
                            width: 1,
                            // height: 1,
                            zIndex: 1,
                            cursor: "pointer",
                            objectFit: "cover",
                            overflow: "hidden",
                            maxWidth: theme.spacing(10),
                            borderRadius: theme.spacing(1),
                            ":hover": {
                                filter: "brightness(1.1)",
                            },
                        })}
                    />
                ) : (
                    <Button fullWidth onClick={() => showMediaPopup.onTrue()}>
                        {label}
                    </Button>
                )}
            </Stack>

            <MediaPopUp
                name={name}
                open={showMediaPopup.value}
                onClose={showMediaPopup.onFalse}
                setPreviewImage={selectPreviewImage}
            />
        </>
    );
};
