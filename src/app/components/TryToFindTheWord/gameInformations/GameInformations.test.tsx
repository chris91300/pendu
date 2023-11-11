
import { render, screen } from "@testing-library/react";
import GameInformations from './GameInformations'
import { userCanReadTheH2, userCanReadTheText, userCanReadSeveralTexts } from "../../../utils/forTesting/utils";


describe( "TEST FOR GAMEINFORMATIONS COMPONENT", () => {

    describe("with several tries yet", () => {

        beforeEach( () => {
            // wordHidden with 7 letter
            render(<GameInformations tries={2} wordHidden="_______" />)
        } )
    
    
        it( "should display the title 'ESSAIS", () => {
    
            userCanReadTheH2("ESSAIS")
            
        } )
    
        it("should display the text information with 'erreurs'", () => {
    
            userCanReadTheText("Vous avez droit à 2 erreurs")
    
        })
    
        it( "should display the title 'Mot a trouvé'", () => {
    
            userCanReadTheH2("Mot a trouvé")
            
        } )
    
        it("should display 7 characters '_'", () => {
            
            userCanReadSeveralTexts("_").inTheNumberOf(7)
        })

    })
    

    describe("with only one trie", () => {

        it("should display the text information with 'erreur'", () => {
    
            render(<GameInformations tries={1} wordHidden="_______" />)
            userCanReadTheText("Vous avez droit à 1 erreur")
    
        })

    })

} )