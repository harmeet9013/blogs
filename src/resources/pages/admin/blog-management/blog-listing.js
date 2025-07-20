"use client";

import {
    Tab,
    Tabs,
    Paper,
    Stack,
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    IconButton,
    Typography,
    TableContainer,
    TablePagination,
    Button,
    Divider,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddRounded, EditRounded, DeleteRounded } from "@mui/icons-material";
//
import {
    BLOG_LISTING_TAB_HEAD,
    BLOG_LISTING_TABKE_HEAD,
    BLOG_LISTING_TABLE_HEAD,
    PATHS,
} from "@/config";
import { adminBlogSliceActions } from "@/resources/redux";
import { LoadComponent } from "@/resources/components";

export const BlogListing = ({ fetchApi, isUpdating }) => {
    const {
        setSelectedTab,
        getDataSelector,
        setPagination,
        getPaginationSelector,
        clearPagination,
        getSelectedTabSelector,
    } = adminBlogSliceActions;

    const router = useRouter();
    const muiTheme = useTheme();
    const dispatch = useDispatch();
    const blogData = useSelector(getDataSelector);
    const paginationData = useSelector(getPaginationSelector);
    const selectedTab = useSelector(getSelectedTabSelector);

    const handleActionClick = (action = "edit", key) => {
        if (action === "edit") {
            router.push(PATHS["admin"]["blogs"]["create_edit"](key));
        }
    };

    const handlePageChange = (event, newPage) => {
        if (event === "published") {
            dispatch(setSelectedTab(event));
            dispatch(clearPagination());
            fetchApi(undefined, true);
        } else if (event === "unpublished") {
            dispatch(setSelectedTab(event));
            dispatch(clearPagination());
            fetchApi(undefined, false);
        } else if (event?.search_term) {
            dispatch(clearPagination());
            fetchApi(
                { search_term: event?.search_term },
                selectedTab === 0 ? true : false
            );
        } else {
            dispatch(
                setPagination({
                    ...paginationData,
                    current_page: paginationData?.current_page + 1,
                })
            );
            fetchApi(
                { search_term: event?.search_term },
                selectedTab === 0 ? true : false
            );
        }
    };

    return (
        <Stack width={1} gap={4}>
            <Stack
                width={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="h3">blogs list</Typography>

                <Button
                    fullWidth={false}
                    startIcon={<AddRounded />}
                    disabled={isUpdating}
                    onClick={() => handleActionClick("edit", "create")}
                >
                    create new blog
                </Button>
            </Stack>

            <LoadComponent
                loading={isUpdating}
                error={false}
                component={
                    <>
                        <Stack
                            width={1}
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Tabs
                                value={selectedTab}
                                variant="scrollable"
                                onChange={(e, index) => {
                                    handlePageChange(index);
                                    setSelectedTab(index);
                                }}
                            >
                                {BLOG_LISTING_TAB_HEAD?.map((item, index) => (
                                    <Tab
                                        key={index}
                                        value={item?.value}
                                        label={`${item?.value} ${
                                            selectedTab === item?.value
                                                ? `- ${
                                                      paginationData?.total_items ||
                                                      0
                                                  }`
                                                : ""
                                        }`}
                                    />
                                ))}

                                <Tab
                                    value={1}
                                    label={` ${
                                        selectedTab === 1
                                            ? `- ${
                                                  paginationData?.total_items ||
                                                  0
                                              }`
                                            : ""
                                    }`}
                                />
                            </Tabs>
                        </Stack>

                        <Divider />

                        {!!blogData?.length ? (
                            <>
                                <TableContainer component={Paper} elevation={0}>
                                    <Table
                                        sx={{
                                            minWidth: muiTheme.spacing(100),
                                        }}
                                    >
                                        <TableHead>
                                            <TableRow>
                                                {BLOG_LISTING_TABLE_HEAD?.map(
                                                    (item, index) => (
                                                        <TableCell key={index}>
                                                            <Typography
                                                                variant="body1"
                                                                fontWeight={500}
                                                                color="secondary"
                                                            >
                                                                {item?.label}
                                                            </Typography>
                                                        </TableCell>
                                                    )
                                                )}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {blogData?.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        {index + 1}
                                                    </TableCell>

                                                    <TableCell>
                                                        {item?.title}
                                                    </TableCell>

                                                    <TableCell>
                                                        {item?.revision}
                                                    </TableCell>

                                                    <TableCell>
                                                        <Stack
                                                            gap={1}
                                                            direction="row"
                                                            alignItems="center"
                                                        >
                                                            <IconButton
                                                                variant="contained"
                                                                onClick={() =>
                                                                    handleActionClick(
                                                                        "edit",
                                                                        item?.key
                                                                    )
                                                                }
                                                            >
                                                                <EditRounded />
                                                            </IconButton>

                                                            <IconButton
                                                                color="error"
                                                                variant="contained"
                                                            >
                                                                <DeleteRounded />
                                                            </IconButton>
                                                        </Stack>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                <TablePagination
                                    component="div"
                                    rowsPerPageOptions={[paginationData?.limit]}
                                    onPageChange={handlePageChange}
                                    rowsPerPage={paginationData?.limit}
                                    count={paginationData?.total_items}
                                    page={paginationData?.current_page - 1}
                                />
                            </>
                        ) : (
                            <Typography
                                variant="h6"
                                align="center"
                                color="text.disabled"
                            >
                                no blogs found
                            </Typography>
                        )}
                    </>
                }
            />
        </Stack>
    );
};
