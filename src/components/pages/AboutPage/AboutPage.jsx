import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Grow,
    IconButton,
    Link,
    Stack,
    Tooltip,
    Typography,
    styled,
} from "@mui/material";
import {
    DownloadRounded,
    EmailRounded,
    GitHub,
    LinkedIn,
} from "@mui/icons-material";

import { TooltipSX } from "../../shared/CustomComponents";
import HS_Image from "../../shared/assets/pictures/harmeet_singh.jpg";

export default function AboutPage(props) {
    const SocialIconButton = styled(IconButton)(({ theme }) => ({
        transition: theme.transitions.create(),
        backgroundColor: theme.palette.secondary.fixed.on,
        color: theme.palette.secondary.fixed.main,
        "&:hover": {
            transform: "translateY(-0.2rem)",
            color: theme.palette.secondary.fixed.main,
            backgroundColor: theme.palette.secondary.fixed.onvar,
            boxShadow: theme.shadows[4],
        },
    }));

    return (
        !props.showLoading && (
            <Grow in={true}>
                <Stack
                    component={Container}
                    spacing={4}
                    direction={props.isMobile ? "column" : "row"}
                    paddingTop="7rem"
                    paddingBottom={4}
                >
                    <Box
                        component="img"
                        src={HS_Image}
                        sx={{
                            width: props.isMobile ? "100%" : "30rem",
                            borderRadius: 40,
                            transition: (theme) => theme.transitions.create(),
                            objectFit: "cover",
                            "&:hover": {
                                boxShadow: (theme) => theme.shadows[4],
                            },
                        }}
                    />

                    <Stack
                        direction="column"
                        spacing={3}
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        width="100%"
                        sx={{
                            cursor: "default",
                        }}
                    >
                        <Typography
                            variant="h2"
                            letterSpacing={10}
                            fontWeight={500}
                            color="primary"
                        >
                            About
                        </Typography>

                        <Divider
                            flexItem
                            sx={{
                                borderBottomWidth: 5,
                                width: "20%",
                                borderRadius: 50,
                            }}
                        />

                        <Card
                            sx={(theme) => ({
                                borderRadius: 20,
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "0.6rem 1.2rem",
                                transition: theme.transitions.create(),
                                backgroundColor:
                                    theme.palette.secondary.container.on,
                            })}
                        >
                            <CardContent>
                                <Typography
                                    variant={props.isMobile ? "body1" : "h5"}
                                    textAlign="center"
                                    color={(theme) =>
                                        theme.palette.secondary.container.main
                                    }
                                >
                                    My name is Harmeet Singh, and I am a fresher{" "}
                                    <b> MERN Stack Web Developer</b>.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Typography
                            variant="body1"
                            textAlign="left"
                            paddingRight={props.isMobile ? 5 : 25}
                        >
                            This website was built in 3 weeks with several{" "}
                            <Tooltip
                                title="Takes you to GitHub"
                                disableInteractive
                                componentsProps={TooltipSX}
                            >
                                <Link
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/harmeet9013/blogs/commits/main"
                                        )
                                    }
                                    color="secondary"
                                    underline="none"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    QOL changes
                                </Link>
                            </Tooltip>{" "}
                            along the way.
                        </Typography>

                        <Typography
                            variant="body1"
                            textAlign="right"
                            paddingLeft={props.isMobile ? 5 : 25}
                        >
                            I specialize in building beautiful SPA's and
                            scalable backend solutions.
                        </Typography>

                        <Typography variant="h4" paddingTop={4}>
                            Get in touch with me!
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={4}
                            width="100%"
                            justifyContent={props.isMobile && "center"}
                            alignItems="center"
                        >
                            <Tooltip
                                title="Download Resume"
                                disableInteractive
                                componentsProps={TooltipSX}
                            >
                                <SocialIconButton
                                    size="large"
                                    onClick={() =>
                                        window.open(
                                            "https://bit.ly/harmeet9013-resume"
                                        )
                                    }
                                >
                                    <DownloadRounded />
                                </SocialIconButton>
                            </Tooltip>

                            <Tooltip
                                title="Github"
                                disableInteractive
                                componentsProps={TooltipSX}
                            >
                                <SocialIconButton
                                    size="large"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/harmeet9013"
                                        )
                                    }
                                >
                                    <GitHub />
                                </SocialIconButton>
                            </Tooltip>

                            <Tooltip
                                title="LinkedIn"
                                disableInteractive
                                componentsProps={TooltipSX}
                            >
                                <SocialIconButton
                                    size="large"
                                    onClick={() =>
                                        window.open(
                                            "https://linkedin.com/in/harmeet9013"
                                        )
                                    }
                                >
                                    <LinkedIn />
                                </SocialIconButton>
                            </Tooltip>

                            <Tooltip
                                title="Email"
                                disableInteractive
                                componentsProps={TooltipSX}
                            >
                                <SocialIconButton
                                    size="large"
                                    onClick={() =>
                                        window.open(
                                            "mailto:hssaggu1313@gmail.com"
                                        )
                                    }
                                >
                                    <EmailRounded />
                                </SocialIconButton>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Stack>
            </Grow>
        )
    );
}
