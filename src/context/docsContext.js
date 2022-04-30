import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../backend/firebase_config";
import firebase from "firebase/app";

const DocsContext = createContext();

export function useDocs() {
  return useContext(DocsContext);
}

export const DocsProvider = ({ children }) => {
  const [docs, setDocs] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedDocIndex, setSelectedDocIndex] = useState(null);
  const [title, setTitle] = useState(null);

  const FetchDocsFromDB = () => {
    useEffect(() => {
      db.collection("notes").onSnapshot((serverUpdate) => {
        const docs = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        setDocs(docs);
      });
    }, []);
  };

  const SelectDoc = (doc, index) => {
    setSelectedDocIndex(index);
    setSelectedDoc(doc);
  };

  const DocUpdate = (id, docObj) => {
    db.collection("notes").doc(id).update({
      title: docObj.title,
      body: docObj.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const NewDoc = async () => {
    // Create doc object.
    const doc = {
      title: "",
      body: "",
    };
    // Create doc in DB.
    await db
      .collection("notes")
      .add({
        title: doc.title,
        body: doc.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function (result) {
        // Get the doc from DB and make it the current selectedDoc.
        result.get().then((doc) => {
          if (doc.exists) {
            const { title, body } = doc.data();
            setSelectedDoc({
              title: title,
              body: body,
              id: doc.id,
            });
            setSelectedDocIndex(doc.id);
          } else {
            console.log("No such document!");
          }
        });
      });
  };

  const DeleteDoc = async (doc) => {
    const docIndex = docs.indexOf(doc);
    await setDocs(docs.filter((_doc) => _doc !== doc));
    if (selectedDocIndex === docIndex) {
      setSelectedDocIndex(null);
      setSelectedDoc(null);
    } else {
      docs.length > 1
        ? SelectDoc(docs[selectedDocIndex - 1], selectedDocIndex - 1)
        : setSelectedDocIndex(null);
      setSelectedDoc(null);
    }

    db.collection("notes").doc(doc.id).delete();
  };

  return (
    <DocsContext.Provider
      value={{
        docs,
        setDocs,
        selectedDoc,
        setSelectedDoc,
        selectedDocIndex,
        setSelectedDocIndex,
        title,
        setTitle,
        FetchDocsFromDB,
        SelectDoc,
        DocUpdate,
        NewDoc,
        DeleteDoc,
      }}
    >
      {children}
    </DocsContext.Provider>
  );
};

export default DocsProvider;
