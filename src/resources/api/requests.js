import { axiosInstance as axios } from "./services";

export const GET_REQUEST = async (url, params = {}) => {
    return await axios
        .get(url, {
            params,
        })
        .then((response) => {
            return response?.data;
        })
        .catch((error) => {
            if (error?.response?.data?.validation_type)
                return error?.response?.data;

            return {
                status: false,
                message: error?.message || JSON.stringify(error),
                data: false,
            };
        });
};

export const POST_REQUEST = async (url, data, params = {}, headers = {}) => {
    return await axios
        .post(url, data, {
            params,
            headers: {
                ...headers,
            },
        })
        .then((response) => {
            return response?.data;
        })
        .catch((error) => {
            if (error?.response?.data?.validation_type)
                return error?.response?.data;

            return {
                status: false,
                message: error?.message || JSON.stringify(error),
                data: false,
            };
        });
};

export const PUT_REQUEST = async (url, data, params = {}) => {
    return await axios
        .put(url, data, { params })
        .then((response) => {
            return response?.data;
        })
        .catch((error) => {
            if (error?.response?.data?.validation_type)
                return error?.response?.data;

            return {
                status: false,
                message: error?.message || JSON.stringify(error),
                data: false,
            };
        });
};

export const DELETE_REQUEST = async (url, params) => {
    return await axios
        .delete(url, { params })
        .then((response) => {
            return response?.data;
        })
        .catch((error) => {
            return {
                status: false,
                message: error?.message || JSON.stringify(error),
                data: false,
            };
        });
};
