import { render } from "@testing-library/react";
import ModalError from './ModalError'
import {
    userCanNotReadTheText,
    userCanReadTheText,
    userCanSeeImageWithAltText,
    userCanSeeAnImageWithAltAttribute } from "../../../../../utils/forTesting/utils";

describe( "TEST OF MODAL ERROR COMPONENT", () => {

    beforeEach(()=>{
        render(<ModalError letter='A' tries={5}/>)
    })


    it( "should display an image", () => {
        userCanSeeImageWithAltText("dessin du pendu")
    } )

    it( "should display an image with the good src", () => {

        userCanSeeAnImageWithAltAttribute("dessin du pendu")
        .andWithSrc(/error_5_tries_left.jpg/)
    } )

    it("should display the error text", () => {
        
        userCanReadTheText(/Désolé il n'y a pas de/)
        userCanReadTheText("A")
        userCanReadTheText(/dans le mot./)

    })

    it("should not display the text for last change", () => {
        userCanNotReadTheText("Attention à la prochaine erreur, couik!!!")
        
    })
} )


describe("TEST OF MODAL ERROR FOR LAST CHANCE", () => {    

    it("should display the text for last change", () => {
        
        render(<ModalError letter='A' tries={1}/>)
        userCanReadTheText("Attention à la prochaine erreur, couik!!!")
        
    })
})