import { BlogDetailView, fetchAllBlogs } from "@/resources";

export default async function Page({ params }) {
    const { key } = params;

    const response = await fetchAllBlogs(key, undefined);

    return <BlogDetailView response={response} />;
}
