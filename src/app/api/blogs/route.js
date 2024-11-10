import { blogModel, connectDB, errorResponse, successResponse } from "@/server";

export async function GET(req) {
    const dbConnected = await connectDB();

    if (!!dbConnected) {
        const blog_id = req.nextUrl.searchParams.get("blog_id");

        const find_query = { ...(!!blog_id ? { _id: blog_id } : {}) };
        const select_query = `${blog_id ? `` : "-content"} -__v`;

        try {
            const response = await blogModel
                .find(find_query)
                .sort({ _id: -1 })
                .populate("authorID", "-password -blogs -__v")
                .select(select_query);

            if (!!response?.length) {
                return successResponse("Fetched cards", {
                    data: blog_id ? response?.at(0) : [...response],
                });
            } else {
                return errorResponse("Note not found", {
                    data: false,
                });
            }
        } catch (error) {
            return errorResponse("Error fetching data", {
                data: [],
            });
        }
    } else {
        return errorResponse("Error fetching data", {
            data: [],
        });
    }
}
