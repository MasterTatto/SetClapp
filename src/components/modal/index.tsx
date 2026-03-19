import {Modal as ModalAntd} from "antd";
import React from "react";

interface IProps {
    title: string;
    isOpen: boolean;
    handleClose: () => void
    children: React.ReactNode
}

const Modal = ({title, isOpen, handleClose, children}: IProps) => {
    return (
        <ModalAntd
            title={title}
            open={isOpen}
            onCancel={handleClose}
            footer={() => null}
        >
            {children}
        </ModalAntd>
    );
};

export default Modal;