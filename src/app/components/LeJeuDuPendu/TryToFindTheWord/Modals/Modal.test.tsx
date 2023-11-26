import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("TEST OF MODAL COMPONENT WITH SUCCESS STATUS", () => {
    it("should display the success text", () => {
        render(
            <Modal
                status="success"
                letter="V"
                totalLetter={1}
                tries={7}
                hiddeModal={() => {}}
            />
        );
        const messagePart1 = screen.getByText(/Bravo. Il y a 1/);
        const messageLetter = screen.getByText("V");

        expect(messagePart1).toBeInTheDocument();
        expect(messageLetter).toBeInTheDocument();
    });
});

describe("TEST OF MODAL COMPONENT WITH ERROR STATUS", () => {
    describe("TEST OF MODAL ERROR COMPONENT", () => {
        beforeEach(() => {
            render(
                <Modal
                    status="error"
                    letter="A"
                    totalLetter={1}
                    tries={7}
                    hiddeModal={() => {}}
                />
            );
        });

        it("should display an image with the good src", () => {
            const image = screen.getByAltText("dessin du pendu");
            expect(image.getAttribute("src")).toMatch(/error_7_tries_left.jpg/);
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

    describe("TEST OF MODAL ERROR FOR LAST CHANCE", () => {
        it("should display the text for last change", () => {
            render(
                <Modal
                    status="error"
                    letter="A"
                    totalLetter={1}
                    tries={1}
                    hiddeModal={() => {}}
                />
            );
            const warningMessage = screen.getByText(
                "Attention à la prochaine erreur, couik!!!"
            );
            expect(warningMessage).toBeInTheDocument();
        });
    });
});
