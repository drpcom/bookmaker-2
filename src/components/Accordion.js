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
        <input value={searchQuery} onChange={handleSearch} type="search" className="form-control flex self-center min-w-0 w-[300px] sm:w-[400px] h-11/12 text-2xl text-slate-200 dark:text-white bg-[#f3f4f6] dark:bg-zinc-700 rounded-sm bg-clip-padding border-none focus:text-gray-700 focus:bg-white focus:border-sky-300 focus:outline-none mb-4" placeholder="Search" aria-label="Search"></input>
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
