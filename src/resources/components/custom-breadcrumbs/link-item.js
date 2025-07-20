"use client";

import { Box, Link } from "@mui/material";
import { useRouter } from "next/navigation";

export const BreadcrumbsLink = ({ link, activeLast, disabled }) => {
    const { name, href, icon } = link;

    const router = useRouter();

    const styles = {
        typography: "body1",
        fontWeight: 500,
        alignItems: "center",
        color: "text.primary",
        textDecoration: "none",
        display: "inline-flex",
        ...(disabled &&
            !activeLast && {
                cursor: "default",
                pointerEvents: "none",
                color: "text.disabled",
            }),
    };

    const renderContent = (
        <>
            {icon && (
                <Box
                    component="span"
                    sx={{
                        mr: 1,
                        display: "inherit",
                        "& svg": { width: 20, height: 20 },
                    }}
                >
                    {icon}
                </Box>
            )}

            {name}
        </>
    );

    if (href) {
        return (
            <Link
                component={Link}
                href={href}
                sx={styles}
                onClick={(e) => {
                    e.preventDefault();
                    router.push(href);
                }}
            >
                {renderContent}
            </Link>
        );
    }

    return <Box sx={styles}> {renderContent} </Box>;
};
