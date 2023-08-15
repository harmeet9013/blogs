import { Home } from "@mui/icons-material";
import {
    Button,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage(props) {
    const navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const CustomButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.background.header,
        fontSize: isMobile ? "16px" : "18px",
        padding: isMobile ? "15px 20px" : "15px 30px",
        transition: theme.transitions.create(),
        border: `2px solid ${theme.palette.divider}`,
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));

    return (
        <Stack
            direction="column"
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
                transition: (theme) => theme.transitions.create(),
                paddingTop: isMobile ? "7rem" : "10rem",
                width: isMobile ? "100%" : "50rem",
                marginBottom: "30px",
            }}
        >
            <Typography variant="h6">
                Uh oh, seems like you have wandered off somewhere else. <br />
                Don't worry, I gotchu.
            </Typography>

            <CustomButton
                onClick={() => {
                    navigate("/blogs");
                }}
                startIcon={<Home color="icon" />}
            >
                Latest Blogs
            </CustomButton>
        </Stack>
    );
}
