import React from "react";
import { useCollapseSidebar } from "../context/collapseSidebarContext";
import { useDocs } from "../context/docsContext";
import Editor from "./Editor";
import Create from "./NewDoc";

const Center = () => {
  const { open } = useCollapseSidebar();
  const { FetchDocsFromDB, selectedDoc } = useDocs();

  FetchDocsFromDB();

  return (
    <>
      <div
        className={
          open
            ? "sidebar-shown min-h-screen h-fit w-full md:w-3/5 bg-stone-200 dark:bg-[#3b3b41] flex flex-col items-center"
            : "sidebar-hidden w-full md:w-[60%] bg-stone-200 dark:bg-[#3b3b41] flex flex-col items-center"
        }
      >
        <div
          className={
            selectedDoc
              ? "w-[97%] mt-3 bg-[#F3F4F6] dark:bg-zinc-700 text-zinc-700 dark:text-slate-200 rounded"
              : "no-selected-item min-h-screen w-[97%] mt-3 bg-[#F3F4F6] dark:bg-zinc-700 text-zinc-700 dark:text-slate-200 rounded"
          }
        >
          <div className="bg-[#F3F4F6] dark:bg-[#3F3F46] rounded mb-16">
            {selectedDoc ? (
              <Editor />
            ) : (
              <div className="flex justify-center text-2xl md:text-3xl text-zinc-500 mt-44 ml-12 mr-12 select-none">
                <div className="h-10 text-center mr-4">
                  <Create />
                </div>
                <div>
                  Create a Document. Otherwise, select a document you've already
                  created.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Center;
