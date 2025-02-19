"use client";

import { Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export const NavItem = ({ item }) => {
    const { label, href, icon } = item;

    const router = useRouter();
    const isActive = usePathname()?.includes(href);

    return (
        <Button
            startIcon={icon}
            onClick={() => router.push(href)}
            variant={isActive ? "contained" : "text"}
            sx={{
                justifyContent: "flex-start",
                ...(!isActive && {
                    color: "text.primary",
                    ":hover": {
                        color: "text.primary",
                        background: "action.hover",
                    },
                }),
            }}
        >
            {label}
        </Button>
    );
};
