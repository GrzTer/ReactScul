import React from "react";
import Note from "../Note/note";
const NoteList = () => {
  const notes = [
    { id: 1, title: "Note 1", description: "Pierwsza notka" },
    { id: 2, title: "Note 2", description: "Pierwsza notka" },
  ];
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} title={note.title} description={note.description} />
      ))}
    </>
  );
}
export default NoteList;
