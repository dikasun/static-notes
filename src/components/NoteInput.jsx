import React, { useState } from "react";

function NoteInput({ onSubmit }) {
  const [titleLength, setTitleLength] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form
      className="note-input"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(title, body);
      }}
    >
      <h2>Create Note</h2>
      <p className="note-input__title__char-limit">{`Sisa Karakter: ${
        50 - titleLength
      }`}</p>
      <input
        className="note-input__title"
        type="text"
        placeholder="Note title..."
        maxLength={50}
        value={title}
        onChange={(e) => {
          setTitleLength(e.target.value.length);
          setTitle(e.target.value);
        }}
      />
      <textarea
        className="note-input__body"
        placeholder="Add some additional note..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteInput;
