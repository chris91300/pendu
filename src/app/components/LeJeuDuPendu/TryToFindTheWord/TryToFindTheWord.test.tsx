import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TryToFindTheWord from "./TryToFindTheWord";
import alphabet from "../../../utils/alphabet";

afterEach(cleanup);

describe("TEST OF TRYTOFINDTHEWORD COMPONENT", () => {
    beforeEach(() => {
        render(<TryToFindTheWord wordToFind="test" isOver={() => {}} />);
    });

    it("should display the title 'ESSAIS", () => {
        const titleH2 = screen.getByRole("heading", {
            level: 2,
            name: "ESSAIS",
        });
        expect(titleH2).toBeInTheDocument();
    });

    it("should display the text information with 'erreurs'", () => {
        // game start with 10 tries
        const text = screen.getByText("Vous avez droit à 10 erreurs");
        expect(text).toBeInTheDocument();
    });

    it("should display the title 'Mot a trouvé'", () => {
        const titleH2 = screen.getByRole("heading", {
            level: 2,
            name: "Mot à trouver",
        });
        expect(titleH2).toBeInTheDocument();
    });

    it("should display 4 characters '_'", () => {
        const hiddenLetters = screen.getAllByText("_");
        expect(hiddenLetters).toHaveLength(4);
    });

    it("should display all letter of alphabet", () => {
        alphabet.map((letter) => {
            const button = screen.getByRole("button", { name: letter });
            expect(button).toBeInTheDocument();
        });
    });
});

describe("TEST TRYTOFINDTHEWORD WITH EVENT", () => {
    it("should display the modal error", async () => {
        const user = userEvent.setup();
        render(<TryToFindTheWord wordToFind="test" isOver={() => {}} />);

        const buttonLetterA = screen.getByRole("button", { name: "A" });
        expect(buttonLetterA).toBeInTheDocument();

        await user.click(buttonLetterA);

        const buttonClose = await screen.findByTitle("fermer");
        const errorImage = await screen.findByAltText("dessin du pendu");
        const errorTextPart1 = await screen.findByText(
            /Désolé il n'y a pas de/
        );
        const lettersA = await screen.findAllByText("A");
        const errorTextPart2 = await screen.findByText(/dans le mot./);

        expect(buttonClose).toBeVisible();
        expect(errorImage).toBeVisible();
        expect(errorImage.getAttribute("src")).toMatch(
            /error_9_tries_left.jpg/
        );
        expect(errorTextPart1).toBeVisible();
        // there 2 'A' : the button letter in keyboard and the span with text A in the modal
        expect(lettersA).toHaveLength(2);
        expect(errorTextPart2).toBeVisible();
    });

    it("should display the modal success", async () => {
        const user = userEvent.setup();
        render(<TryToFindTheWord wordToFind="test" isOver={() => {}} />);

        const buttonLetterT = screen.getByRole("button", { name: "T" });
        expect(buttonLetterT).toBeInTheDocument();

        await user.click(buttonLetterT);

        const closeButton = await screen.findByTitle("fermer");

        const successTextPart1 = await screen.findByText(/Bravo. Il y a 2/);
        const lettersT = await screen.findAllByText("T");

        expect(closeButton).toBeVisible();
        expect(successTextPart1).toBeVisible();

        /**
         * there are 4 T : the button, 2 for the word to find ( T _ _ T ) and one span in the modal
         */
        expect(lettersT).toHaveLength(4);
    });
});
