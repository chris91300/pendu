
import { render } from "@testing-library/react";
import ModalSuccess from './ModalSuccess'
import { userCanReadTheText } from "../../../../../utils/forTesting/utils";


describe( "TEST OF MODAL SUCCESS COMPONENT", () => {

    beforeEach(()=>{
        render(<ModalSuccess letter="E" totalLetter={2}/>)
    })


    it("should display the success text", () => {
        userCanReadTheText(/Bravo. Il y a 2/)
        userCanReadTheText("E")
    })
} )
