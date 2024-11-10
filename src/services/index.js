import { SERVER_URL } from "@/config";

const generateRequest = async (
    url,
    method = "GET",
    params = {},
    body = {},
    headers = {}
) => {
    const apiParams = new URLSearchParams(params);
    const apiUrl = `${
        typeof SERVER_URL !== "undefined" ? SERVER_URL : ""
    }${url}?${apiParams}`;

    const raw_response = await fetch(apiUrl, {
        method: method || "GET",
        cache: "no-store",
        headers: {
            ...headers,
        },
        ...(["POST", "PUT"]?.includes(method)
            ? {
                  body: JSON.stringify(body),
              }
            : {}),
    });

    if (raw_response?.status === 200) {
        return await raw_response.json();
    } else {
        return {
            status: false,
            message: raw_response?.statusText || "Unexpected Error",
            data: [],
        };
    }
};

export const GET_REQUEST = async (url, params = {}) => {
    return await generateRequest(url, "GET", params);
};

export const POST_REQUEST = async (
    url,
    data = {},
    params = {},
    headers = {}
) => {
    return await generateRequest(url, "POST", params, data, headers);
};

export const PUT_REQUEST = async (url, data = {}, params = {}) => {
    return await generateRequest(url, "PUT", params, data);
};

export const DELETE_REQUEST = async (url, params = {}) => {
    return await generateRequest(url, "DELETE", params);
};
