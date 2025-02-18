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
