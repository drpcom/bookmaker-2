import React from 'react';
import { useUploader, MIME_TYPES } from 'react-files-hooks';
import { useNotes } from '../context/notesContext';
import { db } from '../backend/firebase_config';
import firebase from 'firebase/app';

const UploadBtn = () => {
    const { notes, setNotes, setSelectedNote, setSelectedNoteIndex } = useNotes();

    const { uploader } = useUploader({
    onSelectFile: incoming => {
      const fileReader = new FileReader();
      fileReader.readAsText(incoming[0], "UTF-8");
      fileReader.onload = e => {
        const NewNoteUploaded = async () => {
            const note = {
                title: incoming[0].name,
                body: e.target.result
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
            setSelectedNote(notes[NewNoteIndex]); //not working? TODO: troubleshoot.
            setSelectedNoteIndex(NewNoteIndex);
        }
        // console.log(incoming[0].name)
        // console.log(e.target.result);
        NewNoteUploaded();
      };
    }, 
    onError: error => {console.log('error is:', error)},
    validTypes: [MIME_TYPES.TEXT, MIME_TYPES.PLAIN_TEXT]
  });  

  return (
    <div className='uploadBtn'>
        <label htmlFor="file-upload-btn" className="custom-file-upload">
            <svg className="w-7 h-7 text-slate-600 dark:text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
        </label>
        <input {...uploader} id="file-upload-btn" />
    </div> 
  )
}

export default UploadBtn