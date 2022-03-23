import React from "react";
import { useNotes } from "../context/notesContext";

export default function Create() {
    const { NewNote } = useNotes();

    return (
        <>
            <button onClick={NewNote} className="flex flex-row flex-none text-slate-100 items-center bg-[#7a7ab8] dark:bg-sky-400 rounded-sm h-full w-12 justify-center" data-tooltip-target="create-tooltip" type="button">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>
        </>
    );
}