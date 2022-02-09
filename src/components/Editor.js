import React, {useState, useEffect} from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../context/notesContext";
import './Editor.css';

export const Editor = () => {

    const { selectedNote, NoteUpdate } = useNotes();

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');

    useEffect(() => { //i think this is attempting to fetch the current selected note. it doesn't work afaik.
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
        <div className="bg-gray-100 dark:bg-zinc-700 rounded-lg min-h-screen flex flex-col items-center overflow-auto">
            <div className="bg-gray-100 dark:bg-zinc-700 w-full rounded flex flex-col">
                <div className="text-editor h-full break-words">
                    <EditorToolbar />
                    <input 
                    value={title ? title : "(No Subject)"} 
                    onChange={(e) => UpdateTitle(e.target.value)}
                    type="text" 
                    placeholder="Title" 
                    className="w-[90%] flex flex-row flex-wrap m-4 border-0 focus:ring-0 text-3xl bg-gray-100 dark:bg-zinc-700 text-zinc-700 dark:text-slate-200" />
                    <ReactQuill
                    value={text}
                    onChange={UpdateBody}
                    theme="snow"
                    placeholder={"Write something awesome."}
                    modules={modules}
                    formats={formats}
                    />
                </div>
            </div>
        </div>
    );
  };
  
  export default Editor;