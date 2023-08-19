import React from "react";
import DeleteButton from "./DeleteButton.jsx";
import ArchiveButton from "./ArchiveButton.jsx";

function NoteItemAction({ id, isArchive, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
    </div>
  );
}

export default NoteItemAction;
