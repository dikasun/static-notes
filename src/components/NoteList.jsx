import React from "react";
import NoteItem from "./NoteItem.jsx";
import { showFormattedDate } from "../utils/index.js";

function NoteList({ notes, isArchive, onDelete, onArchive }) {
  return notes.length === 0 ? (
    <div className="notes-list__empty-message">
      {isArchive ? "Archives is empty" : "Notes is Empty"}
    </div>
  ) : (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          date={showFormattedDate(note.createdAt)}
          body={note.body}
          isArchive={note.archived}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;
