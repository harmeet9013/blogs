import { ArrowUpwardRounded } from "@mui/icons-material";
import { Fab, Slide, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { TooltipSX } from "./CustomComponents";

export default function ScrollToTop(props) {
    // for scroll to top button calc scroll direction
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    const handleScroll = () => {
        setShowScrollTopButton(window.scrollY > 200 ? true : false);
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
                    sx={{
                        transition: (theme) => theme.transitions.create(),
                        position: "fixed",
                        bottom: 25,
                        right: props.isMobile ? 30 : 50,
                        backdropFilter: "blur(10px)",
                        color: (theme) => theme.palette.icon.main,
                        backgroundColor: (theme) =>
                            theme.palette.background.actions,
                        border: (theme) =>
                            `2px solid ${theme.palette.action.disabled}`,
                        "&:hover": {
                            backgroundColor: (theme) =>
                                theme.palette.accent.hover,
                        },
                    }}
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
