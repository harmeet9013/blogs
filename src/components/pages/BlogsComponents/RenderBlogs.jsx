import { Grow, Typography, Container, Stack } from "@mui/material";
import {
    BlogButton,
    BlogsImageBox,
    navigate,
} from "../../shared/CustomComponents";

export default function RenderBlogs(props) {
    return Object.keys(props.blogs).map((key, index) => {
        const { _id, title, image, author, date } = props.blogs[key];

        return (
            <Grow
                in={true}
                key={_id}
                style={{
                    transitionDelay: index * 100,
                }}
            >
                <BlogButton
                    onClick={() => {
                        setTimeout(() => {
                            navigate(`/blog/${_id}`);
                            props.setShowLoading(false);
                        }, 200);
                        props.setShowLoading(true);
                    }}
                >
                    <BlogsImageBox component="img" src={image} alt={title} />

                    <Stack spacing={2} component={Container}>
                        <Typography
                            sx={{ textAlign: "left", cursor: "pointer" }}
                            fontWeight="600"
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
                </BlogButton>
            </Grow>
        );
    });
}
