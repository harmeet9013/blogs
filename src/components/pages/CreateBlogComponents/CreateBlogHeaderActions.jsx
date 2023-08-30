import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { ArrowBack, Save } from "@mui/icons-material";
import { Button, Divider, Grow, Stack, Tooltip, styled } from "@mui/material";

import {
    TooltipSX,
    confirmDialog,
    navigate,
} from "../../shared/CustomComponents";

export default function HeaderActions(props) {
    const [headerSticky, setHeaderSticky] = useState(false);

    // small buttons that appear for solog blog and create blog components
    const ActionButton = styled(Button)(({ theme }) => ({
        padding: "0.6rem 2rem",
        color: theme.palette.primary.main,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
        },
    }));

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
                id="create-blog-actions"
                sx={(theme) => ({
                    ...(headerSticky
                        ? {
                              position: "fixed",
                              top: 0,
                          }
                        : {
                              position: "sticky",
                              bottom: props.isMobile ? 100 : 50,
                          }),
                    width: "8rem",
                    zIndex: 50,
                    borderRadius: 50,
                    marginBottom: 4,
                    overflow: "hidden",
                    transition: theme.transitions.create(),
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.action.disabled}`,
                })}
            >
                <Tooltip
                    title="Discard"
                    placement="top"
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
                        <ArrowBack />
                    </ActionButton>
                </Tooltip>

                <Divider flexItem variant="middle" orientation="vertical" />

                <Tooltip
                    title="Save"
                    placement="top"
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
                        <Save />
                    </ActionButton>
                </Tooltip>
            </Stack>
        </Grow>
    );
}
