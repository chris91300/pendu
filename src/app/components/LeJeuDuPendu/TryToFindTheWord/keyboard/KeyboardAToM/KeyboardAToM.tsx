import React from "react";
import Container from "../../../../globals/container/Container";
import { KeyboardPartProps } from "../keyboard";

export default function KeyboardAToM(props: KeyboardPartProps) {
    const { children } = props;

    return (
        <Container className="flex flex-col order-first md:order-none md:flex-row md:flex-wrap md:w-[650px] lg:w-[850px]">
            {children}
        </Container>
    );
}
