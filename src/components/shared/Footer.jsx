import { FavoriteRounded, GitHub, Web } from "@mui/icons-material";
import {
    Button,
    Container,
    Divider,
    Grow,
    Stack,
    Typography,
    styled,
} from "@mui/material";

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
                    This is a simple blogging website that is built using the
                    MERN stack by Harmeet Singh from the ground up in 3 weeks.
                    It incorporates various features such as token generation
                    and cookies storage along with encrypted database and
                    protected API calls. Visually the website uses the Material
                    3 Design Language on top of the Material UI React
                    components.
                </Typography>
            </Stack>
        </Grow>
    );
}

export function FooterButtons(props) {
    // footer buttons
    const FooterButton = styled(Button)(({ theme }) => ({
        transition: theme.transitions.create(),
        textTransform: "none",
        color: theme.palette.primary.main,
        padding: "0.6rem 1.5rem",
        fontSize: theme.typography.body1.fontSize,
        backgroundColor: theme.palette.background.low,
        fontWeight: 500,
        borderRadius: 40,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
        },
    }));

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
                    Created with love{" "}
                    <FavoriteRounded
                        fontSize="20"
                        sx={(theme) => ({
                            color: theme.palette.tertiary.main,
                            my: -0.2,
                        })}
                    />
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
                        startIcon={<GitHub />}
                        onClick={() => {
                            window.open("https://github.com/harmeet9013/blogs");
                        }}
                    >
                        Source Code
                    </FooterButton>
                    <FooterButton
                        fullWidth={props.isMobile && true}
                        startIcon={<Web />}
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
