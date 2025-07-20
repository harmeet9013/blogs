"use client";

import { useRouter } from "next/navigation";
import { ArrowBackRounded } from "@mui/icons-material";
import { Stack, Typography, Button } from "@mui/material";
//
import { PATHS } from "@/config";

export const BlogDetail = ({ blog }) => {
    const router = useRouter();
    const { title, key, content, author, image } = blog;

    return (
        <Stack
            gap={4}
            width={1}
            alignItems="flex-start"
            justifyContent="flex-start"
        >
            <Button
                color="secondary"
                variant="contained"
                fullWidth={false}
                startIcon={<ArrowBackRounded />}
                onClick={() => router.push(PATHS["blogs"]["root"])}
            >
                home
            </Button>

            <Typography variant="h1">{title}</Typography>

            <div
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />

            {/* <Typography
                variant="body1"
                component="div"
                
            /> */}
        </Stack>
    );
};
