"use client";

import {
    Stack,
    Grid2,
    Button,
    Divider,
    useTheme,
    Pagination,
    Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UploadRounded, SearchRounded } from "@mui/icons-material";
//
import {
    RHFInput,
    RHFSelect,
    useBoolean,
    POST_REQUEST,
    FormProvider,
    LoadComponent,
    DELETE_REQUEST,
    mediaSliceActions,
    CustomBreadcrumbs,
} from "@/resources";
import { endpoints, STATIC_MEDIA_TYPES } from "@/config";
//
import { MediaLibraryItem } from "./media-library-item";
import { MediaLibraryPreviewDialog } from "./media-library-preview-dialog";

export const MediaLibraryList = ({ fetchMedia, isUpdating }) => {
    const muiTheme = useTheme();
    const dispatch = useDispatch();
    const imageDetail = useBoolean(false);
    const methods = useForm({
        defaultValues: {
            search: "",
            type: "all",
        },
    });

    const {
        getPaginationSelector,
        clearPagination,
        setPagination,
        getDataSelector,
    } = mediaSliceActions;

    const [selectedImage, setSelectedImage] = useState(null);

    const paginationData = useSelector(getPaginationSelector);
    const mediaLibraryData = useSelector(getDataSelector) || [];

    const onSubmit = methods["handleSubmit"](async (data) => {
        const payload = {
            type: data?.type,
            search: data?.search,
        };

        await dispatch(clearPagination({ limit: 30 }));

        await fetchMedia(payload);
    });

    const handleImageClick = useCallback(
        (image) => {
            setSelectedImage(image);
            imageDetail.onTrue();
        },
        [setSelectedImage, imageDetail]
    );

    const handleDialogClose = useCallback(() => {
        imageDetail.onFalse();

        setTimeout(() => {
            setSelectedImage(false);
        }, muiTheme.transitions.duration.standard);
    }, [setSelectedImage, imageDetail, muiTheme]);

    const handleMediaUpload = async (files) => {
        const fileToUpload = files[0];

        let formData = new FormData();

        if (!fileToUpload) {
            enqueueSnackbar("No file selected", { variant: "error" });
            return false;
        }

        formData.append("file", files[0]);

        const response = await POST_REQUEST(
            endpoints["media"]["upload"],
            formData,
            {},
            { "Content-Type": "multipart/form-data" }
        );

        if (response?.status) {
            await fetchMedia();
            setSelectedImage(response?.data);
            imageDetail.onTrue();
            enqueueSnackbar("File uploaded");
            return true;
        } else {
            enqueueSnackbar("File not uploaded", {
                variant: "error",
            });
            return false;
        }
    };

    const handleMediaDelete = async (key) => {
        if (!key) {
            return;
        }

        const response = await DELETE_REQUEST(endpoints["media"]["root"], {
            key: key,
        });

        if (response?.status) {
            await fetchMedia();
            return enqueueSnackbar(response?.message || "media deleted");
        } else {
            return enqueueSnackbar(response?.message || "unexpected error");
        }
    };

    const handlePageChange = (event, page) => {
        if (page !== paginationData?.current_page) {
            const updatedState = {
                ...paginationData,
                current_page: page,
            };
            dispatch(setPagination(updatedState));

            const { watch } = methods;
            const values = watch();

            const search_values = {
                media_type: values?.type,
                search_term: values?.search,
            };

            fetchMedia(search_values);
        }
    };

    const handleCopyURL = (url) => {
        if (typeof navigator !== undefined) {
            navigator.clipboard.writeText(url);
            enqueueSnackbar("link copied to clipboard");
        }
    };

    return (
        <>
            <FormProvider
                gap={4}
                methods={methods}
                position="relative"
                onSubmit={onSubmit}
            >
                <CustomBreadcrumbs
                    heading="Media Library"
                    links={[
                        {
                            name: "List",
                        },
                    ]}
                    action={
                        <Button
                            type="button"
                            component="label"
                            variant="contained"
                            startIcon={<UploadRounded />}
                        >
                            Upload
                            <input
                                type="file"
                                hidden
                                onChange={async (event) => {
                                    const response = await handleMediaUpload(
                                        event.target.files
                                    );

                                    if (!!response) {
                                        event.target.value = null;
                                    }
                                }}
                            />
                        </Button>
                    }
                    filtersRow={
                        <Grid2
                            width={1}
                            container
                            spacing={2}
                            alignItems="stretch"
                        >
                            <Grid2 size={{ xs: 6, md: 5 }} display="flex">
                                <RHFSelect
                                    name="type"
                                    label="Type"
                                    disabled={isUpdating}
                                    optionsLabelKey="label"
                                    optionsValueKey="value"
                                    options={[
                                        { value: "all", label: "All" },
                                        ...STATIC_MEDIA_TYPES,
                                    ]}
                                />
                            </Grid2>

                            <Grid2 size={{ xs: 6, md: 5 }} display="flex">
                                <RHFInput
                                    name="search"
                                    label="Name/URL"
                                    disabled={isUpdating}
                                />
                            </Grid2>

                            <Grid2 size={{ xs: 12, md: 2 }} display="flex">
                                <Button
                                    fullWidth
                                    type="submit"
                                    disabled={isUpdating}
                                    startIcon={<SearchRounded />}
                                >
                                    Search
                                </Button>
                            </Grid2>
                        </Grid2>
                    }
                />

                <Divider flexItem />

                <LoadComponent
                    loading={isUpdating}
                    error={false}
                    component={
                        <>
                            <Grid2 container spacing={2} alignItems="stretch">
                                {mediaLibraryData?.length ? (
                                    <>
                                        {mediaLibraryData?.map(
                                            (item, index) => (
                                                <Grid2
                                                    key={index}
                                                    display="flex"
                                                    size={{
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 3,
                                                        xl: 2,
                                                    }}
                                                >
                                                    <MediaLibraryItem
                                                        item={item}
                                                        handleImageClick={
                                                            handleImageClick
                                                        }
                                                    />
                                                </Grid2>
                                            )
                                        )}

                                        <Grid2 size={12} pt={3}>
                                            <Divider />
                                        </Grid2>

                                        <Grid2 size={12}>
                                            <Stack
                                                width={1}
                                                alignItems="flex-end"
                                            >
                                                <Pagination
                                                    count={
                                                        paginationData?.total_pages
                                                    }
                                                    page={
                                                        paginationData?.current_page
                                                    }
                                                    onChange={handlePageChange}
                                                />
                                            </Stack>
                                        </Grid2>
                                    </>
                                ) : (
                                    <>
                                        <Stack width={1} alignItems="center">
                                            <Typography variant="h5">
                                                No Media found
                                            </Typography>
                                        </Stack>
                                    </>
                                )}
                            </Grid2>
                        </>
                    }
                />
            </FormProvider>

            <MediaLibraryPreviewDialog
                fetchMedia={fetchMedia}
                imageDetail={imageDetail}
                handleCopyURL={handleCopyURL}
                selectedImage={selectedImage}
                handleDialogClose={handleDialogClose}
                handleMediaDelete={handleMediaDelete}
            />
        </>
    );
};
