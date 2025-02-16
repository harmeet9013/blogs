import ShortUniqueId from "short-unique-id";

export const getQueryFromRequest = (req, key) => {
    if (!!req && !!key) {
        return req.nextUrl.searchParams.get(key);
    }
    return false;
};

export const getPaginationOptions = (
    req,
    isSearch = false,
    default_limit = 10,
    default_page = 1
) => {
    const limit = getQueryFromRequest(req, "limit");
    const current_page = getQueryFromRequest(req, "page");

    const page_options = {
        page: parseInt(isSearch ? 1 : current_page || default_page),
        limit: parseInt(isSearch ? 9 : limit || default_limit),
    };

    return page_options;
};

export const uid = new ShortUniqueId({ length: 10 });
