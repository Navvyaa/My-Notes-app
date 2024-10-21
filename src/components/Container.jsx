
import React from "react";
import Note from "./Note";

const Container = ({ notes, updateNote, deleteNote }) => {
  return (
    <div className="note-container">
      <h2>My Notes</h2>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default Container;
