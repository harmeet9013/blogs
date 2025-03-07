import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export const Progress = ({
    containerSx = {},
    showMessage = false,
    message = "Loading...",
    ...other
}) => {
    return (
        <Stack width={1} justifyContent="center" alignItems="center">
            <Box
                width={0.3}
                sx={{
                    ...containerSx,
                }}
                {...other}
            >
                {!!showMessage && (
                    <Typography variant="body1" fontWeight={600}>
                        {message}
                    </Typography>
                )}

                <LinearProgress />
            </Box>
        </Stack>
    );
};
