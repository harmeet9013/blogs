import PropTypes from "prop-types";
import { FullHeader } from "@/components/header";
import { Container } from "@mui/material";
import { FooterButtons } from "@/components/footer";

export const metadata = {
    title: "Harmeet Blogs - Login",
    description: "Built on NextJS, A blog website",
};

export default function LoginLayout({ children }) {
    return (
        <>
            <FullHeader />
            <Container>
                {children}
                <FooterButtons />
            </Container>
        </>
    );
}

LoginLayout.propTypes = {
    children: PropTypes.node,
};
