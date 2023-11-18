import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TryToFindTheWord from './TryToFindTheWord'
import alphabet from "../../../utils/alphabet";
import {
    userCanReadTheH2,
    userCanReadTheText,
    userCanReadSeveralTexts,
    userCanClickOnButton,
    userClickOnButton,
    userCanNotReadTheText,
    nowUserCanSeeAnImageWithAltText,
    nowUserCanSeeAnImageWithAltAttribute,
    nowUserCanReadTheText,
    nowUserCanNotReadTheText
} from '../../../utils/forTesting/utils'



describe("TEST OF TRYTOFINDTHEWORD COMPONENT", () => {

    beforeEach( () => {
        render(<TryToFindTheWord wordToFind="test" isOver={()=>{}} />)
    } )
    
   
    it( "should display the title 'ESSAIS", () => {

        userCanReadTheH2("ESSAIS")
        
    } )

    it("should display the text information with 'erreurs'", () => {

        // game start with 10 tries
        userCanReadTheText("Vous avez droit à 10 erreurs")

    })

    it( "should display the title 'Mot a trouvé'", () => {

        userCanReadTheH2("Mot a trouvé")
        
    } )

    it("should display 4 characters '_'", () => {
        
        userCanReadSeveralTexts("_").inTheNumberOf(4)
    })

    it("should display all letter of alphabet", () => {

        alphabet.map( letter => {

            userCanClickOnButton(letter)
            
        })
    })

    it("should display the modal error", async () => {


        userClickOnButton('A')

        nowUserCanSeeAnImageWithAltText("dessin du pendu")

        nowUserCanSeeAnImageWithAltAttribute("dessin du pendu")
        .andWithSrc(/error_10_tries_left.jpg/)

        nowUserCanReadTheText(/Désolé il n'y a pas de/)
        nowUserCanReadTheText("A")
        nowUserCanReadTheText(/dans le mot./)
        

        nowUserCanNotReadTheText("Attention à la prochaine erreur, couik!!!")

      
        userClickOnButton('T')

        nowUserCanReadTheText(/Bravo. il y a 2/)
        nowUserCanReadTheText(/T/)
    })
    


})