import React, { createContext, useContext, useState } from 'react';

const CollapseSidebarContext = createContext();

export function useCollapseSidebar() {
    return useContext(CollapseSidebarContext);
}

export const CollapseSidebarProvider = ({children}) => {
    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen(!open);
    }

  return (
      <CollapseSidebarContext.Provider value={{open, handleToggle}}>
        {children}
      </CollapseSidebarContext.Provider>
  );
};

export default CollapseSidebarProvider;
