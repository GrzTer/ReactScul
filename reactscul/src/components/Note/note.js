import React, { useState } from 'react'
import IconPencilSquare from '../Svg/Pen'
import IconDeleteCircleOutline from '../Svg/Bin'
import Modal from '../Modal/modal'

const Note = ({ title: initialTitle, description: initialDescription }) => {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)
  const [isModal, setIsModal] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleContent = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className="m-4 transform rounded-lg bg-white p-4 shadow-lg transition hover:scale-105 hover:shadow-xl">
      <button onClick={toggleContent}>
        <h2 className="pr-4 mb-2 cursor-pointer text-2xl font-semibold text-gray-800">
          {title}
        </h2>
      </button>

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
      >
        <IconDeleteCircleOutline />
      </button>

      {isExpanded && <span className="mb-4 text-gray-600">{description}</span>}
      <Modal active={isModal} setIsModal={setIsModal} />
    </div>
  )
}

export default Note
