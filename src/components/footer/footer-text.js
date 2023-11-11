"use client";

import { Container, Divider, Grow, Stack, Typography } from "@mui/material";

export default function FooterText() {
    return (
        <Grow in={true}>
            <Stack component={Container} spacing={4} pb={4}>
                <Divider flexItem />
                <Typography
                    variant="body1"
                    color="text.disabled"
                    textAlign="justify"
                    sx={{
                        cursor: "default",
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
