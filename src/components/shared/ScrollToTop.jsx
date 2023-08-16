import { ArrowUpwardRounded } from "@mui/icons-material";
import { Fab, Slide, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";

export default function ScrollToTop(props) {
    // for scroll to top button calc scroll direction
    const [showScrollTopButton, setShowScrollTopButton] = useState(true);
    const handleScroll = () => {
        setShowScrollTopButton(window.scrollY < 200 ? true : false);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Slide direction="up" in={!showScrollTopButton}>
            <Tooltip
                title="Scroll to Top"
                disableInteractive
                componentsProps={{
                    tooltip: {
                        sx: {
                            backgroundColor: (theme) =>
                                theme.palette.accent.primary,
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "0.8rem",
                            borderRadius: "15px",
                            transition: (theme) => theme.transitions.create(),
                        },
                    },
                }}
            >
                <Fab
                    sx={{
                        position: "fixed",
                        bottom: 25,
                        right: props.isMobile ? 30 : 50,
                        backdropFilter: "blur(10px)",
                        backgroundColor: (theme) =>
                            theme.palette.background.actions,
                        transition: (theme) => theme.transitions.create(),
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
                    <ArrowUpwardRounded color="icon" />
                </Fab>
            </Tooltip>
        </Slide>
    );
}
