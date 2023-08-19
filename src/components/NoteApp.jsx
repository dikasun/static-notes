import React, { useState } from "react";
import { getInitialData } from "../utils/index.js";
import NoteList from "./NoteList.jsx";
import NoteInput from "./NoteInput.jsx";
import SearchBar from "./SearchBar.jsx";

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [currentNotes, setCurrentNotes] = useState(notes);

  return (
    <>
      <header className="note-app__header">
        <h1>Static Notes</h1>
        <SearchBar
          onSearch={(key) =>
            setNotes(
              key
                ? notes.filter((note) =>
                    note.title.toLowerCase().includes(key.toLowerCase()),
                  )
                : currentNotes,
            )
          }
        />
      </header>
      <div className="note-app__body">
        <NoteInput
          onSubmit={(title, body) => {
            const newNotes = [
              ...notes,
              {
                id: +new Date(),
                title: title,
                body: body,
                createdAt: new Date().toISOString(),
                archived: false,
              },
            ];
            setNotes(newNotes);
            setCurrentNotes(newNotes);
          }}
        />
        <h2>Notes</h2>
        <NoteList
          notes={notes.filter((note) => !note.archived)}
          isArchive={false}
          onDelete={(id) => {
            setNotes(notes.filter((note) => note.id !== id));
            setCurrentNotes(notes.filter((note) => note.id !== id));
          }}
          onArchive={(id) => {
            const newNotes = notes.map((note) =>
              note.id === id ? { ...note, archived: true } : note,
            );
            setNotes(newNotes);
            setCurrentNotes(newNotes);
          }}
        />
        <h2>Archives</h2>
        <NoteList
          notes={notes.filter((note) => note.archived)}
          isArchive={true}
          onDelete={(id) => {
            setNotes(notes.filter((note) => note.id !== id));
            setCurrentNotes(notes.filter((note) => note.id !== id));
          }}
          onArchive={(id) => {
            const newNotes = notes.map((note) =>
              note.id === id ? { ...note, archived: false } : note,
            );
            setNotes(newNotes);
            setCurrentNotes(newNotes);
          }}
        />
      </div>
    </>
  );
}

export default NoteApp;
