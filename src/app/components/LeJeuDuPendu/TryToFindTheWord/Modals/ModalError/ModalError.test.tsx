import { render, screen } from "@testing-library/react";
import ModalError from "./ModalError";

describe("TEST OF MODAL ERROR COMPONENT", () => {
    beforeEach(() => {
        render(<ModalError letter="A" tries={5} />);
    });

    it("should display an image", () => {
        const image = screen.getByAltText("dessin du pendu");
        expect(image).toBeInTheDocument();
    });

    it("should display an image with the good src", () => {
        const image = screen.getByAltText("dessin du pendu");
        expect(image.getAttribute("src")).toMatch(/error_5_tries_left.jpg/);
    });

    it("should display the error text", () => {
        const messagePart1 = screen.getByText(/Désolé il n'y a pas de/);
        const messageLetter = screen.getByText("A");
        const messagePart2 = screen.getByText(/dans le mot./);

        expect(messagePart1).toBeInTheDocument();
        expect(messageLetter).toBeInTheDocument();
        expect(messagePart2).toBeInTheDocument();
    });

    it("should not display the text for last change", () => {
        const messageNotDisplayed = screen.queryByText(
            "Attention à la prochaine erreur, couik!!!"
        );
        expect(messageNotDisplayed).not.toBeInTheDocument();
    });
});

describe("TEST OF MODAL WARNING MESSAGE FOR LAST CHANCE", () => {
    it("should display the text for last change", () => {
        render(<ModalError letter="A" tries={1} />);

        const warningMessage = screen.getByText(
            "Attention à la prochaine erreur, couik!!!"
        );
        expect(warningMessage).toBeInTheDocument();
    });
});
