import { render, screen } from "@testing-library/react";
import Container from "./Container";
import { userCanReadTheText } from "../../../utils/forTesting/utils";

describe("test Container", () => {
    it("should render the text 'Un text'", () => {
        render(
            <Container>
                <p>Un text</p>
            </Container>
        );
        userCanReadTheText("Un text");
    });
});
