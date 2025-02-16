import { Stack, Typography } from "@mui/material";
//
import { BlogDetail } from "../blog-detail";

export const BlogDetailView = ({ response }) => {
    const { data, error } = response;

    if (!!error || !data?.data?.length) {
        return (
            <Stack gap={4} pt={4}>
                <Typography variant="h4">{error}</Typography>
            </Stack>
        );
    }

    return <BlogDetail blog={data?.data?.[0]} />;
};
