import { render, screen } from "@testing-library/react";
import ModalSuccess from "./ModalSuccess";

describe("TEST OF MODAL SUCCESS COMPONENT", () => {
    it("should display the success text", () => {
        render(<ModalSuccess letter="E" totalLetter={2} />);
        const messagePart1 = screen.getByText(/Bravo. Il y a 2/);
        const messageLetter = screen.getByText("E");

        expect(messagePart1).toBeInTheDocument();
        expect(messageLetter).toBeInTheDocument();
    });
});
