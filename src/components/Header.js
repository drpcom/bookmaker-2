import React from 'react';
import DarkMode from './darkMode';
import { useCollapse } from '../context/collapseContext';
import { useCollapseSidebar } from '../context/collapseSidebarContext';

const Header = () => {
  const { clicked, handleClick } = useCollapse();
  const { open, handleToggle } = useCollapseSidebar();
  return (
      <div>
        <div className="h-1/3 bg-slate-400 dark:bg-zinc-600">
          <p className="indent-2 tracking-wider text-slate-200">Bookmaker</p>
        </div>
        <div className="h-2/3 pt-2 pb-2 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 dark:from-[#2e2e37]  dark:to-zinc-700">
        <div className="w-full h-full flex flex-wrap justify-between">
          <div className='flex flex-row'>
            <div className='flex text-lg z-10 justify-around w-32'>
              <div>
                <button className="flex flex-row text-slate-100 items-center bg-rose-500 rounded-sm h-full" data-tooltip-target="create-tooltip" type="button">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
                <div id="create-tooltip" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  New Document
                <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
              </div>
              <div className='self-center'>
                <button className="flex flex-row items-center" data-tooltip-target="open-tooltip" type="button">
                <svg className="w-7 h-7 text-slate-600 dark:text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                </button>
                <div id="open-tooltip" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Open
                <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
              </div>
              <div className='self-center'>
                <button className="flex flex-row items-center" data-tooltip-target="save-tooltip" type="button">
                <svg className="w-7 h-7 text-slate-600 dark:text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </button>
                <div id="save-tooltip" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Save
                <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
              </div>
            </div>
              <div className='text-slate-100 text-2xl mr-4 ml-4 hidden sm:flex'>||</div>
            <div className='flex text-lg z-10 justify-around w-40'>
                <div>
                  <button data-tooltip-target="zoom-in-tooltip" type="button">
                      <svg className="w-7 h-7 text-slate-600 dark:text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </button>
                  <div id="zoom-in-tooltip" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Zoom In
                  <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
                </div>
                <div>
                  <button data-tooltip-target="zoom-out-tooltip" type="button">
                      <svg className="w-7 h-7 text-slate-600 dark:text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" /></svg>
                  </button>
                  <div id="zoom-out-tooltip" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Zoom Out
                  <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
                </div>
                <div className='text-slate-100 text-2xl mr-4 ml-4 hidden sm:flex'>||</div>
              <div>
                  <DarkMode />
              </div>
              <div>
                <button onClick={() => handleToggle()} data-tooltip-target="collapse-tooltip" type="button">
                    {open ? (<svg className="w-7 h-7 text-slate-600 dark:text-sky-300 hidden md:flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>) : <svg className="w-7 h-7 text-slate-600 dark:text-sky-300 hidden md:flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>}
                </button>
                <div id="collapse-tooltip" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Collapse Sidebar
                  <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
              </div>
            </div>

          </div>
            <button className='flex flex-row md:hidden' onClick={() => handleClick()}>
              {clicked ? (<svg className="w-7 h-7 text-slate-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>) 
              : (<svg className="w-7 h-7 text-slate-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>)}
            </button>
        </div>
      </div>
      </div>
  )
};

export default Header;
