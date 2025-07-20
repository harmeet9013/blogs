import { alpha } from "@mui/material";

export const hideScroll = {
    x: {
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    y: {
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
};

export const bgBlur = (props) => {
    const color = props?.color || "#000000";
    const blur = props?.blur || 6;
    const opacity = props?.opacity || 0.9;
    const imgUrl = props?.imgUrl;

    if (imgUrl) {
        return {
            position: "relative",
            backgroundImage: `url(${imgUrl})`,
            "&:before": {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: "100%",
                height: "100%",
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: alpha(color, opacity),
            },
        };
    }

    return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
    };
};
