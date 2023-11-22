import React from "react";
import Image from "next/image";
import { ModalErrorImageProps } from "./modalErrorImage";

export default function ModalErrorImage(props: ModalErrorImageProps) {
    const { src, imageSide } = props;
    return (
        <Image
            className="mx-auto mb-3"
            src={src}
            alt="dessin du pendu"
            width={imageSide}
            height={imageSide}
        />
    );
}
