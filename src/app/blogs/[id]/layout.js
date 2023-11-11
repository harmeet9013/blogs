import PropTypes from "prop-types";
import { FullHeader } from "@/components/header";
import { Container } from "@mui/material";
import { FooterButtons } from "@/components/footer";

export const metadata = {
    title: "Harmeet Blogs - Home",
    description: "Built on NextJS, A blog website",
};

export default function BlogLayout({ children }) {
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

BlogLayout.propTypes = {
    children: PropTypes.node,
};
