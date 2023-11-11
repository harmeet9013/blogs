import PropTypes from "prop-types";
import { FullHeader } from "@/components/header";
import { Container } from "@mui/material";

export const metadata = {
    title: "Harmeet Blogs - Home",
    description: "Built on NextJS, A blog website",
};

export default function BlogLayout({ children }) {
    return (
        <>
            <FullHeader />
            <Container>{children}</Container>
        </>
    );
}

BlogLayout.propTypes = {
    children: PropTypes.node,
};
