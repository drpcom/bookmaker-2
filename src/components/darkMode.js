import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import '@themesberg/flowbite';

const DarkMode = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        theme === 'dark' ? 
        (<>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} data-tooltip-target="dark-mode" type="button">
            <svg className="w-7 h-7 text-slate-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        </button>
        <div id="dark-mode" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Dark Mode
            <div className='tooltip-arrow' data-popper-arrow></div>
        </div>
        </>) 
        : 
        (<>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} data-tooltip-target="light-mode" type="button">
            <svg className="w-7 h-7 text-slate-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
        </button>
        <div id="light-mode" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Light Mode
            <div className='tooltip-arrow' data-popper-arrow></div>
        </div>
        </>)
    )
}

export default DarkMode;