import { renderHook, act } from "@testing-library/react";
import useAbstractDataForTryToFindTheWord from "./useAbstractDataForTryToFindTheWord";

describe("TEST OF USEABSTRACTDATAFORTRYTOFINDTHEWORD", () => {
    test("default states should be render", () => {
        const { result } = renderHook(() =>
            useAbstractDataForTryToFindTheWord("test", jest.fn())
        );

        const {
            tries,
            wordHidden,
            word,
            modalStatus,
            modalIsVisible,
            letter,
            totalLetter,
        } = result.current;

        expect(tries).toEqual(10);
        expect(wordHidden).toBe("____");
        expect(word).toEqual(["T", "E", "S", "T"]);
        expect(modalStatus).toBe("success");
        expect(modalIsVisible).toBeFalsy();
        expect(letter).toBe("");
        expect(totalLetter).toEqual(0);
    });

    test("click on an valid letter", () => {
        const { result } = renderHook(() =>
            useAbstractDataForTryToFindTheWord("test", jest.fn())
        );

        act(() => {
            result.current.clickLetter("T");
        });

        expect(result.current.tries).toEqual(10);
        expect(result.current.wordHidden).toBe("T__T");
        expect(result.current.word).toEqual(["T", "E", "S", "T"]);
        expect(result.current.modalStatus).toBe("success");
        expect(result.current.modalIsVisible).toBeTruthy();
        expect(result.current.letter).toBe("T");
        expect(result.current.totalLetter).toEqual(2);
    });

    test("click on an wrong letter", () => {
        const { result } = renderHook(() =>
            useAbstractDataForTryToFindTheWord("test", jest.fn())
        );

        act(() => {
            result.current.clickLetter("L");
        });

        expect(result.current.tries).toEqual(9);
        expect(result.current.wordHidden).toBe("____");
        expect(result.current.word).toEqual(["T", "E", "S", "T"]);
        expect(result.current.modalStatus).toBe("error");
        expect(result.current.modalIsVisible).toBeTruthy();
        expect(result.current.letter).toBe("L");
        expect(result.current.totalLetter).toEqual(0);
    });

    test("hideModal function should change modalIsVisible true to false", () => {
        const { result } = renderHook(() =>
            useAbstractDataForTryToFindTheWord("test", jest.fn())
        );

        expect(result.current.modalIsVisible).toBeFalsy();

        act(() => {
            result.current.clickLetter("L");
        });

        expect(result.current.modalIsVisible).toBeTruthy();

        act(() => {
            result.current.hiddeModal();
        });

        expect(result.current.modalIsVisible).toBeFalsy();
    });
});
