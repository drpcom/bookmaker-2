import React, { createContext, useContext, useState } from 'react';

const SidebarViewContext = createContext();

export function useSidebarViewToggle() {
    return useContext(SidebarViewContext);
}

export const SidebarViewProvider = ({children}) => {
    const [clickedViewChange, setClickedViewChange] = useState(false);

    const toggleView = () => {
        setClickedViewChange(!clickedViewChange)
      }

  return (
      <SidebarViewContext.Provider value={{clickedViewChange, toggleView}}>
        {children}
      </SidebarViewContext.Provider>
  );
};

export default SidebarViewProvider;
