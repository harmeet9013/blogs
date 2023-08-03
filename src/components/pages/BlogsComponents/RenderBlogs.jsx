import { useNavigate } from "react-router-dom";
import { Box, Grow, Paper, Typography, Divider } from "@mui/material";

export default function RenderBlogs(props) {
    const navigate = useNavigate();

    const DividerHorizontalSX = {
        borderBottomWidth: 2,
        borderRadius: "15px",
    };

    return Object.keys(props.blogs).map((key) => {
        const { _id, title, image, author, date } = props.blogs[key];

        return (
            <Grow in={true} key={_id}>
                <props.BlogButton
                    component={Paper}
                    elevation={1}
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
                        }}
                    />

                    <Divider flexItem sx={DividerHorizontalSX} />

                    <Typography
                        sx={{ textAlign: "left", cursor: "pointer" }}
                        variant={props.isMobile ? "h4" : "h4"}
                    >
                        <strong>{title}</strong>
                    </Typography>
                    <Typography
                        sx={{ textAlign: "left", cursor: "pointer" }}
                        variant={props.isMobile ? "caption" : "body2"}
                    >
                        <i>
                            By {author} &#x2022; <strong>{date}</strong>
                        </i>
                    </Typography>
                </props.BlogButton>
            </Grow>
        );
    });
}
