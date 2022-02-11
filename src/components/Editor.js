import React, {useState, useEffect} from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../context/notesContext";
import './Editor.css';

export const Editor = () => {

    const { selectedNote, setSelectedNote, NoteUpdate } = useNotes();

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

    const Unselect = () => {
        setSelectedNote(null);
    }


    return (
        <div className="bg-gray-100 dark:bg-zinc-700 rounded-lg min-h-screen flex flex-col items-center overflow-auto">
            <div className="bg-gray-100 dark:bg-zinc-700 w-full rounded flex flex-col">
                <div className="text-editor h-full break-words">
                    <EditorToolbar />
                    <div className="flex flex-row justify-around">
                        <input 
                        value={title ? title : "(No Subject)"} 
                        onChange={(e) => UpdateTitle(e.target.value)}
                        type="text" 
                        placeholder="Title" 
                        className="w-[80%] flex flex-row flex-wrap m-4 border-0 focus:ring-0 text-3xl bg-gray-100 dark:bg-zinc-700 text-zinc-700 dark:text-slate-200" 
                        />
                        {selectedNote ? 
                        <button onClick={Unselect} className="h-6 self-center mr-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </button> 
                        : <div></div>}
                    </div>
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