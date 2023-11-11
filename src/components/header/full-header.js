"use client";

import { Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { HeaderContainer, NavbarHomeButton } from "./styled/header-styled";

export default function FullHeader(props) {
    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setShowHeader(
            currentScrollPos < 100 || prevScrollPos > currentScrollPos
        );
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <Slide
            direction="down"
            in={showHeader}
            timeout={{ enter: 350, exit: 350 }}
        >
            <HeaderContainer>
                <NavbarHomeButton href="/">BLOGS</NavbarHomeButton>
            </HeaderContainer>
        </Slide>
    );
}
