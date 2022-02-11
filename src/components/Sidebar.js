import React, { useState } from 'react';
import { useCollapseSidebar } from '../context/collapseSidebarContext';
import { useNotes } from '../context/notesContext';
import Document from './Document';
import Create from './NewDoc';

const Sidebar = () => {
    const { open } = useCollapseSidebar();
    const { notes } = useNotes();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <>       
        <div className={open ? "md:w-2/5 bg-violet-300 dark:bg-[#2e2e37] h-fit min-h-screen hidden md:flex md:flex-col mb-16" : "hidden"}>
          <div className="flex flex-row items-center h-12 mt-4 mb-4 ml-2 pl-4 pr-4">
              <Create />
              <input value={searchQuery} onChange={handleSearch} type="search" className="form-control ml-6 min-w-0 block h-11/12 text-2xl text-slate-200 dark:text-white bg-[#f3f4f6] dark:bg-zinc-700 rounded-sm bg-clip-padding border-none m-0 focus:text-gray-700 focus:bg-white focus:border-sky-300 focus:outline-none" placeholder="Search" aria-label="Search"></input>
          </div>
            <div className='flex flex-row flex-wrap ml-4 xl:justify-start'>
            {notes ? 
                notes.filter(_note => {
                    return _note.title?.toLowerCase().match(searchQuery.toLowerCase()) ||
                    _note.body?.toLowerCase().match(searchQuery.toLowerCase())
                }).map((_note, _index) => {
                    return (
                            <Document 
                            key={Math.random() * 99999}
                             _note = {_note}
                            _index = {_index}
                            />
                    )
                })
            : <div></div>}
            </div>
          </div>
        </>
      )
};

export default Sidebar;
