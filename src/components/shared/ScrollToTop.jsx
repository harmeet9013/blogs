import { ArrowUpwardRounded } from "@mui/icons-material";
import { Fab, Slide } from "@mui/material";
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
            <Fab
                sx={{
                    position: "fixed",
                    bottom: 25,
                    right: props.isMobile ? 30 : 50,
                    backgroundColor: (theme) => theme.palette.background.header,
                    transition: (theme) => theme.transitions.create(),
                    "&:hover": {
                        backgroundColor: (theme) => theme.palette.accent.hover,
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
        </Slide>
    );
}
