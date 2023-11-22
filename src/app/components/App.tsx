"use client";

import React from "react";
import LeJeuDuPendu from "./LeJeuDuPendu/LeJeuDuPendu";
import TitleH1 from "./globals/titleH1/TitleH1";
import Container from "./globals/container/Container";

export default function App() {
    return (
        <Container className="w-full mt-7">
            <TitleH1>LE JEU DU PENDU</TitleH1>
            <Container>
                <LeJeuDuPendu />
            </Container>
        </Container>
    );
}
