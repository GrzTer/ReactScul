import React, { useState } from 'react'
import IconPencilSquare from '../Svg/Pen'
import IconDeleteCircleOutline from '../Svg/Bin'
import Modal from '../Modal/modal'

<<<<<<< HEAD
const Note = ({ title, description, deleteNote }) => {
  const [isModal, setIsModal] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(title)
  const [currentDescription, setCurrentDescription] = useState(description)
=======
// Component for displaying a single note
// Props:
// - title: initial title of the note
// - description: initial description of the note
const Note = ({ title: initialTitle, description: initialDescription }) => {
  // State for managing title, description, modal visibility, and expanded state
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)
  const [isModal, setIsModal] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Function to toggle the expanded state of the note
>>>>>>> origin/main
  const toggleContent = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="m-4 transform rounded-lg bg-white p-4 shadow-lg transition hover:scale-105 hover:shadow-xl">
<<<<<<< HEAD
      <div className="flex items-center justify-between">
        <button onClick={toggleContent} className="flex-grow text-left">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">
            {currentTitle}
          </h2>
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            className="justify-end rounded-full bg-amber-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
=======
      <div className="flex justify-between items-center">
        {/* Button to toggle note expansion */}
        <button onClick={toggleContent} className="flex-grow text-left">
          <h2 className="pr-4 mb-2 cursor-pointer text-2xl font-semibold text-gray-800 hover:bg-amber-500 hover:bg-clip-text hover:text-transparent">
            {title}
          </h2>
        </button>
        <div>
          {/* Button to open edit modal */}
          <button
            id="edit-button"
            type="button"
            className="rounded-full bg-amber-500 px-4 py-2 text-white transition duration-300 hover:text-black mr-2"
>>>>>>> origin/main
            onClick={() => setIsModal(true)}
          >
            <IconPencilSquare />
          </button>
<<<<<<< HEAD
          <button
            type="button"
            className="rounded-full bg-amber-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
            onClick={deleteNote}
=======
          {/* Button to delete note (functionality not implemented) */}
          <button
            id="delete-button"
            type="button"
            className="rounded-full bg-amber-500 px-4 py-2 text-white transition duration-300 hover:text-black mr-2"
>>>>>>> origin/main
          >
            <IconDeleteCircleOutline />
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {isExpanded && <p className="mb-4 text-gray-600">{currentDescription}</p>}
      <Modal active={isModal} setIsModal={setIsModal}>
        <h2 className="ftex-2xl font-bold nb-8">Edite Noet</h2>
        <form className="flex flex-col gap-2">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            type={'text'}
            value={currentTitle}
            onChange={(event) => setCurrentTitle(event.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type={'text'}
            value={currentDescription}
            onChange={(event) => setCurrentDescription(event.target.value)}
          />
          <button
            type={'button'}
            className="py-2 px-4 bg-white rounded hover:text-indigo-700 transition"
            onClick={() => setIsModal(false)}
          >
            Submit
          </button>
        </form>
      </Modal>
=======
      {/* Conditionally render description when note is expanded */}
      {isExpanded && <span className="mb-4 text-gray-600">{description}</span>}
      {/* Modal component for editing note (props passed for visibility control) */}
      <Modal active={isModal} setIsModal={setIsModal} />
>>>>>>> origin/main
    </div>
  )
}

export default Note
