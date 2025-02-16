"use client";

import { useRouter } from "next/navigation";
import { Card, Typography, Stack, useTheme, Divider } from "@mui/material";
//
import { PATHS } from "@/config";
import { formatDateForRender } from "@/resources";

export const BlogCard = ({ item, index }) => {
    const { title, content, key, image, author } = item;

    const router = useRouter();
    const muiTheme = useTheme();

    const handleCardClick = () => {
        router.push(PATHS["blogs"]["single_blog"](key));
    };

    return (
        <Card
            elevation={0}
            variant="outlined"
            sx={{
                cursor: "pointer",
                transition: muiTheme.transitions.create([
                    "transform",
                    "background",
                    "box-shadow",
                ]),

                ":hover": {
                    transform: `translateY(${muiTheme.spacing(-0.5)})`,
                    background: muiTheme.palette.action.hover,
                    boxShadow: muiTheme.shadows[2],
                },
            }}
            onClick={handleCardClick}
        >
            <Stack
                gap={3}
                px={2}
                py={2}
                width={1}
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Typography variant="h3" fontWeight={200}>
                    {title}
                </Typography>

                <Typography
                    variant="body2"
                    fontWeight={300}
                    color="text.secondary"
                    mb={-1}
                >
                    {content?.substring(0, 200)}...
                </Typography>

                <Divider flexItem />

                <Stack
                    px={1}
                    mt={-1}
                    pb={1}
                    width={1}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="body1" color="text.secondary">
                        {formatDateForRender(item?.updatedAt)}
                    </Typography>

                    <Typography variant="body1" color="text.disabled">
                        revision:{" "}
                        <Typography variant="inline" color="primary">
                            {item?.revision}
                        </Typography>
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    );
};
