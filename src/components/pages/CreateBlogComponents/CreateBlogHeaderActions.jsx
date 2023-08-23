import { enqueueSnackbar } from "notistack";
import { ArrowBack, Save } from "@mui/icons-material";
import { Divider, Grow, Stack, Tooltip } from "@mui/material";

import {
    ActionButton,
    TooltipSX,
    confirmDialog,
    navigate,
} from "../../shared/CustomComponents";
import { useEffect, useState } from "react";

export default function HeaderActions(props) {
    const [headerSticky, setHeaderSticky] = useState(false);

    const handleIntersection = ([entry]) =>
        setHeaderSticky(!entry.isIntersecting);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0,
        });

        const createBlogHeaderActions = document.getElementById(
            "create-blog-actions"
        );

        if (createBlogHeaderActions) {
            observer.observe(createBlogHeaderActions);
        }

        return () => {
            if (createBlogHeaderActions) {
                observer.unobserve(createBlogHeaderActions);
            }
        };
    }, [headerSticky]);

    return (
        <Grow in={true}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                position={headerSticky ? "fixed" : "sticky"}
                top={headerSticky && 0}
                bottom={!headerSticky && "100px"}
                width="8rem"
                marginBottom="2rem"
                zIndex={50}
                borderRadius="30px"
                overflow="hidden"
                boxShadow="0 1px 5px rgba(0, 0, 0, 0.2)"
                border={(theme) => `1px solid ${theme.palette.action.disabled}`}
                id="create-blog-actions"
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
                <Tooltip
                    title="Discard"
                    disableInteractive
                    componentsProps={TooltipSX}
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
                                    setTimeout(() => {
                                        enqueueSnackbar("Blog was discarded!", {
                                            variant: "info",
                                        });
                                        navigate("/");
                                        props.setShowLoading(false);
                                    }, 200);
                                })
                                .catch(() => {
                                    props.setShowLoading(false);
                                });
                        }}
                    >
                        <ArrowBack color="icon" />
                    </ActionButton>
                </Tooltip>

                <Divider flexItem variant="middle" orientation="vertical" />

                <Tooltip
                    title="Save"
                    disableInteractive
                    componentsProps={TooltipSX}
                >
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
                </Tooltip>
            </Stack>
        </Grow>
    );
}
