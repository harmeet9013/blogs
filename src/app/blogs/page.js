import { BlogsListView, fetchAllBlogs } from "@/resources";

export default async function Page() {
    const response = await fetchAllBlogs();

    return <BlogsListView response={response} />;
}
