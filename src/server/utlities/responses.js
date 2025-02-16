export const successResponse = (
    message = "success",
    data = false,
    other = {}
) => {
    return Response.json({ status: true, message, data, ...other });
};

export const errorResponse = (message = "error", data = false, other = {}) => {
    return Response.json({ status: false, message, data, ...other });
};
