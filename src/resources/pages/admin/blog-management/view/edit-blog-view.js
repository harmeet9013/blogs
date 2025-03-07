import { fetchAllBlogs, LoadComponent } from "@/resources";
//
import { BlogEditCreateForm } from "../blog-edit-create-form";

export const EditBlogView = async ({ blogId }) => {
    const { loading, data, error } = await fetchAllBlogs(blogId);

    return (
        <LoadComponent
            error={error}
            loading={loading}
            component={<BlogEditCreateForm blogData={data?.data?.at(0)} />}
        />
    );
};
