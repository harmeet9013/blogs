"use client";

import { Chip, Stack } from "@mui/material";
//
import { RenderBlogContent } from "../blog-content";
import { RenderBlogActions } from "../blog-actions";

export const BlogView = ({ blog }) => {
    return (
        <Stack py={!blog ? 10 : 0}>
            {!!blog ? (
                <>
                    <RenderBlogContent blog={blog} />
                    <RenderBlogActions />
                </>
            ) : (
                <Stack width={1} justifyContent="center" alignItems="center">
                    <Chip
                        label="blog not found :("
                        color="secondary"
                        sx={{
                            typography: "h5",
                            py: 4,
                            px: 4,
                        }}
                    />
                </Stack>
            )}
        </Stack>
    );
};
