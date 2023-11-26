import { render, screen } from "@testing-library/react";
import GameOver from "./GameOver";

describe("TEST OF GAMEOVER COMPONENT", () => {
    describe("USER WON", () => {
        beforeEach(() => {
            render(
                <GameOver status="victory" word="voiture" close={() => {}} />
            );
        });

        it("should display the title 'félicitations", () => {
            const titleh2 = screen.getByRole("heading", {
                level: 2,
                name: "félicitations",
            });
            expect(titleh2).toBeInTheDocument();
        });

        it("should display an image", () => {
            const image = screen.getByAltText(
                "image aléatoire symbolisant la victoire"
            );
            expect(image).toBeInTheDocument();
        });

        it("should display the text 'Vous avez trouvé le mot voiture' ", () => {
            const wonMessage = screen.getByText("Vous avez trouvé le mot");
            const wordToFind = screen.getByText("voiture");
            expect(wonMessage).toBeInTheDocument();
            expect(wordToFind).toBeInTheDocument();
        });
    });

    describe("USER FAIL", () => {
        beforeEach(() => {
            render(<GameOver status="fail" word="voiture" close={() => {}} />);
        });

        it("should display the title 'Vous avez été pendu", () => {
            const titleh2 = screen.getByRole("heading", {
                level: 2,
                name: "Vous avez été pendu",
            });
            expect(titleh2).toBeInTheDocument();
        });

        it("should display an image", () => {
            const image = screen.getByAltText(
                "image aléatoire symbolisant la défaite"
            );
            expect(image).toBeInTheDocument();
        });

        it("should display the text 'vous avez perdu. le mot à trouver était voiture' ", () => {
            const lostMessage = screen.getByText(
                "vous avez perdu. le mot à trouver était"
            );
            const wordToFind = screen.getByText("voiture");
            expect(lostMessage).toBeInTheDocument();
            expect(wordToFind).toBeInTheDocument();
        });
    });
});
