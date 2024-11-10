import { Stack } from "@mui/material";
//
import { RenderBlogs } from "../render-blogs";

export const HomeView = ({ blogs }) => {
    return (
        <Stack
            spacing={4}
            pt={15}
            pb={10}
            justifyContent="center"
            alignItems="center"
        >
            <RenderBlogs blogs={blogs} />
        </Stack>
    );
};
