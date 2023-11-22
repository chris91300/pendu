import React from "react";
import ModalErrorImage from "./modalErrorImage/ModalErrorImage";
import ModalErrorText from "./ModalErrorText/ModalErrorText";
import ModalErrorLastTry from "./ModalErrorLastTry/ModalErrorLastTry";
import Container from "../../../../globals/container/Container";
import { ModalErrorProps } from "./modalError";

export default function ModalError(props: ModalErrorProps) {
    const { letter, tries } = props;
    const imagePath = `/images/error/error_${tries}_tries_left.jpg`;
    const imageSide = 250;

    return (
        <Container className="flex flex-col">
            <ModalErrorImage src={imagePath} imageSide={imageSide} />
            <ModalErrorText letter={letter} />
            <ModalErrorLastTry tries={tries} />
        </Container>
    );
}
