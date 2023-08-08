import { useNavigate } from "react-router-dom";
import { Box, Grow, Typography, Container, Stack } from "@mui/material";

export default function RenderBlogs(props) {
    const navigate = useNavigate();

    return Object.keys(props.blogs).map((key) => {
        const { _id, title, image, author, date } = props.blogs[key];

        return (
            <Grow in={true} key={_id}>
                <props.BlogButton
                    onClick={() => {
                        setTimeout(() => {
                            navigate(`/blogs/blog/${_id}`);
                            props.setShowLoading(false);
                        }, 300);
                        props.setShowLoading(true);
                    }}
                >
                    <Box
                        component="img"
                        src={image}
                        alt={title}
                        sx={{
                            position: "relative",
                            borderRadius: "15px",
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            pointerEvents: "none",
                            border: (theme) =>
                                `1px solid ${theme.palette.action.disabled}`,
                        }}
                    />

                    <Stack spacing={2} component={Container}>
                        <Typography
                            sx={{ textAlign: "left", cursor: "pointer" }}
                            variant={props.isMobile ? "h5" : "h4"}
                        >
                            <strong>{title}</strong>
                        </Typography>

                        <Stack
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            sx={{
                                opacity: 0.8,
                            }}
                        >
                            <Typography variant="body1">
                                By <strong>{author}</strong>
                            </Typography>
                            <Typography variant="body2">{date}</Typography>
                        </Stack>
                    </Stack>
                </props.BlogButton>
            </Grow>
        );
    });
}
