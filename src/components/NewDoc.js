import React, { useState } from "react";
import "@material-tailwind/react/tailwind.css";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useNotes } from "../context/notesContext";

export default function Create() {
    const { showModal, setShowModal, UpdateTitle, NewNote, NewNoteBtnClick,title } = useNotes();

    return (
        <>
            <button onClick={NewNoteBtnClick} className="flex flex-row text-slate-100 items-center bg-rose-500 rounded-sm h-full" data-tooltip-target="create-tooltip" type="button">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    New Document
                </ModalHeader>
                <ModalBody>
                    <input onKeyUp={(e) => UpdateTitle(e.target.value)} type="text" placeholder="Enter a title..." className="text-base leading-relaxed text-gray-600 font-normal" />
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={NewNote}
                        ripple="light"
                    >
                        Create
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}