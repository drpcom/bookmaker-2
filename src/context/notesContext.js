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
  const [title, setTitle] = useState(null);

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

  const NewNote = async () => {
    // Create note object.
    const note = {
        title: '',
        body: ''
    }
    // Create note in DB.
    await db.collection('notes')
        .add({
            title: note.title,
            body: note.body,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function(result) {
          // Get the note from DB and make it the current selectedNote.
          result.get().then(doc => {
            if (doc.exists) {
                  const { title, body } = doc.data();
                  setSelectedNote({
                    title: title,
                    body: body,
                    id: doc.id
                  })
                  setSelectedNoteIndex(doc.id)
            } else {
                 console.log("No such document!");
            }
        })
  })}
  

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
        title, 
        setTitle,        
        FetchNotesFromDB,
        SelectNote,
        NoteUpdate,
        NewNote,
        DeleteNote,
       }}>
        {children}
      </NotesContext.Provider>
  );
};

export default NotesProvider;
