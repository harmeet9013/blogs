import {
    errorResponse,
    successResponse,
    getQueryFromRequest,
    getPaginationOptions,
    uid,
} from "../utlities";
import { blogModel } from "../models";
import { blogsCreateSchema, blogsUpdateSchema } from "../schemas";

export const getBlogs = async (req) => {
    let blog_id = getQueryFromRequest(req, "blog");
    let search_term = getQueryFromRequest(req, "search");

    let page_options = getPaginationOptions(req, !!search_term, 9);

    try {
        let query = {
            ...(blog_id ? { key: blog_id } : {}),
            ...(search_term
                ? {
                      $or: [
                          {
                              title: {
                                  $regex: ".*" + search_term + ".*",
                                  $options: "i",
                              },
                          },
                          //   {
                          //       author: {
                          //           name: {
                          //               $regex: ".*" + search_term + ".*",
                          //               $options: "i",
                          //           },
                          //       },
                          //   },
                      ],
                  }
                : {}),
        };

        const blogs = await blogModel
            .find(query)
            .populate("author")
            .skip(page_options?.limit * (page_options?.page - 1))
            .limit(page_options?.limit)
            .sort("-updatedAt")
            .select("-_id -__v");

        if (!!blog_id && !blogs?.length) {
            return errorResponse("no blog found");
        }

        const blogs_count = await blogModel.countDocuments(query);

        return successResponse("all blogs", blogs, {
            pagination: {
                ...page_options,
                current_page: page_options?.page,
                total_items: parseInt(blogs_count),
                total_pages: Math.ceil(blogs_count / page_options?.limit),
            },
        });
    } catch (error) {
        return errorResponse(error?.message || "unexpected error");
    }
};

export const createBlog = async (req) => {
    try {
        const request_body = await req.json();

        await blogsCreateSchema(request_body);

        const blog_data = {
            title: request_body?.title,
            key: uid.rnd(),
            content: request_body?.content,
            revision: 1,
        };

        const response = await blogModel.create(blog_data);

        return successResponse("blog created", response);
    } catch (error) {
        return errorResponse(error?.message);
    }
};

export const updateBlog = async (req) => {
    try {
        let blog_id = getQueryFromRequest(req, "blog");

        const request_body = await req.json();

        await blogsUpdateSchema({ id: blog_id });

        const blog_data = await blogModel.findOne({ key: blog_id });

        blog_data.title = request_body?.title || [];
        blog_data.content = request_body?.content || [];

        blog_data.revision = blog_data?.revision + 1;

        const response = await blog_data.save();

        return successResponse("blog updated", response);
    } catch (error) {
        return errorResponse(error?.message);
    }
};
