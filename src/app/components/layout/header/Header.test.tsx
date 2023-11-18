import { render, screen } from "@testing-library/react";
import Header from "./Header";



describe("TEST OF HEADER COMPONENT", () => {

    it("should display the logo and the portofolio link", async () => {

        render(<Header />)

        const logo = await screen.findByAltText("le logo. Dessin humouristique d'un pendu")
        const link = screen.getByRole("link", {name: "portfolio"})

        expect(logo).toBeInTheDocument()
        expect(link).toBeInTheDocument()
    })

})