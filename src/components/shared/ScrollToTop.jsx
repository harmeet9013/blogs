import { ArrowUpwardRounded } from "@mui/icons-material";
import { Fab, Slide, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { TooltipSX } from "./CustomComponents";

export default function ScrollToTop(props) {
    // for scroll to top button calc scroll direction
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    const handleScroll = () => {
        setShowScrollTopButton(window.scrollY > 400 ? true : false);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Slide direction="up" in={showScrollTopButton}>
            <Tooltip
                title="Scroll to Top"
                disableInteractive
                componentsProps={TooltipSX}
            >
                <Fab
                    sx={(theme) => ({
                        transition: `${theme.transitions.create()} !important`,
                        position: "fixed",
                        bottom: 25,
                        right: props.isMobile ? 40 : 100,
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.background.default,
                        border: `1px solid ${theme.palette.action.disabled}`,
                        "&:hover": {
                            backgroundColor:
                                theme.palette.primary.container.main,
                        },
                    })}
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <ArrowUpwardRounded />
                </Fab>
            </Tooltip>
        </Slide>
    );
}
