"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { CheckRounded, PublishRounded, SaveRounded } from "@mui/icons-material";
//
import {
    RHFInput,
    RHFMedia,
    RHFEditor,
    useBoolean,
    PUT_REQUEST,
    FormProvider,
    POST_REQUEST,
    LoadComponent,
    adminBlogSliceActions,
} from "@/resources";
import { endpoints, PATHS } from "@/config";

export const BlogEditCreateForm = ({ blogData }) => {
    const { setEdit } = adminBlogSliceActions;

    const router = useRouter();
    const dispatch = useDispatch();
    const isUpdating = useBoolean(true);

    const methods = useForm({
        defaultValues: {
            title: blogData?.title || "",
            content: blogData?.content || "",
            media: blogData?.media || "",
            published: blogData?.published || false,
        },
    });

    const publishedValue = methods["watch"]("published");

    const onSubmit = methods["handleSubmit"](async (data) => {
        isUpdating.onTrue();

        let payload = {
            title: data?.title || "",
            media: data?.media || null,
            content: data?.content || "",
            published: data?.published || false,
        };

        const response = await (!!blogData ? PUT_REQUEST : POST_REQUEST)(
            endpoints["blogs"]["root"],
            payload,
            { blog: blogData?.key }
        );

        if (response?.status) {
            enqueueSnackbar(response?.message || "blog created");

            if (!blogData) {
                router.push(
                    PATHS["admin"]["blogs"]["create_edit"](response?.data?.key)
                );
            } else {
                methods["reset"]({
                    title: response?.data?.title,
                    media: response?.data?.media,
                    content: response?.data?.content,
                    published: response?.data?.published,
                });
            }
        } else {
            enqueueSnackbar(response?.message || "unexpected error");
        }

        isUpdating.onFalse();
    });

    useEffect(() => {
        if (!!blogData) {
            dispatch(setEdit(blogData));
        }

        isUpdating.onFalse();
    }, [blogData]);

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <LoadComponent
                loading={isUpdating.value}
                error={false}
                component={
                    <Stack width={1} gap={4}>
                        <Stack
                            width={1}
                            gap={4}
                            direction={{ xs: "column", md: "row" }}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography variant="h3" width={1}>
                                {blogData ? "edit" : "create"} blog
                            </Typography>

                            <Stack
                                direction="row"
                                width={{ xs: 1, md: 0.5 }}
                                alignItems="center"
                                gap={2}
                            >
                                <Button
                                    variant={
                                        publishedValue
                                            ? "contained"
                                            : "outlined"
                                    }
                                    onClick={() =>
                                        methods["setValue"](
                                            "published",
                                            !publishedValue
                                        )
                                    }
                                    startIcon={
                                        publishedValue ? (
                                            <CheckRounded />
                                        ) : (
                                            <PublishRounded />
                                        )
                                    }
                                >
                                    {publishedValue ? "published" : "publish"}
                                </Button>

                                <Button
                                    type="submit"
                                    // fullWidth={false}
                                    startIcon={<SaveRounded />}
                                    loading={
                                        methods["formState"]["isSubmitting"]
                                    }
                                >
                                    save
                                </Button>
                            </Stack>
                        </Stack>

                        <Divider />

                        <RHFMedia name="media" label="select banner" />

                        <RHFInput name="title" label="title" />

                        <RHFEditor name="content" label="content" />
                    </Stack>
                }
            />
        </FormProvider>
    );
};
