import { render, screen } from "@testing-library/react";
import Logo from "./Logo";


describe('TEST OF LOGO COMPONENT', () => {

    it("should rener the logo", () => {
        render(<Logo />)

        const image = screen.getByAltText("le logo. Dessin humouristique d'un pendu")
        expect(image).toBeInTheDocument()
    })

})