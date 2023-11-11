import BlogView from "@/sections/blogs/[id]/view";

export default function BlogPage({ params }) {
    const { id } = params;
    return <BlogView id={id} />;
}
