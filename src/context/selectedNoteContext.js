import React, { createContext, useContext, useState } from 'react';

const SelectedNoteContext = createContext();

export function useSelectedNote() {
    return useContext(SelectedNoteContext);
}

export const SelectedNoteProvider = ({children}) => {
    const [selectedNote, setSelectedNote] = useState(null);

  return (
      <SelectedNoteContext.Provider value={{selectedNote, setSelectedNote}}>
        {children}
      </SelectedNoteContext.Provider>
  );
};

export default SelectedNoteProvider;
