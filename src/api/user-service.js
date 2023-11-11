import { api } from "@/lib/axios";

const loginUser = async (url, payload) => {
    const response = await api
        .post(url, {
            loginData: payload,
        })
        .then((response) => {
            return { data: response, status: 200 };
        })
        .catch((error) => {
            return {
                data: {
                    error: error.response.data.error || "Something went wrong!",
                },
                status: 500,
            };
        });
    return response;
};

export default { loginUser };
