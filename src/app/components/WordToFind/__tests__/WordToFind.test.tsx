import { render, screen } from "@testing-library/react";

import WordToFind from '../WordToFind'
import userEvent from "@testing-library/user-event";


const onValid = jest.fn()

describe("TEST OF ERRORAPI COMPONENT", () => {

    it("should display component", () => {

        render(<WordToFind onValid={onValid} />)

        const inputLabel = screen.getByText("Entrez un mot à trouver pour commencer une partie")
        const input = screen.getByLabelText("Entrez un mot à trouver pour commencer une partie")
        const buttonValider = screen.getByRole("button", {name: "valider"})
        const buttonRandomWord = screen.getByRole("button", {name: "obtenir un mot aléatoirement"})
        
        
        expect(inputLabel).toBeInTheDocument()
        expect(input).toBeInTheDocument()
        expect(buttonValider).toBeInTheDocument()
        expect(buttonRandomWord).toBeInTheDocument()


    })


    it("should user can write on input", async () => {

        const user = userEvent.setup()
        render(<WordToFind onValid={onValid} />)

        const input = screen.getByLabelText("Entrez un mot à trouver pour commencer une partie")        
        await user.type(input, "test")
        
        expect(input).toHaveValue("test")


    })


    it("should dislay error message", async () => {

        const user = userEvent.setup()
        render(<WordToFind onValid={onValid} />)

        const input = screen.getByLabelText("Entrez un mot à trouver pour commencer une partie")  
        const hiddenErrorMessage = screen.queryByText("le mot doit contenir uniquement des lettres sans accent.")

        expect(hiddenErrorMessage).not.toBeInTheDocument()

        const buttonValider = screen.getByRole("button", {name: "valider"})
        await user.type(input, "test123")
        await user.click(buttonValider)

        const errorMessage = await screen.findByText("le mot doit contenir uniquement des lettres sans accent.")

        expect(errorMessage).toBeInTheDocument()

        


    })
})