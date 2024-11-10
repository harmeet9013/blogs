export const successResponse = async (message, data) => {
    return Response.json(
        { status: true, message: message, ...data },
        { status: 200 }
    );
};

export const errorResponse = async (message, data) => {
    return Response.json(
        { status: false, message: message, ...data },
        { status: 200 }
    );
};
