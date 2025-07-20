import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const returnObject = (schema, defaultValues) => {
    return {
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    };
};

export const loginFormSchema = (defaultValues = {}) => {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
    });

    return returnObject(schema, defaultValues);
};

export const registerFormSchema = (defaultValues = {}) => {
    const schema = yup.object().shape({
        email: yup.string().email().required("email is required"),
        name: yup.string().min(4).required("name is required"),
        password: yup.string().min(8).required("password is required"),
        confirm: yup
            .string()
            .oneOf([yup.ref("password"), null], "passwords must match")
            .required("confirmation password is required"),
    });

    return returnObject(schema, defaultValues);
};

export const forgetPasswordFormSchema = (defaultValues = {}) => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email("invalid email")
            .required("email is required"),
    });

    return returnObject(schema, defaultValues);
};

export const resetPasswordFormSchema = (defaultValues = {}) => {
    const schema = yup.object().shape({
        token: yup.string().required("token is required"),
        password: yup
            .string()
            .min(8, "password must be at least 8 characters")
            .required("password is required"),
        confirm_password: yup
            .string()
            .oneOf([yup.ref("password"), null], "passwords must match")
            .min(8, "password must be at least 8 characters")
            .required("confirmation password is required"),
    });
    return returnObject(schema, defaultValues);
};
