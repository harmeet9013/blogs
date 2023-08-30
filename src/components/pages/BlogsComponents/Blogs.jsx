import { Fragment } from "react";
import { Refresh } from "@mui/icons-material";
import { Button, Grow, Stack, Typography, styled } from "@mui/material";

import RenderBlogs from "./RenderBlogs";
import { FooterText } from "../../shared/Footer";

export default function Blogs(props) {
    // global button used for various purposes
    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 40,
        backgroundColor: theme.palette.background.low,
        padding: "0.8rem 1.5rem",
        fontSize: theme.typography.h5.fontSize,
        width: "100%",
        border: `2px solid ${theme.palette.dividervar}`,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
            border: `2px solid ${theme.palette.secondary.container.main}`,
        },
    }));

    return (
        <Fragment>
            <Stack
                direction="column"
                spacing={4}
                paddingTop="7rem"
                width={props.isMobile ? "100%" : "48rem"}
                marginBottom={4}
                sx={(theme) => ({
                    transition: theme.transitions.create(),
                })}
            >
                {props.blogs && !props.showLoading ? (
                    <RenderBlogs
                        blogs={props.blogs}
                        isMobile={props.isMobile}
                        setShowLoading={props.setShowLoading}
                    />
                ) : (
                    !props.showLoading && (
                        <Grow in={true}>
                            <Stack
                                direction="column"
                                spacing={4}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography variant="h6">
                                    Could not connect to the database. <br />
                                    Try again after sometime.
                                </Typography>
                                <CustomButton
                                    onClick={() => props.setRefresh(true)}
                                    startIcon={<Refresh />}
                                >
                                    Refresh
                                </CustomButton>
                            </Stack>
                        </Grow>
                    )
                )}
            </Stack>
            {!props.showLoading && <FooterText />}
        </Fragment>
    );
}
