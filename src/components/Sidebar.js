import React, { useState } from 'react';
import { useCollapseSidebar } from '../context/collapseSidebarContext';
import { useNotes } from '../context/notesContext';
import { useSidebarViewToggle } from '../context/sidebarViewContext';
import Document from './Document';
import Create from './NewDoc';

const Sidebar = () => {
    const { open } = useCollapseSidebar();
    const { notes } = useNotes();
    const { toggleView, clickedViewChange } = useSidebarViewToggle();
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
              <button onClick={() => toggleView()} className="bg-[#f3f4f6] dark:bg-zinc-700 text-slate-600 dark:text-slate-200 h-full ml-6 pr-1 pl-1 rounded-sm">
              {clickedViewChange ? <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> : <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>}
              </button>
          </div>
            <div className={clickedViewChange ? 'flex flex-row flex-wrap ml-6 xl:justify-start mr-6' : 'flex flex-row flex-wrap ml-4 xl:justify-start'}>
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
