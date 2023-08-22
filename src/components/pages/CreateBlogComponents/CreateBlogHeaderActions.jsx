import { Button, Divider, Grow, Stack, styled } from "@mui/material";
import { ArrowBack, Save } from "@mui/icons-material";
import { useConfirm } from "material-ui-confirm";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

export default function HeaderActions(props) {
    const confirmDialog = useConfirm();
    const navigate = useNavigate();

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
                position="fixed"
                bottom="100px"
                width="8rem"
                marginBottom="2rem"
                zIndex={50}
                borderRadius="30px"
                overflow="hidden"
                boxShadow="0 1px 5px rgba(0, 0, 0, 0.2)"
                border={(theme) => `1px solid ${theme.palette.action.disabled}`}
                sx={{
                    backdropFilter: "blur(5px)",
                    opacity: "0.5",
                    transition: (theme) => theme.transitions.create(),
                    backgroundColor: (theme) =>
                        theme.palette.background.actions,
                    "&:hover": {
                        backgroundColor: (theme) =>
                            theme.palette.background.default,
                    },
                }}
            >
                <ActionButton
                    onClick={() => {
                        confirmDialog({
                            title: "Discard changes?",
                            content:
                                "Are you sure you want to go back? This will discard everything!",
                        })
                            .then(() => {
                                props.setShowLoading(true);
                                enqueueSnackbar("Blog was discarded!", {
                                    variant: "info",
                                });
                                navigate("/");
                            })
                            .catch(() => {
                                props.setShowLoading(false);
                            });
                    }}
                >
                    <ArrowBack color="icon" />
                </ActionButton>
                <Divider flexItem variant="middle" orientation="vertical" />
                <ActionButton
                    onClick={() => {
                        confirmDialog({
                            title: "Submit Blog?",
                            content:
                                "Are you sure you want to create the blog?",
                        })
                            .then(props.handleSubmit)
                            .catch(() => {
                                props.setShowLoading(false);
                            });
                    }}
                >
                    <Save color="icon" />
                </ActionButton>
            </Stack>
        </Grow>
    );
}
