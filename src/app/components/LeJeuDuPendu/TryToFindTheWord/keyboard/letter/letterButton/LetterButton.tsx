import React from "react";
import Button from "../../../../../globals/button/Button";
import getColorText from "../../utils/getColorText";
import getColorBorder from "../../utils/getColorBorder";
import { LetterButtonProps } from "../../keyboard";

export default function LetterButton(props: LetterButtonProps) {
    const { color, onClick, disabled, children } = props;
    const textColor = getColorText(color);
    const borderColor = getColorBorder(color);
    const className = `flex justify-center items-center shrink text-sm w-7 h-7 font-bold mx-2 ${textColor} ${borderColor} md:w-9 md:h-9 md:text-md lg:w-12 lg:h-12 lg:text-xl `;

    return (
        <Button
            extendClassName={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
