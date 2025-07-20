"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import {
    reduxStore,
    useBoolean,
    fetchAllBlogs,
    LoadComponent,
    adminBlogSliceActions,
} from "@/resources";
//
import { BlogListing } from "../blog-listing";

export const ListingBlogView = () => {
    const { getDataSelector, setData, setPagination } = adminBlogSliceActions;

    const dispatch = useDispatch();
    const isLoading = useBoolean(true);
    const isUpdating = useBoolean(false);
    const blogsData = useSelector(getDataSelector);

    const [error, setError] = useState(null);

    const fetchApi = async (search_term, published = true) => {
        isUpdating.onTrue();

        let paginationData = reduxStore.getState().adminBlog.pagination;

        let pagination = {
            limit: paginationData?.limit,
            page: paginationData?.current_page,
        };

        const response = await fetchAllBlogs(
            undefined,
            search_term,
            published,
            pagination
        );

        if (!!response?.data?.status) {
            dispatch(setData(response?.data?.data));
            dispatch(setPagination(response?.data?.pagination));
        } else {
            setError(
                response?.data?.message || response?.error || "unexpected error"
            );
        }

        isLoading.onFalse();
        isUpdating.onFalse();
    };

    useEffect(() => {
        if (!blogsData) {
            fetchApi();
        } else {
            isLoading.onFalse();
        }
    }, []);

    return (
        <LoadComponent
            error={error}
            loading={isLoading?.value}
            component={
                <BlogListing
                    fetchApi={fetchApi}
                    isUpdating={isUpdating?.value}
                />
            }
        />
    );
};
