import { Paper, Stack, Typography } from "@mui/material";
import { ArrowBack, Login } from "@mui/icons-material";
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
        <Paper
            elevation={10}
            sx={{
                borderRadius: "15px",
                padding: props.isMobile ? "20px" : "20px 40px 20px 40px",
                display: "flex",
                gap: "40px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 200ms ease",
            }}
        >
            <Typography variant={props.isMobile ? "h6" : "h3"}>
                <strong>You do not have persmission to view this page!</strong>
            </Typography>
            <Stack direction="row" spacing={props.isMobile ? 2 : 4}>
                <props.NavigateButton
                    id="/"
                    onClick={handleButtonNavigate}
                    startIcon={<ArrowBack color="icon" />}
                >
                    Back
                </props.NavigateButton>
                <props.NavigateButton
                    id="/authUser"
                    onClick={handleButtonNavigate}
                    endIcon={<Login color="icon" />}
                >
                    Login
                </props.NavigateButton>
            </Stack>
        </Paper>
    );
}
