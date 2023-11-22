import { render } from "@testing-library/react";
import GameWon from "./GameWon";
import {
    userCanReadTheH2,
    userCanSeeImageWithAltText,
    userCanReadTheText,
} from "../../../../utils/forTesting/utils";

describe("TEST OF GAMEWON COMPONENT", () => {
    beforeEach(() => {
        render(<GameWon word="voiture" />);
    });

    it("should display the title 'félicitations", () => {
        userCanReadTheH2("félicitations");
    });

    it("should display an image", () => {
        userCanSeeImageWithAltText("image aléatoire symbolisant la victoire");
    });

    it("should display the text 'Vous avez trouvé le mot voiture' ", () => {
        userCanReadTheText("Vous avez trouvé le mot");
        userCanReadTheText("voiture");
    });
});
