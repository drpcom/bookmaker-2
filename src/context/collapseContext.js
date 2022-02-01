import React, { createContext, useContext, useState } from 'react';

const CollapseContext = createContext();

export function useCollapse() {
    return useContext(CollapseContext);
}

export const CollapseProvider = ({children}) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
      }

  return (
      <CollapseContext.Provider value={{clicked, handleClick}}>
        {children}
      </CollapseContext.Provider>
  );
};

export default CollapseProvider;
