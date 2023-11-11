import { render } from "@testing-library/react";
import GameOver from './GameOver'
import { userCanReadTheH2, userCanSeeImageWithAltText, userCanReadTheText } from "../../utils/forTesting/utils";



describe("TEST OF GAMEOVER COMPONENT", ()=>{

    describe("USER WON", () => {

        beforeEach(()=>{
            render(<GameOver status="victory" word="voiture" close={()=> {}}/>)
        })
        
    
        it( "should display the title 'félicitations", () => {
            
            userCanReadTheH2("félicitations")
            
        })
    
    
        it( "should display an image", () => {
    
            userCanSeeImageWithAltText("image aléatoire symbolisant la victoire")
    
        })
    
        it( "should display the text 'Vous avez trouvé le mot voiture' ", () => {
                    
            userCanReadTheText("Vous avez trouvé le mot")
            userCanReadTheText("voiture")
    
        })
    })

    describe( "USER FAIL", ()=>{

        beforeEach(()=>{
            render(<GameOver status="fail" word="voiture" close={()=> {}}/>)
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
    } )
})