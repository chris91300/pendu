import { renderHook, act } from "@testing-library/react";
import useGetRandomWord from "./useGetRandomWord";

describe("TEST OF USETGETRANDOMWORD HOOK", () => {
    test("hook should return default states", () => {
        const fc = jest.fn((word) => word);
        const { result } = renderHook(() => useGetRandomWord(fc));

        expect(result.current.loading).toBeFalsy();
        expect(result.current.error).toBeFalsy();
    });
});
