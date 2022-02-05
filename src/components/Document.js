import React from 'react';
import { useNotes } from '../context/notesContext';

const Document = ({_note, _index}) => {
    const { SelectNote, DeleteNote, selectedNoteIndex } = useNotes();

    const xSelectNote = (n, i) => {
        SelectNote(n,i);
    }
    const xDeleteNote = (note) => {
        if(window.confirm(`Are you sure you want to delete '${note.title}'?`)) {
            DeleteNote(note);
        }
    } 

    function removeHTMLTags (str) {
        return str.replace(/<[^>]*>?/gm, '');
      };
    
  return (
      <>
    <div className='flex flex-row flex-wrap ml-4 xl:justify-start'>
    <button onClick={() => xSelectNote(_note, _index)} className='bg-emerald-50 dark:bg-zinc-700 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2 flex flex-col p-2 lg:p-3 hover:animate-pulse'>
        <div className='text-xl lg:text-2xl indent-2'>
            <p className='mb-2 line-clamp-1 h-8 text-left dark:text-sky-300'>{_note.title}</p> 
        </div>
        <div>
           <p className='line-clamp-5 text-xs flex flex-row text-left lg:line-clamp-7 dark:text-slate-200'>{removeHTMLTags(_note.body.substring(0, 200)) + '...'}</p> 
        </div>    
    </button>
    </div>
    </>
    );
};

export default Document;
