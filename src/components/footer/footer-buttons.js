"use client";

import { PALETTE_NAMES } from "@/config/theme";
import { useSettingsContext } from "@/settings/context";
import { FavoriteRounded, GitHub, Web } from "@mui/icons-material";
import {
    Button,
    Container,
    Divider,
    Grow,
    Stack,
    Typography,
} from "@mui/material";
import PaletteButton from "./palette-button";

export default function FooterButtons(props) {
    const { isMobile } = useSettingsContext();

    return (
        <Grow in={true}>
            <Stack component={Container} spacing={2} pb={5}>
                <Divider flexItem />
                <Stack
                    width={1}
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {Object.keys(PALETTE_NAMES).map((item, index) => (
                        <PaletteButton index={index + 1} key={index} />
                    ))}
                </Stack>

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

                <Divider flexItem />

                <Stack
                    direction={isMobile ? "column" : "row"}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    component={Container}
                >
                    <Button
                        fullWidth={isMobile && true}
                        startIcon={<GitHub />}
                        variant="outlined"
                        onClick={() => {
                            window.open("https://github.com/harmeet9013/blogs");
                        }}
                    >
                        Source Code
                    </Button>
                    <Button
                        fullWidth={isMobile && true}
                        startIcon={<Web />}
                        variant="outlined"
                        onClick={() => {
                            window.open("https://harmeet9013.github.io");
                        }}
                    >
                        Portfolio
                    </Button>
                </Stack>
            </Stack>
        </Grow>
    );
}
