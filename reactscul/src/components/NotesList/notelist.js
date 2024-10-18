import React from 'react'
import Note from '../Note/note'
import { NOTES } from './data'

// NotesList component for rendering a list of notes
const NotesList = () => {
  return (
    // Container for the entire notes list
    <div className="bg-amber-500 p-10 rounded-xl flex flex-col gap-4 scale-125">
      {/* Title of the notes list */}
      <h1 className="mb-6 text-center text-5xl font-bold">Notatki</h1>
      <hr />
      {/* Container for individual notes */}
      <div>
        {/* Map through NOTES array to render individual Note components */}
        {NOTES.map((currentNote) => (
          <Note
            key={currentNote.id}
            title={currentNote.title}
            description={currentNote.description}
          />
        ))}
      </div>
    </div>
  )
}

export default NotesList
