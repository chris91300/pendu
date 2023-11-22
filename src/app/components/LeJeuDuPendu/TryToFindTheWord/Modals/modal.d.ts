export type ModalStatus = "success" | "error";

export type ModalProps = {
    status: ModalStatus;
    letter: string;
    totalLetter: number;
    tries: number;
    hiddeModal: () => void;
};
