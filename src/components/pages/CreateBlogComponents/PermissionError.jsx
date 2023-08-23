import { ButtonGroup, Stack, Typography } from "@mui/material";
import { Home, Login } from "@mui/icons-material";
import { CustomButton, navigate } from "../../shared/CustomComponents";

export default function PermissionError(props) {
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
                <CustomButton
                    id="/"
                    onClick={handleButtonNavigate}
                    startIcon={<Home color="icon" />}
                >
                    Home
                </CustomButton>
                <CustomButton
                    id="/authUser"
                    onClick={handleButtonNavigate}
                    endIcon={<Login color="icon" />}
                >
                    Login
                </CustomButton>
            </ButtonGroup>
        </Stack>
    );
}
