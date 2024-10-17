import React from 'react'
import Note from '../Note/note'
import { NOTES } from './data'

const NotesList = () => {
  return (
    <div className="bg-amber-500 p-10 rounded-xl flex flex-col gap-4 scale-125">
      <h1 className="mb-6 text-center text-5xl font-bold">Notatki</h1>
      <hr />
      <div>
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
