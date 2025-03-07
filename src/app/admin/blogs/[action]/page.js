import { CreateBlogView, EditBlogView } from "@/resources";

export default async function Page({ params }) {
    const { action } = await params;

    if (action === "create") {
        return <CreateBlogView />;
    } else {
        return <EditBlogView blogId={action} />;
    }
}
