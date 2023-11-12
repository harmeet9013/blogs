import PropTypes from "prop-types";
import { useSettingsContext } from "@/settings/context";
import { useTheme } from "@emotion/react";
import { Avatar, Container, Grow, Stack, Typography } from "@mui/material";
import { BlogImageBox, BlogTitle } from "./styled/blog-styled";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

export default function RenderBlogContent({ blog }) {
    const theme = useTheme();
    const { isMobile } = useSettingsContext();

    return (
        <Grow in={true} timeout={{ enter: 500 }}>
            <Stack
                direction="column"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                component={Container}
                py={15}
                px={0}
                width={isMobile ? "100%" : "50rem"}
                sx={{
                    cursor: "default",
                    transition: theme.transitions.create(),
                }}
            >
                <Stack component={!isMobile && Container} spacing={4}>
                    <BlogTitle variant="h3" color="primary">
                        {blog.title}
                    </BlogTitle>

                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                            src={blog.avatar}
                            sx={{
                                height: 60,
                                width: 60,
                                border: `2px solid ${theme.palette.tertiary.main}`,
                            }}
                        />

                        <Stack
                            direction="column"
                            spacing={0}
                            textAlign="left"
                            color="primary"
                        >
                            <Typography
                                variant={isMobile ? "body1" : "h6"}
                                fontWeight={600}
                                color="tertiary.main"
                            >
                                {blog.author}
                            </Typography>
                            <Typography variant={isMobile ? "body2" : "body1"}>
                                {blog.date}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    component={!isMobile && Container}
                    id="blog-container"
                >
                    <BlogImageBox
                        component="img"
                        src={blog.image}
                        alt={blog.title}
                    />

                    <CKEditor
                        editor={BalloonEditor}
                        data={blog.content}
                        disabled={true}
                    />
                </Stack>
            </Stack>
        </Grow>
    );
}

RenderBlogContent.propTypes = {
    blog: PropTypes.object,
};
