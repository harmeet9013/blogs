"use client";

import { Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { HeaderContainer, NavbarHomeButton } from "./styled/header-styled";
import FullHeaderMenu from "./full-header-menu";
import { useSettingsContext } from "@/settings/context";

export default function FullHeader() {
    const { isMobile } = useSettingsContext();

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
            <HeaderContainer
                direction="row"
                py={0.2}
                px={1}
                justifyContent={isMobile ? "space-between" : "space-around"}
                alignItems="center"
                position="fixed"
                width="100%"
            >
                <NavbarHomeButton href="/home">BLOGS</NavbarHomeButton>
                <FullHeaderMenu />
            </HeaderContainer>
        </Slide>
    );
}
