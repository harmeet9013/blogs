import { Container } from "@mui/material";
//
import { VerifyEmail } from "../verify-email";

export const VerifyEmailView = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                p: 0,
            }}
        >
            <VerifyEmail />
        </Container>
    );
};
