import React from 'react';
import { useCollapseSidebar } from '../context/collapseSidebarContext';

const Center = () => {
  const { open } = useCollapseSidebar();

  return (
    <>
    <div className={open ? "w-full md:w-3/5 h-full bg-stone-200 dark:bg-[#3b3b41] flex flex-col items-center" : "w-full md:w-[60%] h-full bg-stone-200 dark:bg-[#3b3b41] flex flex-col items-center"}>
      <div className='bg-white h-full w-[97%] mt-3 dark:bg-zinc-700 dark:text-slate-200'>
        <div>yeah</div>
      </div>
    </div>
    </>
  )
};

export default Center;
