import { Home } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

import { CustomButton, navigate } from "../shared/CustomComponents";

export default function ErrorPage(props) {
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
            <Typography variant="h6">
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
                startIcon={<Home color="icon" />}
            >
                Latest Blogs
            </CustomButton>
        </Stack>
    );
}
