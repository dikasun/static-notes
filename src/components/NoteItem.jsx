import React from "react";
import NoteItemBody from "./NoteItemBody.jsx";
import NoteItemAction from "./NoteItemAction.jsx";

function NoteItem({ id, title, date, body, isArchive, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} date={date} body={body} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        isArchive={isArchive}
      />
    </div>
  );
}

export default NoteItem;
