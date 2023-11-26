import { render, screen } from "@testing-library/react";
import GameInformations from "./GameInformations";

describe("TEST FOR GAMEINFORMATIONS COMPONENT", () => {
    describe("with several tries yet", () => {
        beforeEach(() => {
            // wordHidden with 7 letter
            render(<GameInformations tries={2} wordHidden="_______" />);
        });

        it("should display the title 'ESSAIS", () => {
            const titleh2 = screen.getByRole("heading", {
                level: 2,
                name: "ESSAIS",
            });
            expect(titleh2).toBeInTheDocument();
        });

        it("should display the text information with 'erreurs'", () => {
            const text = screen.getByText("Vous avez droit à 2 erreurs");
            expect(text).toBeInTheDocument();
        });

        it("should display the title 'Mot à trouver'", () => {
            const titleh2 = screen.getByRole("heading", {
                level: 2,
                name: "Mot à trouver",
            });
            expect(titleh2).toBeInTheDocument();
        });

        it("should display 7 characters '_'", () => {
            const hiddenLetters = screen.getAllByText("_");
            expect(hiddenLetters).toHaveLength(7);
        });
    });

    describe("with only one trie", () => {
        it("should display the text information with 'erreur'", () => {
            render(<GameInformations tries={1} wordHidden="_______" />);
            const text = screen.getByText("Vous avez droit à 1 erreur");
            expect(text).toBeInTheDocument();
        });
    });
});
