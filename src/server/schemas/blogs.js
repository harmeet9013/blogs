import * as yup from "yup";

export const blogsCreateSchema = async (values) => {
    const schema = yup.object().shape({
        title: yup.string().required(),
        content: yup.string().required(),
    });

    await schema.validate(values);
};

export const blogsUpdateSchema = async (values) => {
    const schema = yup.object().shape({
        id: yup.string().required(),
    });

    await schema.validate(values);
};
