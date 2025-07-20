import { Container } from "@mui/material";
//
import { RegisterForm } from "../register-form";

export const RegisterView = () => {
    return (
        <Container maxWidth="sm" sx={{
            p: 0,
        }}>
            <RegisterForm />
        </Container>
    );
};
