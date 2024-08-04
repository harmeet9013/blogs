import { useTheme } from "@emotion/react";
import { Button, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
//
import { PALETTE_NAMES } from "@/config/theme";
//
import { useSettingsContext } from "@/settings/context";

export default function PaletteButton({ index }) {
    const theme = useTheme();
    const { selectedPalette, setSelectedPalette } = useSettingsContext();

    const paletteData = PALETTE_NAMES[index];

    return (
        <Button
            onClick={() => setSelectedPalette(index)}
            sx={{
                p: 1,
                borderRadius: 3,
                width: theme.spacing(8),
                height: theme.spacing(8),
                transition:
                    theme.transitions.create(["all"], {
                        duration: 1500,
                    }) + "!important",
                ...(selectedPalette === index && {
                    borderRadius: 50,
                    outline: `2px solid ${theme.palette.divider}`,
                    background: theme.palette.background.paper,
                }),
            }}
        >
            <Stack
                width={1}
                height={1}
                borderRadius={50}
                overflow="hidden"
                sx={{}}
            >
                <Grid width={1} height={1} disableEqualOverflow container>
                    <Grid
                        xs={12}
                        bgcolor={paletteData["palettes"]["primary"][80]}
                    />

                    <Grid
                        xs={6}
                        bgcolor={paletteData["palettes"]["secondary"][80]}
                    />

                    <Grid
                        xs={6}
                        bgcolor={paletteData["palettes"]["tertiary"][80]}
                    />
                </Grid>
            </Stack>
        </Button>
    );
}
