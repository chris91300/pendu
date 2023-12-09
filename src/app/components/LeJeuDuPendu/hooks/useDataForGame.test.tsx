import { renderHook, act } from "@testing-library/react";
import useDataForGame from "./useDataForGame";

/*beforeEach(() => {
    const { result } = renderHook(useDataForGame);
    const {
        mainContainer,
        gameIsStarted,
        wordIsValid,
        word,
        gameIsFinished,
        gameOverStatus,
        validWord,
        isOver,
        resetGame,
    } = result.current;
});*/
describe.only("TEST OF USEDATAFORGAME HOOK", () => {
    test("game should be not start ", () => {
        const { result } = renderHook(useDataForGame);
        const { gameIsStarted } = result.current;
        expect(gameIsStarted).toBeFalsy();
    });

    test("game should be not finish ", () => {
        const { result } = renderHook(useDataForGame);
        const { gameIsFinished } = result.current;
        expect(gameIsFinished).toBeFalsy();
    });

    test("word should be not define yet and equal to an empty string", () => {
        const { result } = renderHook(useDataForGame);
        const { word } = result.current;
        expect(word).toEqual("");
    });

    test("gameOverStatus should be equal to 'victory' by default", () => {
        const { result } = renderHook(useDataForGame);
        const { gameOverStatus } = result.current;
        expect(gameOverStatus).toEqual("victory");
    });

    test("validWord function should set the word and start the game", () => {
        const { result } = renderHook(useDataForGame);
        result.current.mainContainer.current.scrollIntoView = jest.fn();
        act(() => result.current.validWord("test"));

        expect(result.current.word).toBe("TEST");
        expect(result.current.gameIsStarted).toBeTruthy();
        expect(
            result.current.mainContainer.current.scrollIntoView
        ).toBeCalledTimes(1);
    });

    test("restGame function should reset the word, gameIsFinished and gameIsStarted", () => {
        const { result } = renderHook(useDataForGame);
        act(() => result.current.resetGame());

        expect(result.current.word).toBe("");
        expect(result.current.gameIsFinished).toBeFalsy();
        expect(result.current.gameIsStarted).toBeFalsy();
    });

    test("isOver function with 'victory' on parameter should set 'victory' to gameOverStatus and true to gameIsFinished", () => {
        const { result } = renderHook(useDataForGame);
        act(() => result.current.isOver("victory"));

        expect(result.current.gameOverStatus).toBe("victory");
        expect(result.current.gameIsFinished).toBeTruthy();
    });

    test("isOver function with 'fail' on parameter should set 'fail' to gameOverStatus and true to gameIsFinished", () => {
        const { result } = renderHook(useDataForGame);
        act(() => result.current.isOver("fail"));

        expect(result.current.gameOverStatus).toBe("fail");
        expect(result.current.gameIsFinished).toBeTruthy();
    });
});
