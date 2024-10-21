
import React, { useState } from "react";

const Note = ({ note, updateNote, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [noteData, setNoteData] = useState({ ...note });

  const handleSave = () => {
    if (noteData.title.trim() === "") {
      alert("Title cannot be empty!");
      return;
    }
    updateNote(note.id, noteData);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={noteData.title}
            onChange={(e) =>
              setNoteData({ ...noteData, title: e.target.value })
            }
            placeholder="Enter title"
            maxLength="50"
          />
          <textarea
            value={noteData.description}
            onChange={(e) =>
              setNoteData({ ...noteData, description: e.target.value })
            }
            placeholder=" Enter description"
          />
          <button className="note-btn" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button className="note-btn" onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button className="note-btn" onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
