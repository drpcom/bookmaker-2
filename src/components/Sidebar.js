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
              <input value={searchQuery} onChange={handleSearch} type="search" className="form-control ml-6 min-w-0 block h-11/12 text-2xl text-slate-200 dark:text-white bg-white dark:bg-zinc-600 bg-clip-padding border-none m-0 focus:text-gray-700 focus:bg-white focus:border-sky-300 focus:outline-none" placeholder="Search" aria-label="Search"></input>
                <button className="btn px-6 py-4 bg-[#7a7ab8] dark:bg-sky-400 text-white font-medium uppercase shadow-md hover:bg-[#5c5c92] dark:hover:bg-sky-500 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ease-in-out flex items-center" type="button">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                </button>
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
