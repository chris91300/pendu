import React, { useState } from "react";

import replaceVoyelleWithAccent from "../../utils/replace";
import getRandomWordFromExternalAPI from "../../utils/getRandomWordFromExternalAPI";
import getRandomWordFromAPI from "../../utils/getRandomWordFromAPI";
import { pipe } from "ramda";
import { GetRandomWordReturnTypes } from "./getRandomWordReturnTypes";

export default function useGetRandomWord(
    fc: (word: string) => void
): GetRandomWordReturnTypes {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    const formatWordAndsetIt = pipe(replaceVoyelleWithAccent, fc);

    const getWordFromExternalApi = async () => {
        const word = await getRandomWordFromExternalAPI();
        formatWordAndsetIt(word);
    };

    const getWordFromInternalApi = async () => {
        const word = await getRandomWordFromAPI();
        formatWordAndsetIt(word);
    };

    const getRandomWord = async () => {
        startLoading();

        try {
            await getWordFromExternalApi();
        } catch (err) {
            try {
                await getWordFromInternalApi();
            } catch (err) {
                setError(true);
            }
        }
    };

    return { getRandomWord, loading, error };
}
