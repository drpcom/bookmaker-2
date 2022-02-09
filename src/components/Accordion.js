import React from 'react';
import { useCollapse } from '../context/collapseContext';
import { useNotes } from '../context/notesContext';
import Document from './Document';

const Accordian = () => {
    const { clicked } = useCollapse();
    const { notes } = useNotes();

  return (
      clicked ? (
      <>
<div className="collapse" id="collapseExample">
  <div className="block md:hidden shadow-lg bg-violet-300 dark:bg-[#2e2e37] dark:text-slate-200 overflow-x-scroll">
        <div className='grid grid-flow-col grid-rows-1 xl:justify-start'>
            {notes ? 
                notes.map((_note, _index) => {
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
