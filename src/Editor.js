import React, {useState, useEffect} from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "./context/notesContext";

export const Editor = () => {

    const { selectedNote, NoteUpdate } = useNotes();

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        setText(selectedNote.body);
        setTitle(selectedNote.title);
        setId(selectedNote.id);   
        if(selectedNote.id !== id) {
            setText(selectedNote.body);
            setTitle(selectedNote.title);
            setId(selectedNote.id);
        }
    },[id, selectedNote.body, selectedNote.title, selectedNote.id]);

    const UpdateBody = async (val) => {
        try {
            await setText(val);
            Update();
            
        } catch (error) {
            console.log("nah.")
        }
    };
    const UpdateTitle = async (txt) => {
        await setTitle(txt);
        Update();
    };
    const Update = () => {
        //debounce used to go here
        NoteUpdate(id, {
            title: title,
            body: text
        })
    };


    return (
            <div className="text-editor">
                <EditorToolbar />
                <ReactQuill
                value={text}
                onChange={UpdateBody}
                theme="snow"
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
                />
            </div>
    );
  };
  
  export default Editor;