import React, { useState } from 'react'
import Note from '../Note/note'
import { NOTES } from './data'
import Modal from '../Modal/modal'

// NotesList component for rendering a list of notes
const NotesList = () => {
  const [currentNotes, setCurentNotes] = useState(NOTES)
  const [isModal, setIsModal] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const deleteNote = (id) => {
    setCurentNotes(currentNotes.filter((note) => note.id !== id))
  }

  const addNote = () => {
    if (newTitle.trim() && newDescription.trim()) {
      setCurentNotes([
        ...currentNotes,
        { id: Math.random(), title: newTitle, description: newDescription },
      ])
      setNewTitle('')
      setNewDescription('')
      setIsModal(false)
    }
  }

  return (
    <div className="bg-amber-500 p-10 rounded-xl flex flex-col gap-4 scale-150 shadow-2xl shadow-[#0A0A0A]  border-2 border-[#0A0A0A] ">
      <h1 className="mb-6 text-center text-5xl font-bold">Notatki</h1>
      <hr />
      <div>
        {currentNotes.map((currentNote) => (
          <Note
            key={currentNote.id}
            title={currentNote.title}
            description={currentNote.description}
            deleteNote={() => deleteNote(currentNote.id)}
          />
        ))}
      </div>
      <hr />
      <button
        type="button"
        className="animate-bounce hover:scale-105 hover:shadow-xl rounded-full bg-[#0A0A0A] px-4 py-2 text-amber-500 transition duration-300 hover:text-white"
        onClick={() => setIsModal(true)}
      >
        Add Note
      </button>
      <Modal active={isModal} setIsModal={setIsModal}>
        <h2 className="text-2xl font-bold mb-8">Add Note</h2>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            value={newTitle} // Bind input to the state
            onChange={(event) => setNewTitle(event.target.value)} // Update state on change
            placeholder="Enter note title"
            className="p-2 rounded hover:animate-pulse"
          />

          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            type="text"
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)} // Update state on change
            placeholder="Enter note description"
            className="p-2 rounded hover:animate-pulse"
          />

          <button
            type="button"
            className="animate-bounce py-2 px-4 bg-white rounded hover:text-indigo-700 transition mt-4"
            onClick={addNote}
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default NotesList
