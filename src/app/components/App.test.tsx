import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("TEST DU APP COMPONENT", () => {
    test("App should display without error", async () => {
        const user = userEvent.setup();
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
    });
});
