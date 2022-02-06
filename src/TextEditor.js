import React from "react";

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

import "quill/dist/quill.snow.css"; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const TextEditor = () => {
  const theme = "snow";

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"]
    ]
  };
  const placeholder = "Write something ♥";
  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "link",
    "image",
    "video"
  ];

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder
  });

  React.useEffect(() => {
    if (quill) {
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML(
          'The purpose of an <b>FAQ</b> is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called an FAQ regardless of whether the questions are actually frequently asked. <br/><br/> While the name may be recent, the FAQ format itself is quite old. For example, <a href="/wiki/Matthew_Hopkins" title="Matthew Hopkins">Matthew Hopkins</a> wrote <i>The Discovery of Witches</i> in 1647 as a list of questions and answers, introduced as "Certain Queries answered". Many old <a href="/wiki/Catechism" title="Catechism">catechisms</a> are in a question-and-answer (Q&amp;A) format. '
        );
      }
    }
  }, [quill]);

  return (
    <div className="bg-gray-100 dark:bg-zinc-700 rounded-lg min-h-screen flex flex-col items-center overflow-auto">
      <div className="bg-gray-100 dark:bg-zinc-700 w-full rounded flex flex-col">
        <div id="text-content" className="h-full" ref={quillRef} />
      </div>
    </div>
  );
};

export default TextEditor;