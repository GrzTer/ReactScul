import React, { useState } from 'react'
import IconPencilSquare from '../Svg/Pen'
import IconDeleteCircleOutline from '../Svg/Bin'
import Modal from '../Modal/modal'

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
  const toggleContent = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="m-4 transform rounded-lg bg-white p-4 shadow-lg transition hover:scale-105 hover:shadow-xl">
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
            onClick={() => setIsModal(true)}
          >
            <IconPencilSquare />
          </button>
          {/* Button to delete note (functionality not implemented) */}
          <button
            id="delete-button"
            type="button"
            className="rounded-full bg-amber-500 px-4 py-2 text-white transition duration-300 hover:text-black mr-2"
          >
            <IconDeleteCircleOutline />
          </button>
        </div>
      </div>

      {/* Conditionally render description when note is expanded */}
      {isExpanded && <span className="mb-4 text-gray-600">{description}</span>}
      {/* Modal component for editing note (props passed for visibility control) */}
      <Modal active={isModal} setIsModal={setIsModal} />
    </div>
  )
}

export default Note
