import { renderHook, act } from "@testing-library/react";
import useSetTimeOutToCloseModal from "./useSetTimeOutToCloseModal";

describe("TEST OF USESETTIMEOUTTOCLOSEMODAL HOOK", () => {
    test("callback should be called 1 time after 3000 ms", () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        const { result } = renderHook(() =>
            useSetTimeOutToCloseModal(callback, 3000, [])
        );

        expect(callback).toBeCalledTimes(0);

        jest.runAllTimers();

        expect(callback).toBeCalledTimes(1);

        jest.useRealTimers();
    });
});
