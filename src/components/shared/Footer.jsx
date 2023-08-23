import { GitHub, Web } from "@mui/icons-material";
import { Container, Divider, Grow, Stack, Typography } from "@mui/material";

import { FooterButton } from "./CustomComponents";

export function FooterText(props) {
    return (
        <Grow in={true}>
            <Stack component={Container} spacing={4} marginBottom={4}>
                <Divider flexItem />
                <Typography
                    variant="body1"
                    sx={{
                        cursor: "default",
                        textDecoration: "none",
                        textAlign: "justify",
                        color: (theme) => theme.palette.text.disabled,
                    }}
                >
                    This website is a simple blog website built using the MERN
                    Stack. This site is hosted using GitHub pages, The backend
                    server is hosted on vercel and the database is hosted on
                    MongoDBAtlas. The site features many amazing features along
                    with a beautiful UI/UX and a responsive design.
                </Typography>
            </Stack>
        </Grow>
    );
}

export function FooterButtons(props) {
    return (
        <Grow in={true}>
            <Stack component={Container} spacing={2} marginBottom={5}>
                <Divider flexItem />
                <Typography
                    variant="button"
                    sx={{
                        cursor: "default",
                    }}
                >
                    Created with love 💞
                    <br />
                    By Harmeet
                </Typography>
                <Stack
                    direction={props.isMobile ? "column" : "row"}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    component={Container}
                >
                    <FooterButton
                        fullWidth={props.isMobile && true}
                        startIcon={<GitHub color="icon" />}
                        onClick={() => {
                            window.open("https://github.com/harmeet9013/blogs");
                        }}
                    >
                        Source Code
                    </FooterButton>
                    <FooterButton
                        fullWidth={props.isMobile && true}
                        startIcon={<Web color="icon" />}
                        onClick={() => {
                            window.open("https://harmeet9013.github.io");
                        }}
                    >
                        Portfolio
                    </FooterButton>
                </Stack>
            </Stack>
        </Grow>
    );
}
