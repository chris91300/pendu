import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("TEST DU APP COMPONENT", () => {
    test("App should display without error", async () => {
        const user = userEvent.setup();
        window.HTMLElement.prototype.scrollIntoView = jest.fn();
        render(<App />);

        const h1 = screen.getByRole("heading", {
            level: 1,
            name: "LE JEU DU PENDU",
        });
        const label = screen.getByText(
            "Entrez un mot à trouver pour commencer une partie"
        );
        const input = screen.getByRole("textbox");
        const buttonValider = screen.getByRole("button", { name: "valider" });
        const buttonGetRandomWord = screen.getByRole("button", {
            name: "obtenir un mot aléatoirement",
        });
        const hiddenErrorMessage = screen.queryByText(
            "le mot doit contenir uniquement des lettres sans accent."
        );

        expect(h1).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(buttonValider).toBeInTheDocument();
        expect(buttonGetRandomWord).toBeInTheDocument();
        expect(hiddenErrorMessage).not.toBeInTheDocument();

        //  USER TYPE A WORD WITH A NOT VALID FORMAT

        await user.type(input, "wrongWord123");
        await user.click(buttonValider);

        const errorMessage = await screen.findByText(
            "le mot doit contenir uniquement des lettres sans accent."
        );

        expect(errorMessage).toBeInTheDocument();

        await user.click(input);
        expect(errorMessage).not.toBeInTheDocument();

        await user.clear(input);

        //  USER WRITE A VALID WORD AND CLICK ON 'VALIDER'
        await user.type(input, "test");
        await user.click(buttonValider);

        //  NOW APP SHOULD DISPLAY THE TRYTOFINDTHEWORD COMPONENT

        const firstH2 = await screen.findByRole("heading", {
            level: 2,
            name: "ESSAIS",
        });
        expect(firstH2).toBeVisible();

        const text10Tries = await screen.findByText(
            "Vous avez droit à 10 erreurs"
        );
        expect(text10Tries).toBeVisible();

        const secondH2 = await screen.findByRole("heading", {
            level: 2,
            name: "Mot à trouver",
        });
        expect(secondH2).toBeVisible();

        //  HIDDEN WORD IS REPRESENTE BY _ _ _ _
        let hiddenLetters = await screen.findAllByText("_");
        expect(hiddenLetters).toHaveLength(4);

        const buttonT = await screen.findByRole("button", { name: "T" });

        await user.click(buttonT);

        //  MODAL SUCCESS SHOULD BE DISPLAY
        let modalSuccess = await screen.findByRole("dialog");
        expect(modalSuccess).toBeVisible();

        let closeModalSuccess = await within(modalSuccess).findByRole(
            "button",
            {
                name: "X",
            }
        );
        let textSuccess = await within(modalSuccess).findByText(
            /Bravo. Il y a 2/
        );
        const textT = await within(modalSuccess).findByText("T");
        expect(closeModalSuccess).toBeVisible();
        expect(textSuccess).toBeVisible();
        expect(textT).toBeVisible();

        await user.click(closeModalSuccess);
        //  MODALSuccess SUCCESS SHOULD BE CLOSED
        expect(closeModalSuccess).not.toBeVisible();
        expect(textSuccess).not.toBeVisible();
        expect(textT).not.toBeVisible();

        //  HIDDEN WORD IS NOW REPRESENTE BY T _ _ T
        hiddenLetters = await screen.findAllByText("_");
        expect(hiddenLetters).toHaveLength(2);
        expect(text10Tries).toBeVisible();

        //  USER CLICK ON BAD LETTER A
        //  SHOULD DISPLAY THE MODAL ERROR
        const buttonA = await screen.findByRole("button", { name: "A" });
        expect(buttonA).toBeInTheDocument();
        await user.click(buttonA);

        let modalError = await screen.findByRole("dialog");
        const closeModalError = await within(modalError).findByRole("button", {
            name: "X",
        });
        const imageError = await within(modalError).findByAltText(
            "dessin du pendu"
        );

        const textErrorPart1 = await within(modalError).findByText(
            /Désolé il n'y a pas de /
        );
        const letterError = await within(modalError).findByText("A");
        const textErrorPart2 = await within(modalError).findByText(
            /dans le mot./
        );

        expect(closeModalError).toBeInTheDocument();
        expect(imageError).toBeVisible();
        expect(imageError.getAttribute("src")).toMatch(
            /error_9_tries_left.jpg/
        );
        expect(textErrorPart1).toBeVisible();
        expect(letterError).toBeVisible();
        expect(textErrorPart2).toBeVisible();

        await user.click(closeModalError);
        const text9Tries = await screen.findByText(
            "Vous avez droit à 9 erreurs"
        );
        expect(text9Tries).toBeVisible();

        //  HIDDEN WORD IS ALWAYS REPRESENTE BY T _ _ T
        hiddenLetters = await screen.findAllByText("_");
        expect(hiddenLetters).toHaveLength(2);

        // click E
        const buttonE = await screen.findByRole("button", { name: "E" });
        expect(buttonE).toBeInTheDocument();

        await user.click(buttonE);

        modalSuccess = await screen.findByRole("dialog");
        expect(modalSuccess).toBeVisible();

        closeModalSuccess = await within(modalSuccess).findByRole("button", {
            name: "X",
        });
        textSuccess = await within(modalSuccess).findByText(/Bravo. Il y a 1/);
        const textE = await within(modalSuccess).findByText("E");
        expect(closeModalSuccess).toBeVisible();
        expect(textSuccess).toBeVisible();
        expect(textE).toBeVisible();

        await user.click(closeModalSuccess);

        //  HIDDEN WORD IS ALWAYS REPRESENTE BY T E _ T
        hiddenLetters = await screen.findAllByText("_");
        expect(hiddenLetters).toHaveLength(1);

        //  USER CLICK ON THE BUTTON S AND FIND THE GOOD WORD

        const buttonS = await screen.findByRole("button", { name: "S" });
        expect(buttonS).toBeInTheDocument();

        await user.click(buttonS);

        //  USER IS VICTORIUS
        //  THE GAME OVER VICTORY SHOULD BE DISPLAY
        const gameOverVictoryImage = await screen.findByAltText(
            "image aléatoire symbolisant la victoire"
        );
        const gameOverTitle = await screen.findByRole("heading", {
            name: /^félicitations$/i,
        });
        const gameOverText = await screen.findByText(/Vous avez trouvé le mot/);
        const gameOverWord = await screen.findByText(/test/i);
        const buttonRestart = await screen.findByRole("button", {
            name: "nouvelle partie",
        });

        expect(gameOverVictoryImage).toBeInTheDocument();
        expect(gameOverTitle).toBeInTheDocument();
        expect(gameOverText).toBeInTheDocument();
        expect(gameOverWord).toBeInTheDocument();
        expect(buttonRestart).toBeInTheDocument();

        //  USER WANT TO START A NEW GAME
        await user.click(buttonRestart);

        const h1NewGame = await screen.findByRole("heading", {
            level: 1,
            name: "LE JEU DU PENDU",
        });
        const labelNewGame = await screen.findByText(
            "Entrez un mot à trouver pour commencer une partie"
        );
        const inputNewGame = await screen.findByRole("textbox");
        const buttonValiderNewGame = await screen.findByRole("button", {
            name: "valider",
        });
        const buttonGetRandomWordNewGame = await screen.findByRole("button", {
            name: "obtenir un mot aléatoirement",
        });

        expect(h1NewGame).toBeInTheDocument();
        expect(labelNewGame).toBeInTheDocument();
        expect(inputNewGame).toBeInTheDocument();
        expect(buttonValiderNewGame).toBeInTheDocument();
        expect(buttonGetRandomWordNewGame).toBeInTheDocument();
    });
});
