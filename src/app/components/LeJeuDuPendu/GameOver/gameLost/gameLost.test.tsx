import { render } from "@testing-library/react";
import GameLost from './GameLost'
import { userCanReadTheH2, userCanSeeImageWithAltText, userCanReadTheText } from "../../../../utils/forTesting/utils";




describe("TEST OF GAMELOST COMPONENT", ()=>{

    beforeEach(()=>{
        render(<GameLost word="voiture" />)
    })
    

    it( "should display the title 'Vous avez été pendu", () => {
        
        userCanReadTheH2("Vous avez été pendu")

    })


    it( "should display an image", () => {

        userCanSeeImageWithAltText("image aléatoire symbolisant la défaite")

    })

    it( "should display the text 'vous avez perdu. le mot à trouver était voiture' ", () => {
                
        userCanReadTheText("vous avez perdu. le mot à trouver était")
        userCanReadTheText("voiture")

    })
})