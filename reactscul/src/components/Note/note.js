import { useState } from "react";

const Note = ({title, description }) => {
  const [showDescription, setshowDescription] = useState(false);
  console.log(title, description);
  return (
    <div className="border border-gray-300 rounded">
      <h2
        onClick={() => setshowDescription((prevState) => !prevState)}
        className="text-xl font-semibold cursor-pointer"
      >
        {title}
      </h2>
      {!showDescription && (
        <div >
          <p className="text-gray-700 mb-4">{description}</p>
          <button className="bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Edit Note
          </button>
          <button className="bg-red-500 text-white rounded-full hover:bg-red-600">
            Delete Note
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;
