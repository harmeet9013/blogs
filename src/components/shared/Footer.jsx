import { GitHub, Home } from "@mui/icons-material";
import {
    Button,
    Container,
    Divider,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";

let isMobile;

export function FooterText(props) {
    return (
        <Stack
            component={Container}
            spacing={4}
            sx={{
                mb: "50px",
            }}
        >
            <Divider flexItem />
            <Typography
                variant="body1"
                sx={{
                    textDecoration: "none",
                    textAlign: "justify",
                    opacity: 0.6,
                }}
            >
                This website is a simple blog website built using the MERN
                Stack. This site is hosted using GitHub pages, The backend
                server is hosted on vercel and the database is hosted on
                MongoDBAtlas. The site features many amazing features along with
                a beautiful UI/UX and a responsive design.
            </Typography>
        </Stack>
    );
}

export function FooterButtons(props) {
    isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const FooterButton = styled(Button)(({ theme }) => ({
        padding: "8px 16px",
        borderRadius: "15px",
        backgroundColor: theme.palette.background.actions,
        color: theme.palette.text.primary,
        transition: "background-color 0.4s ease",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    }));

    return (
        <Stack
            component={Container}
            spacing={2}
            sx={{
                mb: 5,
            }}
        >
            <Divider flexItem />
            <Typography variant="button">
                Created with love.
                <br />
                By Harmeet.
            </Typography>
            <Stack
                direction={isMobile ? "column" : "row"}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                component={Container}
            >
                <FooterButton
                    fullWidth={isMobile && true}
                    startIcon={<GitHub color="icon" />}
                    onClick={() => {
                        window.open(
                            "https://github.com/harmeet9013/blogs",
                            "_blank"
                        );
                    }}
                >
                    Source Code
                </FooterButton>
                <FooterButton
                    fullWidth={isMobile && true}
                    startIcon={<Home color="icon" />}
                    onClick={() => {
                        window.open("https://harmeet9013.github.io", "_blank");
                    }}
                >
                    Website
                </FooterButton>
            </Stack>
        </Stack>
    );
}
