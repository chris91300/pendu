import { ModalStatus } from "../Modals/modal";

export type ReturnTypes = {
    tries: number;
    wordHidden: string;
    word: string[];
    clickLetter: (lettre: string) => void;
    modalStatus: ModalStatus;
    modalIsVisible: boolean;
    letter: string;
    totalLetter: number;
    hiddeModal: () => void;
};
