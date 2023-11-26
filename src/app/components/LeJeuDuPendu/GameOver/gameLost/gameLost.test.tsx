import { render, screen } from "@testing-library/react";
import GameLost from "./GameLost";

describe("TEST OF GAMELOST COMPONENT", () => {
    beforeEach(() => {
        render(<GameLost word="voiture" />);
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
