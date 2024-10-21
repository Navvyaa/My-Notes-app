import React from "react";

const Sidebar = ({ addNote, setSearchTerm }) => {
  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search notes"
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default Sidebar;
