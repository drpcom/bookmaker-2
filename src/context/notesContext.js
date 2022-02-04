import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../backend/firebase_config';
import firebase from 'firebase/app';

const NotesContext = createContext();

export function useNotes() {
    return useContext(NotesContext);
}

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const FetchNotesFromDB = () => {
    useEffect(() => {
      db.collection('notes')
        .onSnapshot(serverUpdate => {
          const notes = serverUpdate.docs.map(_doc => {
            const data = _doc.data();
            data['id'] = _doc.id;
            return data;
          });
          setNotes(notes);
          console.log(notes)
        });
    },[]);
  }

  const SelectNote = (note, index) => {
    setSelectedNoteIndex(index);
    setSelectedNote(note);
  }

  const NoteUpdate = (id, noteObj) => {
    db.collection('notes')
        .doc(id)
        .update({
            title: noteObj.title,
            body: noteObj.body,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
  }

  const NewNote = async (title) => {
    const note = {
        title: title,
        body: ''
    }
    const newFromDB = await db.collection('notes')
        .add({
            title: note.title,
            body: note.body,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    const newID = newFromDB.id;
    await setNotes([...notes, note])
    const NewNoteIndex = notes.indexOf(notes.filter(_note => _note.id === newID)[0])
    setSelectedNote(notes[NewNoteIndex]);
    setSelectedNoteIndex(NewNoteIndex);
  }

  const DeleteNote = async (note) => {
    const noteIndex = notes.indexOf(note);
    await setNotes(notes.filter(_note => _note !== note))
    if(selectedNoteIndex === noteIndex) {
        setSelectedNoteIndex(null);
        setSelectedNote(null);
    } else {
        notes.length > 1 ? 
        SelectNote(notes[selectedNoteIndex - 1], selectedNoteIndex - 1) : 
        setSelectedNoteIndex(null);
        setSelectedNote(null);
    }

    db.collection('notes')
        .doc(note.id)
        .delete();
  }

  return (
      <NotesContext.Provider value={{
        notes,
        setNotes,
        selectedNote,
        setSelectedNote,
        selectedNoteIndex,
        setSelectedNoteIndex,
        FetchNotesFromDB,
        SelectNote,
        NoteUpdate,
        NewNote,
        DeleteNote
       }}>
        {children}
      </NotesContext.Provider>
  );
};

export default NotesProvider;