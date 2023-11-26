import { render, screen } from "@testing-library/react";
import GameWon from "./GameWon";

describe("TEST OF GAMEWON COMPONENT", () => {
    beforeEach(() => {
        render(<GameWon word="voiture" />);
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
