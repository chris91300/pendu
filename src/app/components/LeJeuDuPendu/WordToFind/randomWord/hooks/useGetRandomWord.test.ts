import { renderHook, act } from "@testing-library/react";
import useGetRandomWord from "./useGetRandomWord";
import getRandomWordFromExternalAPI from "../../utils/getRandomWordFromExternalAPI";
import getRandomWordFromAPI from "../../utils/getRandomWordFromAPI";
import replaceVoyelleWithAccent from "../../utils/replace";

const fc = jest.fn((word) => word);

const mockedFetch = <T>(result: T) => {
    return jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(result),
        })
    ) as jest.Mock;
};

describe("TEST OF USETGETRANDOMWORD HOOK", () => {
    test("hook should return defaults states and the good word without accent from external API", async () => {
        const mockResponse = [{ name: "testé", categorie: "testé" }];

        global.fetch = mockedFetch(mockResponse);

        const getRandomWord = jest.fn(async () => {
            try {
                const word = await getRandomWordFromExternalAPI();
                const wordWithoutAccent = replaceVoyelleWithAccent(word);
                fc(wordWithoutAccent);
            } catch (err) {
                try {
                    const word = await getRandomWordFromAPI();
                    const wordWithoutAccent = replaceVoyelleWithAccent(word);
                    fc(wordWithoutAccent);
                } catch (err) {
                    throw new Error("error from test");
                }
            }
        });
        const { result } = renderHook(() => useGetRandomWord(fc));

        expect(result.current.loading).toBeFalsy();
        expect(result.current.error).toBeFalsy();

        result.current.getRandomWord = getRandomWord;
        await act(async () => {
            result.current.getRandomWord();
        });

        const mockedValue = fc.mock.results[0].value;

        expect(fc).toBeCalledTimes(1);
        expect(mockedValue).toBe("teste");

        fc.mockClear();
    });

    test("hook should return defaults states and the good word without accent from internal API", async () => {
        const mockResponse = { word: "mangé" };

        global.fetch = mockedFetch(mockResponse);

        const getRandomWord = jest.fn(async () => {
            try {
                throw new Error("error from external api");
            } catch (err) {
                try {
                    const word = await getRandomWordFromAPI();
                    const wordWithoutAccent = replaceVoyelleWithAccent(word);
                    fc(wordWithoutAccent);
                } catch (err) {
                    throw new Error("error from test");
                }
            }
        });
        const { result } = renderHook(() => useGetRandomWord(fc));

        expect(result.current.loading).toBeFalsy();
        expect(result.current.error).toBeFalsy();

        result.current.getRandomWord = getRandomWord;
        await act(async () => {
            result.current.getRandomWord();
        });

        const mockedValue = fc.mock.results[0].value;

        expect(fc).toBeCalledTimes(1);
        expect(mockedValue).toBe("mange");

        fc.mockClear();
    });

    test("hook should throw an error", async () => {
        const mockResponse = { word: "mangé" };

        global.fetch = mockedFetch(mockResponse);

        const getRandomWord = jest.fn(async () => {
            try {
                throw new Error("error from external api");
            } catch (err) {
                try {
                    throw new Error("error from internal api");
                } catch (err) {
                    throw new Error("error from test");
                }
            }
        });
        const { result } = renderHook(() => useGetRandomWord(fc));

        expect(result.current.loading).toBeFalsy();
        expect(result.current.error).toBeFalsy();

        result.current.getRandomWord = getRandomWord;

        expect(fc).toBeCalledTimes(0);
        expect(result.current.getRandomWord()).rejects.toThrow(
            "error from test"
        );
    });
});
