import { renderHook, act } from "@testing-library/react";
import useClickOnLetter from "./useClickOnLetter";

describe("TEST OF USECLICKONLETTER HOOK", () => {
    test("should render the default states", () => {
        const { result } = renderHook(() =>
            useClickOnLetter("T", ["T", "E", "S", "T"], jest.fn())
        );

        const { css, disabled } = result.current;

        expect(css).toBe("[wheat]");
        expect(disabled).toBeFalsy();
    });

    test("when user click on a good letter", () => {
        const { result } = renderHook(() =>
            useClickOnLetter("T", ["T", "E", "S", "T"], jest.fn())
        );

        act(() => result.current.onClick());

        expect(result.current.css).toBe("green");
        expect(result.current.disabled).toBeTruthy();
    });

    test("when user click on a wrong letter", () => {
        const { result } = renderHook(() =>
            useClickOnLetter("Y", ["T", "E", "S", "T"], jest.fn())
        );

        act(() => result.current.onClick());

        expect(result.current.css).toBe("red");
        expect(result.current.disabled).toBeTruthy();
    });
});
