import { createPortal } from 'react-dom'

<<<<<<< HEAD
const Modal = ({ active, children }) => {
=======
// Modal component for editing notes
// Props:
// - active: boolean to control modal visibility
// - setIsModal: function to update modal visibility state
const Modal = ({ active, setIsModal }) => {
>>>>>>> origin/main
  return (
    active &&
    createPortal(
      <div className="absolute inset-0 backdrop-blur-lg flex justify-center items-center z-50">
        <div className="flex flex-col bg-amber-500 rounded-xl p-10">
          {children}
        </div>
      </div>,
      document.body
    )
  )
}

export default Modal
