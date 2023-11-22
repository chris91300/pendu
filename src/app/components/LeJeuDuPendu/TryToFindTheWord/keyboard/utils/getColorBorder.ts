import { ColorKeyType } from "../keyboard";

function getColorBorder(color: ColorKeyType) {
    let style;

    switch (color) {
        case "red":
            style = "border-red-600";
            break;

        case "green":
            style = "border-green-600";
            break;

        default:
            style = "border-[wheat]";
    }

    return style;
}

export default getColorBorder;
