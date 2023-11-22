import React from "react";
import { TitleH1Props } from "./titleH1";

export default function TitleH1(props: TitleH1Props) {
    const { children } = props;
    return (
        <h1 className="text-center text-red-600 text-5xl font-bloody mb-5">
            {children}
        </h1>
    );
}
