"use client";

import { useState } from "react";

export default function useBoolean(defaultValue) {
    const [value, setValue] = useState(!!defaultValue);

    const onTrue = () => setValue(true);

    const onFalse = () => setValue(false);

    const onToggle = () => setValue(!value);

    return {
        value,
        onTrue,
        onFalse,
        onToggle,
    };
}
