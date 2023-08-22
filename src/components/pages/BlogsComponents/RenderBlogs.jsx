import { useNavigate } from "react-router-dom";
import { Box, Grow, Typography, Container, Stack, styled } from "@mui/material";

export default function RenderBlogs(props) {
    const navigate = useNavigate();

    const ImageBox = styled(Box)(({ theme }) => ({
        position: "relative",
        borderRadius: "15px",
        width: "100%",
        height: "300px",
        objectFit: "cover",
        pointerEvents: "none",
        border: `1px solid ${theme.palette.action.disabled}`,
    }));

    return Object.keys(props.blogs).map((key) => {
        const { _id, title, image, author, date } = props.blogs[key];

        return (
            <Grow in={true} key={_id}>
                <props.BlogButton
                    onClick={() => {
                        navigate(`/blog/${_id}`);
                        props.setShowLoading(true);
                    }}
                >
                    <ImageBox component="img" src={image} alt={title} />

                    <Stack spacing={2} component={Container}>
                        <Typography
                            sx={{ textAlign: "left", cursor: "pointer" }}
                            variant="h4"
                        >
                            {title}
                        </Typography>

                        <Stack
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            sx={{
                                opacity: 0.8,
                            }}
                        >
                            <Typography variant="body2">
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
