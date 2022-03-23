import React, {useState} from 'react';
import { useCollapse } from '../context/collapseContext';
import { useNotes } from '../context/notesContext';
import { useSidebarViewToggle } from '../context/sidebarViewContext';

const Document = ({_note, _index}) => {
    const { SelectNote, DeleteNote } = useNotes();
    const [isHovering, setIsHovering] = useState(false);
    const { handleClick } = useCollapse();
    const { clickedViewChange } = useSidebarViewToggle();

    const SelectNoteHandler = (n, i) => {
        SelectNote(n,i);
        handleClick();
        
    }
    const DeleteNoteHandler = (note) => {
        if(window.confirm(`Are you sure you want to delete '${note.title}'?`)) {
            DeleteNote(note);
        }
    } 

    function removeHTMLTags (str) {
        return str.replace(/<[^>]*>?/gm, '');
      };
    
  return (
      <>
    <button onClick={() => SelectNoteHandler(_note, _index)} onMouseEnter={() => {setIsHovering(true)}} onMouseLeave={() => {setIsHovering(false)}} className={clickedViewChange ? 'bg-[#f3f4f6] dark:bg-zinc-700 min-w-full border-8 border-zinc-200 dark:border-[#3b3b41] rounded mb-2' : 'break-all bg-[#f3f4f6] dark:bg-zinc-700 border-8 border-zinc-200 dark:border-[#3b3b41] rounded w-36 h-40 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2 flex flex-col p-2 lg:p-3' }>
        <div className='text-xl lg:text-2xl indent-2 flex flex-row w-full justify-between'>
            <p className={clickedViewChange ? 'line-clamp-1 w-[80%] h-6 md:h-8 text-left text-[#708090] dark:text-sky-300 text-sm md:text-base' : 'mb-2 line-clamp-1 w-[80%] h-6 md:h-8 text-left text-[#708090] dark:text-sky-300 text-sm md:text-2xl'}>{_note.title ? _note.title : 'No Title'}</p> 
            {isHovering ? <svg onClick={() => DeleteNoteHandler(_note)} className="w-6 h-6 text-[#708090] hover:text-slate-400 ease-in-out duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg> : null}
        </div>
        <div>
           <p className={clickedViewChange ? 'line-clamp-1 text-xs flex flex-row text-left text-[#3f3f46] dark:text-slate-200 mb-1 mr-2 ml-2' : 'line-clamp-3 md:line-clamp-5 text-xs flex flex-row text-left lg:line-clamp-7 text-[#3f3f46] dark:text-slate-200'}>{removeHTMLTags(_note.body.substring(0, 200)) + '...'}</p> 
        </div>    
    </button>
    </>
    );
};

export default Document;
