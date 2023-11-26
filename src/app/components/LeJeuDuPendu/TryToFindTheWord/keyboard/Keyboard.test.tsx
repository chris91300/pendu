import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Keyboard from "./Keyboard";
import alphabet from "../../../../utils/alphabet";

describe("TEST OF KEYBOARD COMPONENT", () => {
    it("should display all letter of alphabet", () => {
        const user = userEvent.setup();
        const onClick = jest.fn();
        render(<Keyboard word={["test"]} clickOnLetter={onClick} />);

        alphabet.map(async (letter) => {
            const button = screen.getByRole("button", { name: letter });
            expect(button).toBeInTheDocument();

            await user.click(button);
            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });
});
