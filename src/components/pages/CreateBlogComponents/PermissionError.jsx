import { ButtonGroup, Stack, Typography } from "@mui/material";
import { Home, Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function PermissionError(props) {
    const navigate = useNavigate();

    const handleButtonNavigate = (event) => {
        event.preventDefault();
        props.setShowLoading(true);
        setTimeout(() => {
            navigate(event.target.id);
            props.setShowLoading(false);
        }, 200);
    };

    return (
        <Stack
            direction="column"
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
                transition: (theme) => theme.transitions.create(),
            }}
        >
            <Typography variant="h6">
                You do not have persmission to view this page!
            </Typography>

            <ButtonGroup color="icon">
                <props.NavigateButton
                    id="/blogs"
                    onClick={handleButtonNavigate}
                    startIcon={<Home color="icon" />}
                >
                    Home
                </props.NavigateButton>
                <props.NavigateButton
                    id="/blogs/authUser"
                    onClick={handleButtonNavigate}
                    endIcon={<Login color="icon" />}
                >
                    Login
                </props.NavigateButton>
            </ButtonGroup>
        </Stack>
    );
}
