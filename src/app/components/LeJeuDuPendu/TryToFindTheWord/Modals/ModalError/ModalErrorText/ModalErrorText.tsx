import React from "react";
import { ModalErrorTextProps } from "./modalErrorText";

export default function ModalErrorText(props: ModalErrorTextProps) {
    const { letter } = props;
    return (
        <p className="text-black">
            Désolé il n'y a pas de <span className="font-bold">{letter}</span>{" "}
            dans le mot.
        </p>
    );
}
