import { useState } from "react";

const Note = ({ title, description }) => {
  const [showDescription, setshowDescription] = useState(false);
  console.log(title, description);
  return (
    <>
      <button
        type="button"
        onClick={() => setshowDescription((prevState) => !prevState)}
      >
        <h2>{title}</h2>
      </button>

      {showDescription && <p>{description}</p>}
    </>
  );
};

export default Note;
