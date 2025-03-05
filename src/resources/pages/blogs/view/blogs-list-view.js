"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { SearchRounded, CancelRounded } from "@mui/icons-material";
import {
    Stack,
    Grid2,
    Typography,
    IconButton,
    Pagination,
    InputAdornment,
} from "@mui/material";
//
import {
    RHFInput,
    reduxStore,
    useBoolean,
    FormProvider,
    fetchAllBlogs,
    blogSliceActions,
} from "@/resources";
//
import { BlogCard } from "../blog-card-view";

export const BlogsListView = ({ response }) => {
    const {
        setData,
        setPagination,
        getDataSelector,
        clearPagination,
        getPaginationSelector,
    } = blogSliceActions;

    const dispatch = useDispatch();
    const isUpdating = useBoolean(false);
    const blogsData = useSelector(getDataSelector);
    const paginationData = useSelector(getPaginationSelector);

    const methods = useForm({
        defaultValues: {
            search: "",
        },
    });

    const updateRedux = (response) => {
        if (response?.error) {
            enqueueSnackbar(response?.error || "could not fetch blogs", {
                variant: "error",
            });
        } else {
            dispatch(setData(response?.data?.data));
            dispatch(setPagination(response?.data?.pagination));
        }
    };

    const apiFetchBlogs = async (data) => {
        isUpdating.onTrue();

        const updated_pagination = reduxStore.getState().blog.pagination;

        const response = await fetchAllBlogs(undefined, data?.search, {
            limit: updated_pagination?.limit,
            page: updated_pagination?.current_page,
        });

        updateRedux(response);

        isUpdating.onFalse();
    };

    const handlePageChange = async (newPage) => {
        dispatch(
            setPagination({
                ...paginationData,
                current_page: newPage,
            })
        );

        const payload = {
            search: methods["watch"]("search"),
        };

        await apiFetchBlogs(payload);
    };

    const onSubmit = methods["handleSubmit"](async (data) => {
        dispatch(clearPagination({ limit: 9 }));

        await apiFetchBlogs(data);
    });

    useEffect(() => {
        updateRedux(response);
    }, []);

    return (
        <Stack width={1} gap={4}>
            <FormProvider methods={methods} onSubmit={onSubmit}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    width={1}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h3" width={1}>
                        {methods["watch"]("search") ||
                            `all blogs - ${paginationData?.current_page}`}
                    </Typography>

                    <RHFInput
                        name="search"
                        label="search"
                        sx={{
                            width: 0.4,
                        }}
                        placeholder="search title or author"
                        loading={!!response?.error || isUpdating.value}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton type="submit">
                                            <SearchRounded />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Stack>
            </FormProvider>

            <Grid2 container width={1} spacing={2}>
                {!!blogsData?.length ? (
                    blogsData?.map((item, index) => (
                        <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                            <BlogCard item={item} />
                        </Grid2>
                    ))
                ) : (
                    <Grid2 size={12}>
                        <Typography
                            variant="h4"
                            align="center"
                            color="text.disabled"
                        >
                            <CancelRounded
                                color="error"
                                sx={{
                                    mt: 1.5,
                                    mr: 1,
                                }}
                            />
                            no blogs found
                        </Typography>
                    </Grid2>
                )}

                {!!blogsData?.length && (
                    <Grid2 size={12}>
                        <Stack
                            width={1}
                            alignItems="flex-end"
                            justifyContent="center"
                        >
                            <Pagination
                                size="large"
                                shape="rounded"
                                page={paginationData?.current_page}
                                count={paginationData?.total_pages}
                                onChange={(props, newPage) =>
                                    handlePageChange(newPage)
                                }
                            />
                        </Stack>
                    </Grid2>
                )}
            </Grid2>
        </Stack>
    );
};
