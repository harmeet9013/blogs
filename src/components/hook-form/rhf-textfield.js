import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function RHFTextField({ name, helperText, type, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    type={type}
                    // onChange={(event) => field.onChange(event.target.value)}
                    error={helperText ? helperText : error}
                    helperText={error ? error?.message : helperText}
                    {...other}
                />
            )}
        />
    );
}

RHFTextField.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.string,
    type: PropTypes.string,
};
