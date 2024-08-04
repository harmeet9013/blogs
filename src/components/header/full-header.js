"use client";

import { useEffect, useState } from "react";
//
import { Slide } from "@mui/material";
//
import { PATHS } from "@/config/paths";
import { useSettingsContext } from "@/settings/context";
//
import FullHeaderMenu from "./full-header-menu";
//
import { HeaderContainer, NavbarHomeButton } from "./styled/header-styled";

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
            in={showHeader}
            direction="down"
            timeout={{ enter: 350, exit: 350 }}
        >
            <HeaderContainer
                px={1}
                py={0.2}
                width={1}
                direction="row"
                position="fixed"
                alignItems="center"
                justifyContent={isMobile ? "space-between" : "space-around"}
            >
                <NavbarHomeButton href={PATHS.home}>BLOGS</NavbarHomeButton>
                <FullHeaderMenu />
            </HeaderContainer>
        </Slide>
    );
}
