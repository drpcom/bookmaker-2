import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useDocs } from "../context/docsContext";
import "./Editor.css";

export const Editor = () => {
  const { selectedDoc, setSelectedDoc, setSelectedDocIndex, DocUpdate } =
    useDocs();

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  // Side effect that sets the current parameters of the text edtior to selectedDoc.
  useEffect(() => {
    setText(selectedDoc.body);
    setTitle(selectedDoc.title);
    setId(selectedDoc.id);
    if (selectedDoc.id !== id) {
      // If we move to a new doc...
      setText(selectedDoc.body);
      setTitle(selectedDoc.title);
      setId(selectedDoc.id);
    }
  }, [id, selectedDoc.body, selectedDoc.title, selectedDoc.id]);

  // Sets body text to whatever is currently being typed.
  // Attempts to update DB.
  const UpdateBody = (val) => {
    setText(val);
    try {
      Update();
    } catch (error) {
      console.log("Unable to update doc.");
    }
    console.log(text);
  };
  const UpdateTitle = async (txt) => {
    await setTitle(txt);
    Update();
  };

  const Update = () => {
    //debounce used to go here
    DocUpdate(id, {
      title: title,
      body: text,
    });
  };

  const Unselect = () => {
    setSelectedDoc(null);
    setSelectedDocIndex(null);
  };

  return (
    <div className="bg-gray-100 dark:bg-zinc-700 rounded-lg min-h-screen flex flex-col items-center overflow-auto">
      <div className="bg-gray-100 dark:bg-zinc-700 w-full rounded flex flex-col">
        <div className="text-editor h-full break-words">
          <EditorToolbar />
          <div className="flex flex-row justify-around">
            <textarea
              value={title ? title : ""}
              onChange={(e) => UpdateTitle(e.target.value)}
              type="text"
              placeholder="Title"
              className="resize-none overflow-y-hidden h-20 w-[80%] flex flex-row flex-wrap m-4 border-0 focus:ring-0 text-3xl bg-gray-100 dark:bg-zinc-700 text-[#7a7ab8] dark:text-sky-300 font-bold"
            />
            {selectedDoc ? (
              <button onClick={Unselect} className="h-6 self-center mr-4">
                <svg
                  className="w-6 h-6 text-[#708090] hover:text-slate-400 ease-in-out duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <div></div>
            )}
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
