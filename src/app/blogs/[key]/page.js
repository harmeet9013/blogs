import { BlogDetailView, fetchAllBlogs } from "@/resources";

export default async function Page({ params }) {
    const { key } = await params;

    const response = await fetchAllBlogs(key, undefined);

    return <BlogDetailView response={response} />;
}
