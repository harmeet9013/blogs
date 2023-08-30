import { Home } from "@mui/icons-material";
import { Button, Stack, Typography, styled } from "@mui/material";

import { navigate } from "../shared/CustomComponents";

export default function ErrorPage(props) {
    // global button used for various purposes
    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 40,
        backgroundColor: theme.palette.background.low,
        padding: "0.6rem 1.6rem",
        fontSize: theme.typography.h5.fontSize,
        width: "100%",
        border: `2px solid ${theme.palette.dividervar}`,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
            border: `2px solid ${theme.palette.primary.main}`,
        },
    }));

    return (
        <Stack
            direction="column"
            spacing={4}
            justifyContent="center"
            alignItems="center"
            width={props.isMobile ? "100%" : "50rem"}
            paddingTop="15vh"
            marginBottom={4}
        >
            <Typography
                variant="h4"
                sx={(theme) => ({
                    color: theme.palette.tertiary.main,
                })}
            >
                Uh oh, seems like you have wandered off somewhere else. <br />
                Don't worry, I gotchu.
            </Typography>

            <CustomButton
                onClick={() => {
                    props.setShowLoading(true);
                    setTimeout(() => {
                        navigate("/");
                        props.setShowLoading(false);
                    }, 200);
                }}
                startIcon={<Home />}
            >
                Latest Blogs
            </CustomButton>
        </Stack>
    );
}
