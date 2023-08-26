import { Home, Login } from "@mui/icons-material";
import { Button, ButtonGroup, Stack, Typography, styled } from "@mui/material";

import { navigate } from "../../shared/CustomComponents";

export default function PermissionError(props) {
    // global button used for various purposes
    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 40,
        backgroundColor: theme.palette.background.low,
        padding: "0.6rem 1.6rem",
        fontSize: theme.typography.h5.fontSize,
        width: "100%",
        border: `2px solid ${theme.palette.dividervar}`,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
            border: `2px solid ${theme.palette.primary.main}`,
        },
    }));

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
            <Typography
                variant="h4"
                sx={(theme) => ({
                    color: theme.palette.tertiary.main,
                })}
            >
                Where you tryna go bro? You can't be here.
            </Typography>

            <ButtonGroup>
                <CustomButton
                    id="/"
                    onClick={handleButtonNavigate}
                    startIcon={<Home />}
                >
                    Home
                </CustomButton>
                <CustomButton
                    id="/authUser"
                    onClick={handleButtonNavigate}
                    endIcon={<Login />}
                >
                    Login
                </CustomButton>
            </ButtonGroup>
        </Stack>
    );
}
