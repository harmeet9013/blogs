import { BlogView } from "@/sections";
import { endpoints } from "@/lib/axios";
import { GET_REQUEST } from "@/services";

export default async function ({ params }) {
    const { id } = params;

    const response = await GET_REQUEST(endpoints["blogs"], { blog_id: id });

    return <BlogView blog={response?.data || false} />;
}
