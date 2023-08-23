import { Fragment } from "react";
import { Grow, Stack, Typography } from "@mui/material";

import RenderBlogs from "./RenderBlogs";
import { FooterText } from "../../shared/Footer";
import { CustomButton } from "../../shared/CustomComponents";
import { Refresh } from "@mui/icons-material";

export default function Blogs(props) {
    return (
        <Fragment>
            <Stack
                direction="column"
                spacing={4}
                paddingTop="8rem"
                width={props.isMobile ? "100%" : "48rem"}
                marginBottom={4}
                sx={{
                    transition: (theme) => theme.transitions.create(),
                }}
            >
                {props.blogs && !props.showLoading ? (
                    <RenderBlogs
                        blogs={props.blogs}
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
                                    startIcon={<Refresh color="icon" />}
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
