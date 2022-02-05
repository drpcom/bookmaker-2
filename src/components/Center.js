import React from 'react';
import { useCollapseSidebar } from '../context/collapseSidebarContext';
import { useNotes } from '../context/notesContext';
import TextEditor from '../TextEditor';
import Editor from '../Editor';

const Center = () => {
  const { open } = useCollapseSidebar();
  const { FetchNotesFromDB, selectedNote } = useNotes();

  FetchNotesFromDB();

  return (
    <>
    <div className={open ? "w-full md:w-3/5 h-full bg-stone-200 dark:bg-[#3b3b41] flex flex-col items-center" : "w-full md:w-[60%] h-full bg-stone-200 dark:bg-[#3b3b41] flex flex-col items-center"}>
      <div className='h-full w-[97%] mt-3 dark:bg-zinc-700 text-zinc-700 dark:text-slate-200'>
        <div className='bg-[#F3F4F6] dark:bg-[#3F3F46] rounded mb-16'>
          <input type="text" placeholder="Titulo" className="w-[80%] m-4 border-0 focus:ring-0 text-3xl bg-gray-100 dark:bg-zinc-700 text-zinc-700 dark:text-slate-200" />
          {selectedNote ? <Editor /> : null}
        </div>
      </div>
    </div>
    </>
  )
};

export default Center;
