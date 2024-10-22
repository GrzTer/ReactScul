import { createPortal } from 'react-dom'

const Modal = ({ active, setIsModal }) => {
  return (
    active &&
    createPortal(
      <div className="absolute inset-0 backdrop-blur-lg flex justify-center items-center z-50">
        <div className="flex flex-col bg-amber-500 rounded-xl p-10">
          <h2 className="ftex-2xl font-bold nb-8">Edite Notatke</h2>
          <form className="flex flex-col gap-2">
            <label form="title">Title</label>
            <input id="title" name="title" type={'text'} />
            <label form="description">Description</label>
            <input id="description" name="description" type={'text'} />
            <button
              type={'submit'}
              className="py-2 px-4 bg-white rounded hover:text-indigo-700 transition"
              onClick={() => setIsModal(true)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>,
      document.body
    )
  )
}

export default Modal
