import React, { useState } from 'react'
import IconPencilSquare from '../Svg/Pen'
import IconDeleteCircleOutline from '../Svg/Bin'

const Note = ({ title: initialTitle, description: initialDescription }) => {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleContent = () => {
    setIsExpanded(!isExpanded)
  }
  //
  // const editNote = () => {
  //     const newTitle = prompt("Wprowadź nowy Tytuł", title);
  //     const newDescription = prompt("Wprowadź nowy Opis", description);
  //     if (newTitle) setTitle(newTitle);
  //     if (newDescription) setDescription(newDescription);
  // };
  //
  // const deleteNote = () => {
  //     prompt("Chcesz to usunąć?", "Mhm");
  //     setTitle("Usuń notatkę");
  //     setDescription("");
  //
  // };

  return (
    <div className="m-4 transform rounded-lg bg-white p-4 shadow-lg transition hover:scale-105 hover:shadow-xl">
      <button onClick={toggleContent}>
        <h2 className="pr-4 mb-2 cursor-pointer text-2xl font-semibold text-gray-800">
          {title}
        </h2>
      </button>

      <button
        className="rounded-full bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
        // onClick={editNote}
      >
        <IconPencilSquare />
      </button>
      <button
        className="rounded-full bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
        // onClick={deleteNote}
      >
        <IconDeleteCircleOutline />
      </button>
      {isExpanded && (
        <div>
          <span className="mb-4 text-gray-600">{description}</span>
        </div>
      )}
    </div>
  )
}

export default Note
