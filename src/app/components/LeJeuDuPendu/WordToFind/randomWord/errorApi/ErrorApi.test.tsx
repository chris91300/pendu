
import { render, screen } from "@testing-library/react";

import ErrorApi from './ErrorApi'


describe("TES OF ERRORAPI COMPONENT", () => {

    it("should display an error message", () => {
        render(<ErrorApi />)

        const message = screen.getByText("Désolé je n'arrive pas à récupérer un mot")
        expect(message).toBeInTheDocument()
})
    })
    