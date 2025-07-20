"use client";

import { useRouter } from "next/navigation";
import { Card, Typography, Stack, useTheme, Divider, Box } from "@mui/material";
//
import { PATHS } from "@/config";
import { bgBlur, formatDateForRender } from "@/resources";

export const BlogCard = ({ item, index }) => {
    const { title, content, key, media, author } = item;

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
                    "border-color",
                ]),

                ":hover": {
                    transform: `translateY(${muiTheme.spacing(-0.5)})`,
                    background: muiTheme.palette.action.hover,
                    boxShadow: muiTheme.shadows[2],
                    borderColor: "primary.main",
                },
            }}
            onClick={handleCardClick}
        >
            <Stack
                px={2}
                py={2}
                gap={3}
                width={1}
                direction="column"
                position="relative"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Stack
                    sx={{
                        width: 1,
                        overflow: "hidden",
                        position: "relative",
                        maxHeight: muiTheme.spacing(30),
                        border: `2px solid ${muiTheme.palette.divider}`,
                    }}
                >
                    <Box
                        component="img"
                        src={media?.path}
                        sx={{
                            top: 0,
                            left: 0,
                            width: 1,
                            zIndex: 0,
                            position: "absolute",
                            objectFit: "cover",
                            opacity: 0.1,
                            filter: "blur(4px)",
                            transform: "scale(1.2)",
                            maxHeight: muiTheme.spacing(30),
                        }}
                    />
                    <Box
                        component="img"
                        src={media?.path}
                        sx={{
                            width: 1,
                            zIndex: 2,
                            objectFit: "scale-down",
                            maxHeight: muiTheme.spacing(30),
                        }}
                    />
                </Stack>

                <Typography variant="h3" fontWeight={400}>
                    {title}
                </Typography>

                {/* <Typography
                    variant="body2"
                    fontWeight={300}
                    color="text.secondary"
                    mb={-1}
                    component="p"
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                    sx={{
                        display: "box",
                        lineClamp: 4,
                    }}
                ></Typography> */}

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
