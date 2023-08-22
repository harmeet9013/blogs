import { Button, Divider, Grow, Stack, styled } from "@mui/material";
import { ArrowBack, Save } from "@mui/icons-material";

export default function HeaderActions(props) {
    const ActionButton = styled(Button)(({ theme }) => ({
        transition: theme.transitions.create(),
        padding: "10px ",
        color: theme.palette.text.primary,
        "&:hover": {
            backgroundColor: !props.isMobile && theme.palette.accent.hover,
        },
    }));

    return (
        <Grow in={true}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: "fixed",
                    bottom: "100px",
                    width: "8rem",
                    marginBottom: "2rem",
                    zIndex: "50",
                    borderRadius: "30px",
                    overflow: "hidden",
                    backdropFilter: "blur(5px)",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
                    opacity: "0.5",
                    transition: (theme) => theme.transitions.create(),
                    backgroundColor: (theme) =>
                        theme.palette.background.actions,
                    border: (theme) =>
                        `1px solid ${theme.palette.action.disabled}`,
                    "&:hover": {
                        backgroundColor: (theme) =>
                            theme.palette.background.default,
                    },
                }}
            >
                <ActionButton
                    onClick={() => {
                        props.setDialogInputs({
                            open: true,
                            title: "Discard changes?",
                            content:
                                "Are you sure you want to go back? This will discard everything!",
                            navigate: "/",
                            button: true,
                        });
                    }}
                >
                    <ArrowBack color="icon" />
                </ActionButton>
                <Divider flexItem variant="middle" orientation="vertical" />
                <ActionButton
                    onClick={() => {
                        props.setDialogInputs({
                            open: true,
                            title: "Submit Blog?",
                            content:
                                "Are you sure you want to create the blog?",
                            navigate: "",
                            button: true,
                        });
                    }}
                >
                    <Save color="icon" />
                </ActionButton>
            </Stack>
        </Grow>
    );
}
