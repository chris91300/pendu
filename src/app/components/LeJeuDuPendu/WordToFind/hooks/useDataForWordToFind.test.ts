import { renderHook, act } from "@testing-library/react";
import useDataForWordToFind from "./useDataForWordToFind";

describe("TEST OF USEDATAFORWORDTOFIND HOOK", () => {
    test("hook should render default states", () => {
        const callbackFromParent = jest.fn();
        const { result } = renderHook(() =>
            useDataForWordToFind(callbackFromParent)
        );

        const { word, error } = result.current;

        expect(word).toBe("");
        expect(error).toBeFalsy();
    });

    test("handleChange should pass it's parameter to word", () => {
        const callbackFromParent = jest.fn();
        const { result } = renderHook(() =>
            useDataForWordToFind(callbackFromParent)
        );

        act(() => {
            result.current.handleChange("test");
        });

        expect(result.current.word).toBe("test");
        expect(result.current.error).toBeFalsy();
    });

    test("onFocus should set false to error", () => {
        const callbackFromParent = jest.fn();
        const { result } = renderHook(() =>
            useDataForWordToFind(callbackFromParent)
        );

        act(() => {
            result.current.onFocus();
        });

        expect(result.current.word).toBe("");
        expect(result.current.error).toBeFalsy();
    });

    test("handleClick when the state of word is equal to a valid word should call the callbackFromParent", () => {
        const callbackFromParent = jest.fn();
        const { result } = renderHook(() =>
            useDataForWordToFind(callbackFromParent)
        );

        act(() => {
            result.current.handleChange("test");
        });

        expect(result.current.word).toBe("test");

        act(() => {
            result.current.handleClick();
        });

        expect(callbackFromParent).toBeCalledTimes(1);
        expect(result.current.error).toBeFalsy();
    });

    test("handleClick when the state of word is equal to a wrong word should set true to error", () => {
        const callbackFromParent = jest.fn();
        const { result } = renderHook(() =>
            useDataForWordToFind(callbackFromParent)
        );

        act(() => {
            result.current.handleChange("test123");
        });

        expect(result.current.word).toBe("test123");

        act(() => {
            result.current.handleClick();
        });

        expect(callbackFromParent).toBeCalledTimes(0);
        expect(result.current.error).toBeTruthy();
    });

    test("getRandomWord should call callbackFromParent", () => {
        const callbackFromParent = jest.fn();
        const { result } = renderHook(() =>
            useDataForWordToFind(callbackFromParent)
        );

        act(() => {
            result.current.getRandomWord("test");
        });

        expect(callbackFromParent).toBeCalledTimes(1);
    });
});
