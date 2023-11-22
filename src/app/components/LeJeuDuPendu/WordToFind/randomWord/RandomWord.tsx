"use client";

import React, { Suspense } from "react";
import { not } from "ramda";
import useGetRandomWord from "./hooks/useGetRandomWord";
import Loading from "../../../globals/loading/Loading";
import Button from "../../../globals/button/Button";
import ErrorApi from "./errorApi/ErrorApi";
import { RandomWordProps } from "./randomWord";

/**
 *
 * @param {Object} onClick function qui retourne le mot définie aléatoirement
 * @returns
 */
export default function RandomWord(props: RandomWordProps) {
    const { onClick } = props;
    const { getRandomWord, loading, error } = useGetRandomWord(onClick);

    return (
        <>
            {error && <ErrorApi />}
            {not(error) && loading && <Loading />}
            {not(error) && not(loading) && (
                <Button onClick={getRandomWord}>
                    obtenir un mot aléatoirement
                </Button>
            )}
        </>
    );
}
