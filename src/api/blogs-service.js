import axiosInstance from "@/lib/axios";

const fetchAllSingleBlog = async (url) => {
    const response = await axiosInstance
        .get(url)
        .then((response) => {
            return { data: response.data, status: 200 };
        })
        .catch((error) => {
            console.log("AXIOS ERROR =>", error);
            return { data: "Something went wrong!", status: 500 };
        });
    return response;
};

export default { fetchAllSingleBlog };
