import { specific } from "react-files-hooks";
import { useDocs } from "../context/docsContext";

const DownloadBtn = () => {
  const { selectedDoc } = useDocs();

  function extractContent(s, space) {
    var span = document.createElement("span");
    span.innerHTML = s;
    if (space) {
      var children = span.querySelectorAll("*");
      for (var i = 0; i < children.length; i++) {
        if (children[i].textContent) children[i].textContent += " ";
        else children[i].innerText += " ";
      }
    }
    return [span.textContent || span.innerText].toString().replace(/ +/g, " ");
  }

  const txtBody = () => {
    if (selectedDoc) {
      let bodyTextOnly = extractContent(selectedDoc.body, true);
      return bodyTextOnly;
    } else {
      return "For some reason, your download didn't work :(";
    }
  };

  const txtTitle = () => {
    if (selectedDoc) {
      let titleTextOnly = extractContent(selectedDoc.title, true);
      return titleTextOnly;
    } else {
      return "none";
    }
  };

  const { download } = specific.useTextDownloader();

  const handleDownload = () => {
    let bodyArr = [];
    bodyArr.push(txtBody());
    let bodyStr = bodyArr.toString();
    let titleArr = [];
    titleArr.push(txtTitle());
    let titleStr = titleArr.toString();
    download({
      data: bodyStr,
      name: `${titleStr}`,
    });
  };

  return (
    <>
      {selectedDoc ? (
        <button
          onClick={handleDownload}
          className="flex flex-row items-center"
          data-tooltip-target="save-tooltip"
          type="button"
        >
          <svg
            className="w-7 h-7 text-slate-600 dark:text-sky-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </button>
      ) : (
        <button
          className="flex flex-row items-center cursor-not-allowed"
          data-tooltip-target="save-tooltip"
          type="button"
        >
          <svg
            className="w-7 h-7 text-slate-400 dark:text-sky-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default DownloadBtn;
