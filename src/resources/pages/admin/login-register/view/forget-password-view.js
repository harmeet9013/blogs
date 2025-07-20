import { Container } from "@mui/material";
//
import { ForgetPassword } from "../forget-password";

export const ForgetPasswordView = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                p: 0,
            }}
        >
            <ForgetPassword />
        </Container>
    );
};
