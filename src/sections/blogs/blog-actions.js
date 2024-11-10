import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
//
import {
    ArrowBackRounded,
    CancelRounded,
    CheckCircleRounded,
    DeleteForeverRounded,
    EditRounded,
    LinkRounded,
    SaveRounded,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material/styles";
import { Button, Divider, Grow, Stack, Tooltip } from "@mui/material";
//
import { enqueueSnackbar } from "notistack";
//
import { ConfirmDialog } from "@/components/custom-dialog";
//
import { useAuthContext } from "@/context";
import { useSettingsContext } from "@/settings/context";
//
import { ActionButton } from "./styled/blog-styled";

export const RenderBlogActions = () => {
    const theme = useTheme();
    const router = useRouter();
    const { isMobile } = useSettingsContext();
    const { authenticated } = useAuthContext();

    const [editMode, setEditMode] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [headerSticky, setHeaderSticky] = useState(false);

    const [discardEditDialog, setDiscardEditDialog] = useState(false);
    const [deleteBlogDialog, setDeleteBlogDialog] = useState({
        one: false,
        two: false,
    });

    const handleIntersection = (entries) => {
        const [entry] = entries;
        setHeaderSticky(!entry.isIntersecting);
    };

    const handleCopyURL = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            enqueueSnackbar("Link copied to clipboard!");
            setIsCopied(true);
        } catch (error) {
            enqueueSnackbar("Could not copy link!", { variant: "error" });
            setIsCopied(false);
        }

        setTimeout(() => {
            setIsCopied(false);
        }, 8000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0,
        });

        const headerActions = document.getElementById("header-actions");

        if (headerActions) {
            observer.observe(headerActions);
        }

        return () => {
            if (headerActions) {
                observer.unobserve(headerActions);
            }
        };
    }, [headerSticky]);

    return (
        <>
            <Grow in={true} timeout={{ enter: 500 }}>
                <Stack
                    direction="row"
                    id="header-actions"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius={5}
                    m="auto"
                    mb={5}
                    zIndex={50}
                    width={
                        authenticated
                            ? editMode
                                ? theme.spacing(16)
                                : theme.spacing(32)
                            : theme.spacing(16)
                    }
                    overflow="hidden"
                    border={`1px solid ${theme.palette.action.disabled}`}
                    sx={{
                        ...(headerSticky
                            ? {
                                  position: "fixed",
                                  top: 0,
                              }
                            : {
                                  position: "sticky",
                                  bottom: isMobile ? 100 : 50,
                              }),
                        transition: `${theme.transitions.create()} !important`,
                        backgroundColor: alpha(
                            theme.palette.background.default,
                            0.95
                        ),
                        backdropFilter: "blur(6px)",
                    }}
                >
                    {editMode ? (
                        <>
                            <Tooltip
                                title="Discard"
                                placement="top"
                                disableInteractive
                            >
                                <ActionButton
                                    onClick={() => setDiscardEditDialog(true)}
                                >
                                    <CancelRounded />
                                </ActionButton>
                            </Tooltip>

                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />

                            <Tooltip
                                title="Confirm changes"
                                placement="top"
                                disableInteracive
                            >
                                <ActionButton>
                                    <SaveRounded />
                                </ActionButton>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip
                                title="Back"
                                placement="top"
                                disableInteractive
                            >
                                <ActionButton
                                    onClick={() => router.push("/home")}
                                >
                                    <ArrowBackRounded />
                                </ActionButton>
                            </Tooltip>

                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />

                            <Tooltip
                                title={!isCopied && "Copy link"}
                                placement="top"
                                disableInteractive
                            >
                                <ActionButton
                                    onClick={!isCopied && handleCopyURL}
                                >
                                    <Grow in={true}>
                                        {isCopied ? (
                                            <CheckCircleRounded color="tertiary.main" />
                                        ) : (
                                            <LinkRounded />
                                        )}
                                    </Grow>
                                </ActionButton>
                            </Tooltip>

                            {authenticated && (
                                <>
                                    <Divider
                                        orientation="vertical"
                                        variant="middle"
                                        flexItem
                                    />

                                    <Tooltip
                                        title="Edit"
                                        placement="top"
                                        disableInteractive
                                    >
                                        <ActionButton
                                            onClick={() => setEditMode(true)}
                                        >
                                            <EditRounded />
                                        </ActionButton>
                                    </Tooltip>

                                    <Divider
                                        orientation="vertical"
                                        variant="middle"
                                        flexItem
                                    />

                                    <Tooltip
                                        title="Delete"
                                        placement="top"
                                        disableInteractive
                                    >
                                        <ActionButton
                                            onClick={() =>
                                                setDeleteBlogDialog({
                                                    one: true,
                                                    two: false,
                                                })
                                            }
                                        >
                                            <DeleteForeverRounded />
                                        </ActionButton>
                                    </Tooltip>
                                </>
                            )}
                        </>
                    )}
                </Stack>
            </Grow>

            <ConfirmDialog
                open={discardEditDialog}
                onClose={() => setDiscardEditDialog(false)}
                title="Discard changes?"
                content="This action is irreversible. Are you sure?"
                action={
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => {
                            setDiscardEditDialog(false);
                            setEditMode(false);
                        }}
                    >
                        Yes
                    </Button>
                }
            />

            <ConfirmDialog
                open={deleteBlogDialog.one}
                onClose={() => setDeleteBlogDialog({ one: false, two: false })}
                title="Delete blog"
                content="Are you sure you want to delete this blog?"
                action={
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() =>
                            setDeleteBlogDialog({ one: false, two: true })
                        }
                    >
                        Yes
                    </Button>
                }
            />

            <ConfirmDialog
                open={deleteBlogDialog.two}
                onClose={() => setDeleteBlogDialog({ one: false, two: false })}
                title="Are you sure?"
                content="This is an irreversible task. Are you absolutely sure?"
                action={
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() =>
                            setDeleteBlogDialog({ one: false, two: false })
                        }
                    >
                        Yes
                    </Button>
                }
            />
        </>
    );
};
