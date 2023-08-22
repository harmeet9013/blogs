import { Fragment } from "react";
import {
    Button,
    Grow,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";

import RenderBlogs from "./RenderBlogs";
import { FooterButtons, FooterText } from "../../shared/Footer";

export default function Blogs({ blogs, setRefresh, setShowLoading }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const RefreshButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        padding: isMobile ? "8px 15px" : "8px 10px",
        fontSize: "1.3rem",
        width: isMobile ? "100%" : "8rem",
        border: `2px solid ${theme.palette.action.disabled}`,
        transition: theme.transitions.create(),
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
            borderColor: theme.palette.accent.primary,
        },
    }));
    const BlogButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        borderRadius: "15px",
        padding: isMobile ? "5px" : "20px 40px 20px 40px",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        cursor: "pointer",
        color: theme.palette.text.primary,
        transition: theme.transitions.create(),
        gap: "20px",
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));

    return (
        <Fragment>
            <Stack
                direction="column"
                spacing={4}
                paddingTop="8rem"
                width={isMobile ? "100%" : "48rem"}
                marginBottom={4}
                sx={{
                    transition: (theme) => theme.transitions.create(),
                }}
            >
                {blogs ? (
                    <RenderBlogs
                        blogs={blogs}
                        isMobile={isMobile}
                        BlogButton={BlogButton}
                        setShowLoading={setShowLoading}
                    />
                ) : (
                    <Grow in={true}>
                        <Stack
                            direction="column"
                            spacing={4}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography variant="h6">
                                Could not connect to the database. <br />
                                Try again after sometime.
                            </Typography>
                            <RefreshButton onClick={() => setRefresh(true)}>
                                Refresh
                            </RefreshButton>
                        </Stack>
                    </Grow>
                )}
            </Stack>
            <FooterText />
            <FooterButtons />
        </Fragment>
    );
}
