"use client";

import {
    Stack,
    Select,
    Tooltip,
    MenuItem,
    InputLabel,
    FormControl,
    InputAdornment,
    FormHelperText,
} from "@mui/material";
import { InfoRounded } from "@mui/icons-material";
import { Controller, useFormContext } from "react-hook-form";

export const RHFSelect = ({
    name = "",
    options = [],
    note = false,
    label = "",
    optionsValueKey = "value",
    optionsLabelKey = "label",
    helperText,
    ...other
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Stack
                    gap={1}
                    width={1}
                    alignItems="flex-start"
                    justifyContent="center"
                >
                    <FormControl fullWidth>
                        <InputLabel>{label}</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label={label}
                            {...field}
                            ref={field.ref}
                            {...other}
                            error={!!error}
                            {...(note
                                ? {
                                      endAdornment: (
                                          <InputAdornment position="end">
                                              {typeof note === "string" ? (
                                                  <Tooltip
                                                      title={note}
                                                      placement="top"
                                                      disableInteractive
                                                  >
                                                      <InfoRounded />
                                                  </Tooltip>
                                              ) : (
                                                  note
                                              )}
                                          </InputAdornment>
                                      ),
                                  }
                                : {})}
                        >
                            {options?.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    value={item[optionsValueKey]}
                                >
                                    {item[optionsLabelKey]}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>
                            {!!error?.message ? error?.message : helperText}
                        </FormHelperText>
                    </FormControl>
                </Stack>
            )}
        />
    );
};
