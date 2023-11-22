import React from "react";
import { ModalSuccessProps } from "./modalSuccess";

export default function ModalSuccess(props: ModalSuccessProps) {
    const { letter, totalLetter } = props;

    return (
        <p className="text-black">
            Bravo. Il y a {totalLetter}{" "}
            <span className="font-bold">{letter}</span>
        </p>
    );
}
