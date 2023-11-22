import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GetWordByUser from "./GetWordByUser";

describe("TEST OF GETWORDBYUSER COMPONENT", () => {
    it("should render an input", async () => {
        const handleChange = jest.fn();
        const onFocus = jest.fn();
        const handleClick = jest.fn();
        const user = userEvent.setup();

        render(
            <GetWordByUser
                word="test"
                handleChange={handleChange}
                onFocus={onFocus}
                error={false}
                handleClick={handleClick}
            />
        );

        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();

        await user.click(button);

        expect(handleClick).toBeCalledTimes(1);
    });
});
