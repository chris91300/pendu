
import { render, screen } from "@testing-library/react";
import Keyboard from './Keyboard'
import alphabet from "../../../utils/alphabet";
import { userCanClickOnButton } from "../../../utils/forTesting/utils";



describe("TEST OF KEYBOARD COMPONENT", () => {

    it("should display all letter of alphabet", () => {

        render(<Keyboard word={["test"]} clickOnLetter={()=>{}}/>)

        alphabet.map( letter => {

            userCanClickOnButton(letter)
            
        })
    })
})