import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const DarkMode = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        theme === 'dark' ? 
        (<>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <svg className="w-7 h-7 text-slate-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        </button>
        </>) 
        : 
        (<>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <svg className="w-7 h-7 text-slate-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
        </button>
        </>)
    )
}

export default DarkMode;