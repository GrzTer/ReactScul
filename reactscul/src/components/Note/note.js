import React, { useState } from 'react'
import IconPencilSquare from '../Svg/Pen'
import IconDeleteCircleOutline from '../Svg/Bin'
import Modal from '../Modal/modal'

const Note = ({ title, description, deleteNote }) => {
  const [isModal, setIsModal] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(title)
  const [currentDescription, setCurrentDescription] = useState(description)
  const toggleContent = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="m-4 transform rounded-lg bg-white p-4 shadow-lg transition hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <button onClick={toggleContent} className="flex-grow text-left">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">
            {currentTitle}
          </h2>
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full bg-amber-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
            onClick={() => setIsModal(true)}
          >
            <IconPencilSquare />
          </button>
          <button
            type="button"
            className="rounded-full bg-amber-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
            onClick={deleteNote}
          >
            <IconDeleteCircleOutline />
          </button>
        </div>
      </div>

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
    </div>
  )
}

export default Note
