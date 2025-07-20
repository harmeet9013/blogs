import {
    Box,
    Chip,
    Grid2,
    Stack,
    Dialog,
    Button,
    Divider,
    useTheme,
    Typography,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import {
    CloseRounded,
    DeleteRounded,
    CircleRounded,
    UpdateRounded,
    FileCopyRounded,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
//
import {
    endpoints,
    COMMON_ASSETS,
    STATIC_MEDIA_TYPES,
    NEXT_PUBLIC_API_URL,
} from "@/config";
import {
    toKB,
    RHFInput,
    useBoolean,
    PUT_REQUEST,
    FormProvider,
    getImageURL,
} from "@/resources";

export const MediaLibraryPreviewDialog = ({
    fetchMedia,
    imageDetail,
    handleCopyURL,
    selectedImage,
    handleDialogClose,
    handleMediaDelete,
}) => {
    const muiTheme = useTheme();
    const confirmDialog = useBoolean(false);

    const methods = useForm({
        defaultValues: {
            alt: imageDetail?.alt || "",
        },
    });

    const {
        formState: { isDirty, isSubmitting },
    } = methods;

    const onSubmit = methods["handleSubmit"](async (data) => {
        const response = await PUT_REQUEST(
            endpoints["media"]["root"],
            { alt: data?.alt },
            { key: selectedImage?.key }
        );

        if (response?.status) {
            await fetchMedia();
            enqueueSnackbar("Image updated");
            handleDialogClose();
        } else {
            enqueueSnackbar(response?.message || "Unexpected error");
        }
    });

    useEffect(() => {
        if (!!selectedImage) {
            methods["reset"]({
                alt: selectedImage?.alt,
            });
        }
    }, [selectedImage]);

    return (
        <>
            <Dialog
                fullScreen
                open={imageDetail.value}
                onClose={() => {
                    if (!isSubmitting) {
                        handleDialogClose();
                    }
                }}
            >
                <DialogTitle>{selectedImage?.name || "File"}</DialogTitle>

                <FormProvider
                    methods={methods}
                    onSubmit={onSubmit}
                    sx={{
                        height: 1,
                    }}
                >
                    <DialogContent>
                        <Grid2 container spacing={2} height={1}>
                            <Grid2 size={{ xs: 12, md: 9 }}>
                                <RenderPreview item={selectedImage} />
                            </Grid2>

                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <Stack gap={1} divider={<Divider />}>
                                    <Stack>
                                        <Typography
                                            variant="inline"
                                            color="primary"
                                            gutterBottom
                                            fontWeight={600}
                                        >
                                            Name:
                                        </Typography>{" "}
                                        {selectedImage?.name}
                                    </Stack>

                                    <Stack>
                                        <Typography
                                            variant="inline"
                                            color="primary"
                                            fontWeight={600}
                                            gutterBottom
                                        >
                                            Size:
                                        </Typography>{" "}
                                        <Typography
                                            fontWeight={500}
                                            variant="inline"
                                        >
                                            {toKB(selectedImage?.size)} KB
                                        </Typography>
                                    </Stack>

                                    <Stack>
                                        <Typography
                                            variant="inline"
                                            color="primary"
                                            gutterBottom
                                            fontWeight={600}
                                        >
                                            Type:
                                        </Typography>{" "}
                                        <Chip
                                            label={
                                                STATIC_MEDIA_TYPES.find(
                                                    (type) =>
                                                        type.value ===
                                                        selectedImage?.type
                                                )?.label || "Other"
                                            }
                                            color="primary"
                                        />
                                    </Stack>

                                    <Stack gap={1}>
                                        <Typography
                                            width={1}
                                            variant="body1"
                                            color="primary"
                                            gutterBottom
                                            fontWeight={600}
                                        >
                                            Alt:
                                        </Typography>

                                        <RHFInput name="alt" label="Alt text" />
                                    </Stack>

                                    <Stack
                                        sx={{
                                            cursor: "pointer",
                                            wordBreak: "break-all",
                                        }}
                                        onClick={() =>
                                            handleCopyURL(selectedImage?.path)
                                        }
                                    >
                                        <Typography
                                            color="primary"
                                            variant="inline"
                                            fontWeight={600}
                                            gutterBottom
                                            display="flex"
                                            gap={1}
                                            alignItems="center"
                                        >
                                            <CircleRounded
                                                sx={{
                                                    fontSize:
                                                        muiTheme.spacing(1.5),
                                                }}
                                            />{" "}
                                            Relative path:
                                        </Typography>{" "}
                                        {selectedImage?.path}
                                    </Stack>

                                    <Stack
                                        sx={{
                                            cursor: "pointer",
                                            wordBreak: "break-all",
                                        }}
                                        onClick={() =>
                                            handleCopyURL(
                                                `${NEXT_PUBLIC_API_URL}${selectedImage?.path}`
                                            )
                                        }
                                    >
                                        <Typography
                                            width={0.4}
                                            color="primary"
                                            gutterBottom
                                            variant="inline"
                                            gap={1}
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            fontWeight={600}
                                        >
                                            <CircleRounded
                                                sx={{
                                                    fontSize:
                                                        muiTheme.spacing(1.5),
                                                }}
                                            />{" "}
                                            Path:
                                        </Typography>{" "}
                                        {NEXT_PUBLIC_API_URL}
                                        {selectedImage?.path}
                                    </Stack>
                                </Stack>
                            </Grid2>
                            {/* </Stack> */}
                        </Grid2>
                    </DialogContent>

                    <DialogActions>
                        <Stack
                            width={1}
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Button
                                type="button"
                                color="error"
                                variant="contained"
                                fullWidth={false}
                                startIcon={<DeleteRounded />}
                                onClick={confirmDialog.onTrue}
                            >
                                Delete
                            </Button>

                            <Stack gap={1} direction="row" alignItems="center">
                                <Button
                                    type="button"
                                    variant="outlined"
                                    disabled={isSubmitting}
                                    onClick={handleDialogClose}
                                    startIcon={<CloseRounded />}
                                >
                                    Close
                                </Button>

                                <Button
                                    type="submit"
                                    startIcon={<UpdateRounded />}
                                    disabled={!isDirty || isSubmitting}
                                >
                                    Update
                                </Button>
                            </Stack>
                        </Stack>
                    </DialogActions>
                </FormProvider>
            </Dialog>

            <DeleteConfirmDialog
                open={confirmDialog?.value}
                onClose={confirmDialog.onFalse}
                onSuccess={async () => {
                    await handleMediaDelete(selectedImage?.key);

                    confirmDialog?.onFalse();
                    handleDialogClose();
                }}
            />
        </>
    );
};

const RenderPreview = ({ item }) => {
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
                        // height: 1,
                        width: 1,
                        maxHeight: { xs: "25dvh", md: "80dvh" },
                        objectFit: "cover",
                        background: muiTheme.palette.action.disabled,
                        // maxHeight: muiTheme.spacing(50),
                        borderRadius: muiTheme.spacing(0.5),
                    }}
                />
            );
        case "video":
            return (
                <>
                    {previewError ? (
                        <Box
                            loading="lazy"
                            component="img"
                            src={mediaPath}
                            onError={(event) => {
                                setPreviewError(true);
                                event.target.src = COMMON_ASSETS["placeholder"];
                            }}
                            sx={{
                                width: 1,
                                objectFit: "cover",
                                background: muiTheme.palette.action.disabled,
                                // maxHeight: muiTheme.spacing(50),
                                borderRadius: muiTheme.spacing(0.5),
                            }}
                        />
                    ) : (
                        <Box
                            loop
                            controls
                            preload="metdata"
                            component="video"
                            onError={(event) => {
                                setPreviewError(true);
                                event.target.src = COMMON_ASSETS["placeholder"];
                            }}
                            sx={{
                                width: 1,
                                objectFit: "cover",
                                background: muiTheme.palette.action.disabled,
                                // maxHeight: muiTheme.spacing(50),
                                borderRadius: muiTheme.spacing(0.5),
                            }}
                        >
                            <source src={mediaPath} />
                        </Box>
                    )}
                </>
            );

        case "audio":
            return (
                <>
                    {previewError ? (
                        <Box
                            loading="lazy"
                            component="img"
                            src={mediaPath}
                            onError={(event) => {
                                setPreviewError(true);
                                event.target.src = COMMON_ASSETS["placeholder"];
                            }}
                            sx={{
                                width: 1,
                                objectFit: "cover",
                                background: muiTheme.palette.action.disabled,
                                // maxHeight: muiTheme.spacing(50),
                                borderRadius: muiTheme.spacing(0.5),
                            }}
                        />
                    ) : (
                        <Box
                            controls
                            component="audio"
                            onError={(event) => {
                                setPreviewError(true);
                                // event.target.src = COMMON_ASSETS["placeholder"];
                            }}
                            sx={{
                                width: 1,
                                // objectFit: "cover",
                                // background: muiTheme.palette.grey[600],
                                // maxHeight: muiTheme.spacing(50),
                                // borderRadius: muiTheme.spacing(0.5),
                            }}
                        >
                            <source src={mediaPath} type="audio/mp3" />
                        </Box>
                    )}
                </>
            );

        default:
            return (
                <>
                    {previewError ? (
                        <Stack
                            width={1}
                            justifyContent="center"
                            alignItems="center"
                            height={muiTheme.spacing(50)}
                            borderRadius={0.5}
                            bgcolor="action.hover"
                        >
                            <FileCopyRounded
                                sx={{
                                    fontSize: muiTheme.spacing(8),
                                }}
                            />
                            <Typography variant="body1">File</Typography>
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
                                width: 1,
                                objectFit: "cover",
                                background: muiTheme.palette.action.disabled,
                                // maxHeight: muiTheme.spacing(50),
                                borderRadius: muiTheme.spacing(0.5),
                            }}
                        />
                    )}
                </>
            );
    }
};

const DeleteConfirmDialog = ({ open, onClose, onSuccess }) => {
    return (
        <>
            <Dialog open={open} fullWidth maxWidth="sm" onClose={onClose}>
                <DialogTitle>Delete media?</DialogTitle>

                <DialogContent>
                    <Typography>This action is irreversible!</Typography>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={onClose}
                        variant="outlined"
                        startIcon={<CloseRounded />}
                    >
                        Cancel
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={onSuccess}
                        startIcon={<DeleteRounded />}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
