import React, { useState, useEffect, createContext, useContext } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('current-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
    }
    return 'light';
}

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(existing);

        localStorage.setItem('current-theme', existing);
        };

        if (initialTheme) {
            checkTheme(initialTheme);
        }

        useEffect(() => {
            checkTheme(theme);
        },[theme])

        return (
            <ThemeContext.Provider value={{theme, setTheme}}>
                {children}
            </ThemeContext.Provider>
        );
    };

