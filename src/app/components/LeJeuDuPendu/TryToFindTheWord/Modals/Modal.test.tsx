import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import {
    userCanReadTheText,
    userCanSeeImageWithAltText,
    userCanNotReadTheText,
    userCanSeeAnImageWithAltAttribute,
} from "../../../../utils/forTesting/utils";

describe("TEST OF MODAL COMPONENT WITH SUCCESS STATUS", () => {
    it("should display the success text", () => {
        render(
            <Modal
                status="success"
                letter="V"
                totalLetter={1}
                tries={7}
                hiddeModal={() => {}}
            />
        );
        userCanReadTheText(/Bravo. Il y a 1/);
        userCanReadTheText("V");
    });
});

describe("TEST OF MODAL COMPONENT WITH ERROR STATUS", () => {
    describe("TEST OF MODAL ERROR COMPONENT", () => {
        beforeEach(() => {
            render(
                <Modal
                    status="error"
                    letter="A"
                    totalLetter={1}
                    tries={7}
                    hiddeModal={() => {}}
                />
            );
        });

        it("should display an image", () => {
            userCanSeeImageWithAltText("dessin du pendu");
        });

        it("should display an image with the good src", () => {
            userCanSeeAnImageWithAltAttribute("dessin du pendu").andWithSrc(
                /error_7_tries_left.jpg/
            );
        });

        it("should display the error text", () => {
            userCanReadTheText(/Désolé il n'y a pas de/);
            userCanReadTheText("A");
            userCanReadTheText(/dans le mot./);
        });

        it("should not display the text for last change", () => {
            userCanNotReadTheText("Attention à la prochaine erreur, couik!!!");
        });
    });

    describe("TEST OF MODAL ERROR FOR LAST CHANCE", () => {
        it("should display the text for last change", () => {
            render(
                <Modal
                    status="error"
                    letter="A"
                    totalLetter={1}
                    tries={1}
                    hiddeModal={() => {}}
                />
            );
            userCanReadTheText("Attention à la prochaine erreur, couik!!!");
        });
    });
});
