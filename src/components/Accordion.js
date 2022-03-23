import React, { useState } from 'react';
import { useCollapse } from '../context/collapseContext';
import { useNotes } from '../context/notesContext';
import Document from './Document';

const Accordian = () => {
    const { clicked } = useCollapse();
    const { notes } = useNotes();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }

  return (
      clicked ? (
      <>
<div className="collapse" id="collapseExample">
  <div className="flex flex-col md:hidden min-h-screen shadow-lg bg-violet-300 dark:bg-[#2e2e37] dark:text-slate-200 pt-4">
      <div className="flex justify-center ml-6 mr-6">
        <input value={searchQuery} onChange={handleSearch} type="search" className="form-control flex self-center min-w-0 w-[300px] sm:w-[400px] h-11/12 text-2xl text-slate-200 dark:text-white bg-[#f3f4f6] dark:bg-zinc-700 rounded-sm bg-clip-padding border-none focus:text-gray-700 focus:bg-white focus:border-sky-300 focus:outline-none mb-4" placeholder="Search" aria-label="Search"></input>
        <button className="bg-zinc-700 ml-2 text-slate-200 pr-1 pl-1 rounded-sm mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
        </button>
        <button className="bg-zinc-700 ml-2 text-slate-200 pr-1 pl-1 rounded-sm mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" /></svg>
        </button>
      </div>
        <div className='flex flex-row flex-wrap max-w-screen-sm justify-center self-center xl:justify-start'>
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
</div>
      </>
      ) : null
  ) 
};

export default Accordian;
