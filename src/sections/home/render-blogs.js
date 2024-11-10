"use client";

import PropTypes from "prop-types";
import {
    Avatar,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grow,
    Stack,
    Typography,
} from "@mui/material";
import { BlogButton } from "./styled/home-styled";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const RenderBlogs = ({ blogs }) => {
    const router = useRouter();

    const handleClick = useCallback((id) => {
        router.push(`/blogs/${id}`);
    });

    return blogs?.map((blog) => {
        const { _id, title, image, authorID, date } = blog;

        return (
            <Grow in={true} key={_id} timeout={{ enter: 500 }}>
                <BlogButton variant="outlined" onClick={() => handleClick(_id)}>
                    <CardActionArea>
                        <Stack component={CardContent} spacing={2}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={image}
                                sx={{
                                    borderRadius: 10,
                                }}
                            />
                            <Stack spacing={2} component={Container}>
                                <Typography
                                    textAlign="left"
                                    fontWeight={600}
                                    variant="h4"
                                    color="primary"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Grow in={true}>
                                        <Avatar
                                            src={authorID?.avatar}
                                            sx={(theme) => ({
                                                height: theme.spacing(7),
                                                width: theme.spacing(7),
                                                border: `2px solid ${theme.palette.tertiary.main}`,
                                            })}
                                        />
                                    </Grow>

                                    <Stack
                                        alignItems="flex-start"
                                        justifyContent="flex-start"
                                        color="secondary.main"
                                        spacing={1}
                                    >
                                        {/* <Typography
                                            variant="subtitle1"
                                            fontWeight={600}
                                            color="tertiary.main"
                                        >
                                            By {author}
                                        </Typography> */}
                                        <Chip
                                            color="primary"
                                            label={authorID?.name}
                                            sx={{
                                                typography: "body2",
                                                fontWeight: 600,
                                            }}
                                        />
                                        <Typography variant="body2" pl={1}>
                                            {date}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardActionArea>
                </BlogButton>
            </Grow>
        );
    });
};

RenderBlogs.propTypes = {
    blogs: PropTypes.array,
};
