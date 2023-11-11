import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export default function LoadingScreen() {
    return (
        <Stack alignItems="center" m="auto" pt="50dvh" width="10rem">
            <Typography variant="h5" fontWeight={600}>
                Loading...
            </Typography>
            <Box width="100%">
                <LinearProgress />
            </Box>
        </Stack>
    );
}
