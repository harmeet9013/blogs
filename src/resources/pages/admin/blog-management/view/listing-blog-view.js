import { fetchAllBlogs } from "@/resources";
import { LoadComponent } from "@/resources/components";
//
import { BlogListing } from "../blog-listing";

export const ListingBlogView = async () => {
    const { loading, data, error } = await fetchAllBlogs();

    return (
        <LoadComponent
            loading={loading}
            error={error}
            component={<BlogListing data={data} />}
        />
    );
};
