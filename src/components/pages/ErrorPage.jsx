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
        textTransform: "none",
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        padding: isMobile ? "8px 15px" : "8px 10px",
        fontSize: "1.3rem",
        width: isMobile ? "100%" : "15rem",
        border: `2px solid ${theme.palette.action.disabled}`,
        transition: theme.transitions.create(),
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
            borderColor: theme.palette.accent.primary,
        },
    }));

    return (
        <Stack
            direction="column"
            spacing={4}
            justifyContent="center"
            alignItems="center"
            width={isMobile ? "100%" : "50rem"}
            paddingTop="15vh"
            marginBottom={4}
        >
            <Typography variant="h6">
                Uh oh, seems like you have wandered off somewhere else. <br />
                Don't worry, I gotchu.
            </Typography>

            <CustomButton
                onClick={() => {
                    props.setShowLoading(true);
                    navigate("/");
                }}
                startIcon={<Home color="icon" />}
            >
                Latest Blogs
            </CustomButton>
        </Stack>
    );
}
