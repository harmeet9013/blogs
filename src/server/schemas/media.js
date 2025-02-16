import * as yup from "yup";
//
import { toMB } from "@/resources";
import { MAX_FILE_SIZE } from "@/config";

export const mediaUploadSchema = async (values) => {
    const schema = yup.object().shape({
        file: yup.object().required("File is required"),
        size: yup
            .number()
            .max(
                MAX_FILE_SIZE,
                "File cannot exceed " + toMB(MAX_FILE_SIZE) + "MB"
            ),
    });

    return await schema.validate(values);
};
