import PropTypes from "prop-types";
import { FullHeader } from "@/components/header";
import { Container } from "@mui/material";
import { FooterButtons, FooterText } from "@/components/footer";

export const metadata = {
    title: "Harmeet Blogs - Home",
    description: "Built on NextJS, A blog website",
};

export default function HomeLayout({ children }) {
    return (
        <>
            <FullHeader />
            <Container>
                {children}
                <FooterText />
                <FooterButtons />
            </Container>
        </>
    );
}

HomeLayout.propTypes = {
    children: PropTypes.node,
};
