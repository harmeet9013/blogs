import { kebabCase } from "lodash";
//
import { NEXT_PUBLIC_API_URL } from "@/config";

export const toBytes = (value = 20) => {
    return value * 1024 * 1024;
};

export const toMB = (value = 20) => {
    return (value / 1024 / 1024).toFixed(2);
};

export const toKB = (value = 20) => {
    return (value / 1024).toFixed(2);
};

export const uniqueNameKey = (value) => {
    const uniqueKey = kebabCase(value?.trim()?.toLowerCase())?.replace(
        /-/g,
        "_"
    );

    return uniqueKey;
};

export const getFileType = (mime) => {
    if (mime?.startsWith("image")) {
        return "image";
    } else if (mime?.startsWith("application")) {
        return "file";
    } else if (mime?.startsWith("audio")) {
        return "audio";
    } else {
        return "other";
    }
};

export const getImageURL = (url = "") => {
    if (url?.startsWith("http") || url?.startsWith("blob")) {
        return url;
    } else if (!!url) {
        return (
            NEXT_PUBLIC_API_URL +
            (url?.startsWith("\\") || url?.startsWith("/") ? url : `/${url}`)
        );
    } else {
        return "";
    }
};
