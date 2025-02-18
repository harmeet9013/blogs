import * as yup from "yup";

export const loginSchema = async (values = {}) => {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
    });

    return await schema.validate(values);
};

export const registerUserSchema = async (values = {}) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        confirm: yup
            .string()
            .oneOf([yup.ref("password"), null], "passwords must match"),
    });

    return await schema.validate(values);
};

export const userTokenSchema = async (values = {}) => {
    const schema = yup.object().shape({
        token: yup.string().required(),
    });

    return await schema.validate(values);
};
