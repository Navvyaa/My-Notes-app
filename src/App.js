
import React, { useState,useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);
  
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);
  
  
  const addNote = () => {
    const newNote = { id: Date.now(), title: "", description: "" };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (id, updatedNote) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar addNote={addNote} setSearchTerm={setSearchTerm} />
      <Container
        notes={filteredNotes}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
