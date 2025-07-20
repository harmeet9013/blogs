import { Container } from "@mui/material";
//
import { LoginForm } from "../login-form";

export const LoginView = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                p: 0,
            }}
        >
            <LoginForm />
        </Container>
    );
};
