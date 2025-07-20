"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//
import {
    reduxStore,
    useBoolean,
    GET_REQUEST,
    LoadComponent,
    mediaSliceActions,
} from "@/resources";
import { endpoints } from "@/config";
import { MediaLibraryList } from "../media-library-list";

export const MediaListView = () => {
    const { setData, getDataSelector, setPagination } = mediaSliceActions;

    const dispatch = useDispatch();
    const isLoading = useBoolean(true);
    const isUpdating = useBoolean(false);
    const mediaData = useSelector(getDataSelector);

    const [error, setError] = useState(false);

    const fetchMediaData = async (search_object) => {
        isUpdating.onTrue();

        const paginationData = reduxStore?.getState()?.media?.pagination;

        const params = {
            ...(search_object?.search && {
                search: search_object?.search,
            }),
            ...(search_object?.type &&
                search_object?.type !== "all" && {
                    type: search_object?.type,
                }),

            limit: paginationData?.limit,
            page: paginationData?.current_page,
        };

        const response = await GET_REQUEST(endpoints["media"]["root"], params);

        if (response?.status) {
            dispatch(setData(response?.data));
            dispatch(setPagination(response?.pagination));
        } else {
            setError(response?.message);
        }

        isLoading.onFalse();
        isUpdating.onFalse();
    };

    useEffect(() => {
        if (!!mediaData) {
            isLoading.onFalse();
            isUpdating.onFalse();
        } else {
            fetchMediaData();
        }
    }, []);

    return (
        <LoadComponent
            error={error}
            loading={isLoading?.value}
            component={
                <MediaLibraryList
                    fetchMedia={fetchMediaData}
                    isUpdating={isUpdating?.value}
                />
            }
        />
    );
};
