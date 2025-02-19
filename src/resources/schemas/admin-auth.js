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
        email: yup.string().email().required(),
        name: yup.string().min(4).required(),
        password: yup.string().min(8).required(),
        confirm: yup
            .string()
            .oneOf([yup.ref("password"), null], "passwords must match"),
    });

    return returnObject(schema, defaultValues);
};
