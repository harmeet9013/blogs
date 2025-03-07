"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { SaveRounded } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
//
import {
    RHFInput,
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
            title: "",
            content: "",
            image: "",
        },
    });

    const onSubmit = methods["handleSubmit"](async (data) => {
        isUpdating.onTrue();

        let payload = {
            title: data?.title || "",
            content: data?.content || [],
        };

        const response = await (!!blogData ? PUT_REQUEST : POST_REQUEST)(
            endpoints["blogs"]["root"],
            payload,
            { blog: blogData?.key }
        );

        if (response?.status) {
            if (!blogData) {
                enqueueSnackbar("blog created");
                router.push(
                    PATHS["admin"]["blogs"]["create_edit"](response?.data?.key)
                );
            } else {
                enqueueSnackbar("blog created");
            }
        } else {
            enqueueSnackbar(response?.message || "unexpected error");
        }

        isUpdating.onFalse();
    });

    useEffect(() => {
        if (!!blogData) {
            dispatch(setEdit(blogData));
            methods["reset"]({
                title: blogData?.title,
                content: blogData?.content,
            });
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
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography variant="h3">
                                {blogData ? "edit" : "create"} blog
                            </Typography>

                            <Button
                                type="submit"
                                fullWidth={false}
                                startIcon={<SaveRounded />}
                                loading={methods["formState"]["isSubmitting"]}
                            >
                                save
                            </Button>
                        </Stack>

                        <RHFInput name="title" label="title" />

                        <RHFEditor name="content" label="content" />
                    </Stack>
                }
            />
        </FormProvider>
    );
};
