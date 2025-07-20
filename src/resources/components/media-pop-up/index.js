"use client";

import {
    Tab,
    Fade,
    Tabs,
    Grid2,
    Stack,
    Dialog,
    Button,
    Select,
    Divider,
    useTheme,
    MenuItem,
    TextField,
    InputLabel,
    Typography,
    Pagination,
    DialogTitle,
    FormControl,
    DialogActions,
    DialogContent,
} from "@mui/material";
import {
    SearchRounded,
    UploadRounded,
    UploadFileRounded,
    BrowseGalleryRounded,
} from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
//
import {
    toKB,
    useBoolean,
    reduxStore,
    GET_REQUEST,
    POST_REQUEST,
    MediaLibraryItem,
    mediaSliceActions,
} from "@/resources";
import { endpoints, NEXT_PUBLIC_API_URL, STATIC_MEDIA_TYPES } from "@/config";
//
import { LoadComponent } from "../load-component";

export const MediaPopUp = ({ name, open, onClose, setPreviewImage }) => {
    const {
        setData,
        getDataSelector,
        setPagination,
        getPaginationSelector,
        clearPagination,
    } = mediaSliceActions;

    const muiTheme = useTheme();
    const dispatch = useDispatch();
    const isLoading = useBoolean(false);
    const uploadButtonRef = useRef(null);
    const isUploading = useBoolean(false);
    const { setValue } = useFormContext();

    const [selectedTab, setSelectedTab] = useState(0);
    const [error, setError] = useState(null);
    const [searchValues, setSearchValues] = useState({
        search_term: "",
        media_type: "all",
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadPreviewMedia, setUploadPreviewMedia] = useState(null);

    const mediaLibraryData = useSelector(getDataSelector);
    const paginationData = useSelector(getPaginationSelector);

    const handleImageClick = useCallback(
        (image) => {
            setSelectedImage(image);
        },
        [setSelectedImage]
    );

    const handlePageChange = (event, page) => {
        if (page !== paginationData?.current_page) {
            const updatedState = {
                ...paginationData,
                current_page: page,
            };
            dispatch(setPagination(updatedState));
            fetchApi(updatedState);
            setSelectedImage(null);
        }
    };

    const handleSearch = () => {
        dispatch(clearPagination({ limit: 30 }));
        fetchApi({ ...searchValues });
    };

    const handleMediaUpload = async () => {
        isUploading.onTrue();
        const fileToUpload = uploadPreviewMedia?.file;

        let formData = new FormData();
        const reader = new FileReader();

        if (!fileToUpload) {
            isUploading.onFalse();
            return enqueueSnackbar("No file selected");
        }

        reader.onload = async (file) => {
            formData.append("file", fileToUpload);
            const response = await POST_REQUEST(
                endpoints["media"]["upload"],
                formData,
                {},
                { "Content-Type": "multipart/form-data" }
            );

            if (response?.status) {
                await fetchApi();
                setSelectedImage(response?.data);
                setSelectedTab(0);
                setUploadPreviewMedia(null);
                enqueueSnackbar("Media uploaded");
            } else {
                enqueueSnackbar(response?.message || "Media not uploaded", {
                    variant: "error",
                });
            }
            isUploading.onFalse();
        };

        reader.readAsArrayBuffer(fileToUpload);
    };

    const handleUploadMediaSelect = async (files) => {
        const fileToUpload = files[0];

        if (!fileToUpload) {
            enqueueSnackbar("No file selected", { variant: "error" });
            return false;
        }

        setUploadPreviewMedia({
            file: fileToUpload,
            name: `_${fileToUpload?.name}`,
            type: fileToUpload?.type?.split("/")[0],
            path: URL.createObjectURL(fileToUpload),
        });

        return true;
    };

    const onImageSelected = () => {
        setValue(name, selectedImage?._id);
        if (setPreviewImage) {
            setPreviewImage(selectedImage?.path);
        }
        enqueueSnackbar("Image Selected", { variant: "success" });
        handleClose();
    };

    const fetchApi = useCallback(
        async (search_object) => {
            isLoading.onTrue();

            const paginationData = reduxStore.getState().media.pagination;

            const query = {
                current_page: paginationData?.current_page,
                limit: paginationData?.limit,
                ...(!!search_object
                    ? {
                          ...(!!search_object?.search_term
                              ? { search: search_object?.search_term }
                              : {}),
                          ...(!!search_object?.media_type &&
                          search_object?.media_type !== "all"
                              ? { type: search_object?.media_type }
                              : {}),
                      }
                    : {}),
            };

            const response = await GET_REQUEST(endpoints["media"]["root"], {
                ...query,
            });

            if (response?.status) {
                dispatch(setData(response?.data));
                dispatch(setPagination(response?.pagination));
            } else {
                setError(response?.message || "Error loading component");
            }
            isLoading.onFalse();
        },
        [setData, setPagination, isLoading]
    );

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleInputChange = (name, value) => {
        setSearchValues({
            ...searchValues,
            [name]: value,
        });
    };

    useEffect(() => {
        if (!mediaLibraryData) {
            fetchApi();
        }
    }, [mediaLibraryData]);

    return (
        <Dialog
            open={open}
            fullScreen
            onClose={handleClose}
            slotProps={{
                paper: {
                    elevation: 0,
                },
            }}
        >
            <DialogTitle component="div">
                <Stack
                    width={1}
                    gap={{ xs: 2, md: 0 }}
                    justifyContent="space-between"
                    direction={{ xs: "column", md: "row" }}
                    alignItems={{ xs: "flex-start", md: "center" }}
                >
                    <Tabs
                        value={selectedTab}
                        variant="scrollable"
                        onChange={(event, tabValue) => setSelectedTab(tabValue)}
                    >
                        <Tab
                            value={0}
                            disabled={isUploading?.value}
                            label={
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                >
                                    <BrowseGalleryRounded /> Media
                                </Stack>
                            }
                        />

                        <Tab
                            value={1}
                            disabled={isUploading?.value}
                            label={
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                >
                                    <UploadFileRounded /> Upload
                                </Stack>
                            }
                        />
                    </Tabs>
                    {/* <Typography variant="h5">Media select</Typography> */}

                    <Fade in={selectedTab === 0}>
                        <Stack
                            gap={2}
                            direction="row"
                            alignItems="stretch"
                            width={{ xs: 1, md: 0.4 }}
                        >
                            <TextField
                                fullWidth
                                label="Name / URL"
                                disabled={isLoading?.value}
                                value={searchValues?.search_term}
                                onChange={(event) =>
                                    handleInputChange(
                                        "search_term",
                                        event.target.value
                                    )
                                }
                            />

                            <FormControl fullWidth>
                                <InputLabel>Media type</InputLabel>
                                <Select
                                    fullWidth
                                    label="Media type"
                                    variant="outlined"
                                    disabled={isLoading?.value}
                                    value={searchValues?.media_type}
                                    onChange={(event) =>
                                        handleInputChange(
                                            "media_type",
                                            event.target.value
                                        )
                                    }
                                >
                                    {[
                                        {
                                            value: "all",
                                            label: "All",
                                        },
                                        ...STATIC_MEDIA_TYPES,
                                    ]?.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            value={item?.value}
                                        >
                                            {item?.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Button
                                fullWidth
                                type="submit"
                                onClick={handleSearch}
                                disabled={isLoading?.value}
                                startIcon={<SearchRounded />}
                            >
                                Search
                            </Button>
                        </Stack>
                    </Fade>
                </Stack>
            </DialogTitle>

            <DialogContent>
                <LoadComponent
                    loading={isLoading?.value}
                    error={error}
                    component={
                        <>
                            {selectedTab === 0 ? (
                                <Grid2
                                    pt={2}
                                    container
                                    spacing={2}
                                    height={1}
                                    alignItems="flex-start"
                                >
                                    <Grid2
                                        container
                                        display="flex"
                                        alignItems="stretch"
                                        size={{ xs: 12, md: 9 }}
                                    >
                                        {mediaLibraryData?.length ? (
                                            <>
                                                {mediaLibraryData?.map(
                                                    (item, index) => {
                                                        const isSelected =
                                                            selectedImage?._id ===
                                                            item?._id;

                                                        return (
                                                            <Grid2
                                                                key={index}
                                                                display="flex"
                                                                size={{
                                                                    xs: 12,
                                                                    sm: 6,
                                                                    md: 3,
                                                                    xl: 1.5,
                                                                }}
                                                            >
                                                                <MediaLibraryItem
                                                                    item={item}
                                                                    itemHeight={
                                                                        20
                                                                    }
                                                                    isSelected={
                                                                        isSelected
                                                                    }
                                                                    handleImageClick={
                                                                        handleImageClick
                                                                    }
                                                                    isDialog={
                                                                        false
                                                                    }
                                                                />
                                                            </Grid2>
                                                        );
                                                    }
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <Stack
                                                    width={1}
                                                    alignItems="center"
                                                >
                                                    <Typography variant="h5">
                                                        No Media found
                                                    </Typography>
                                                </Stack>
                                            </>
                                        )}
                                    </Grid2>

                                    <Grid2
                                        size={{ xs: 12, md: 3 }}
                                        display="flex"
                                    >
                                        <Stack
                                            p={2}
                                            gap={2}
                                            width={1}
                                            borderLeft={`2px solid ${muiTheme.palette.divider}`}
                                        >
                                            {!selectedImage ? (
                                                <Typography
                                                    variant="h6"
                                                    align="center"
                                                    color="text.disabled"
                                                >
                                                    Choose some media
                                                </Typography>
                                            ) : (
                                                <>
                                                    <MediaLibraryItem
                                                        disableHover
                                                        item={selectedImage}
                                                        isSelected={false}
                                                        itemHeight={40}
                                                    />

                                                    <Divider
                                                        flexItem
                                                        sx={{
                                                            my: 1,
                                                        }}
                                                    />

                                                    <Stack gap={1}>
                                                        <Typography
                                                            variant="body1"
                                                            display="flex"
                                                            justifyContent="space-between"
                                                            sx={{
                                                                wordBreak:
                                                                    "break-all",
                                                            }}
                                                        >
                                                            <Typography
                                                                width={0.2}
                                                                variant="inline"
                                                                color="primary"
                                                                fontWeight={600}
                                                            >
                                                                Name:
                                                            </Typography>{" "}
                                                            {
                                                                selectedImage?.name
                                                            }
                                                        </Typography>

                                                        <Typography
                                                            variant="body1"
                                                            display="flex"
                                                            justifyContent="space-between"
                                                        >
                                                            <Typography
                                                                variant="inline"
                                                                color="primary"
                                                                fontWeight={600}
                                                            >
                                                                Size:
                                                            </Typography>{" "}
                                                            {toKB(
                                                                selectedImage?.size
                                                            )}{" "}
                                                            KB
                                                        </Typography>

                                                        <Typography
                                                            display="flex"
                                                            variant="body1"
                                                            justifyContent="space-between"
                                                        >
                                                            <Typography
                                                                variant="inline"
                                                                color="primary"
                                                                fontWeight={600}
                                                            >
                                                                Type:
                                                            </Typography>{" "}
                                                            {
                                                                STATIC_MEDIA_TYPES.find(
                                                                    (type) =>
                                                                        type.value ===
                                                                        selectedImage?.type
                                                                )?.label
                                                            }
                                                        </Typography>

                                                        <Divider
                                                            flexItem
                                                            sx={{
                                                                my: 1,
                                                            }}
                                                        />

                                                        <Typography
                                                            variant="body1"
                                                            display="flex"
                                                            component="span"
                                                            width={1}
                                                            justifyContent="space-between"
                                                            sx={{
                                                                wordBreak:
                                                                    "break-all",
                                                            }}
                                                        >
                                                            <Typography
                                                                width={0.4}
                                                                color="primary"
                                                                variant="inline"
                                                                fontWeight={600}
                                                            >
                                                                Relative <br />{" "}
                                                                path:
                                                            </Typography>{" "}
                                                            {
                                                                selectedImage?.path
                                                            }
                                                        </Typography>

                                                        <Typography
                                                            variant="body1"
                                                            display="flex"
                                                            width={1}
                                                            justifyContent="space-between"
                                                            component="span"
                                                            sx={{
                                                                wordBreak:
                                                                    "break-all",
                                                            }}
                                                        >
                                                            <Typography
                                                                width={0.5}
                                                                color="primary"
                                                                variant="inline"
                                                                fontWeight={600}
                                                            >
                                                                Path:
                                                            </Typography>{" "}
                                                            {
                                                                NEXT_PUBLIC_API_URL
                                                            }
                                                            {
                                                                selectedImage?.path
                                                            }
                                                        </Typography>
                                                    </Stack>
                                                </>
                                            )}
                                        </Stack>
                                    </Grid2>
                                </Grid2>
                            ) : (
                                <Grid2
                                    width={1}
                                    container
                                    height={1}
                                    spacing={2}
                                    alignItems="stretch"
                                >
                                    <Grid2 size={12} display="flex">
                                        {!!uploadPreviewMedia?.file && (
                                            <Stack
                                                width={1}
                                                height={1}
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <MediaLibraryItem
                                                    itemHeight={false}
                                                    item={uploadPreviewMedia}
                                                    disableHover={
                                                        isUploading?.value
                                                    }
                                                    handleImageClick={() => {
                                                        uploadButtonRef?.current?.click();
                                                    }}
                                                    onRemove={() => {
                                                        setUploadPreviewMedia(
                                                            null
                                                        );
                                                    }}
                                                />
                                            </Stack>
                                        )}

                                        <Button
                                            ref={uploadButtonRef}
                                            variant="text"
                                            type="button"
                                            component="label"
                                            sx={{
                                                height: 1,
                                                display:
                                                    uploadPreviewMedia?.file
                                                        ? "none"
                                                        : "flex",
                                                width: 1,
                                            }}
                                        >
                                            <Typography
                                                gap={1}
                                                variant="h6"
                                                display="flex"
                                                alignItems="center"
                                            >
                                                <UploadRounded />
                                                Select media
                                            </Typography>
                                            <input
                                                type="file"
                                                hidden
                                                onChange={async (event) => {
                                                    const response =
                                                        await handleUploadMediaSelect(
                                                            event.target.files
                                                        );
                                                    if (!!response) {
                                                        event.target.value =
                                                            null;
                                                        event.target.files =
                                                            null;
                                                    }
                                                }}
                                            />
                                        </Button>
                                    </Grid2>
                                </Grid2>
                            )}
                        </>
                    }
                />
            </DialogContent>

            <DialogActions>
                <Stack
                    width={1}
                    direction="row"
                    alignItems="center"
                    justifyContent={
                        selectedTab === 0 ? "space-between" : "flex-end"
                    }
                >
                    {selectedTab === 0 && (
                        <Pagination
                            onChange={handlePageChange}
                            disabled={isLoading?.value}
                            count={paginationData?.total_pages}
                            page={paginationData?.current_page}
                        />
                    )}

                    <Stack direction="row" gap={2} alignItems="center">
                        <Button
                            variant="outlined"
                            onClick={handleClose}
                            type="button"
                        >
                            Close
                        </Button>
                        <Button
                            onClick={async () => {
                                if (selectedTab === 0) {
                                    onImageSelected();
                                } else {
                                    await handleMediaUpload();
                                }
                            }}
                            disabled={isLoading?.value}
                            type="button"
                        >
                            {selectedTab === 0
                                ? "Select media"
                                : "Upload media"}
                        </Button>
                    </Stack>
                </Stack>
            </DialogActions>
        </Dialog>
    );
};
