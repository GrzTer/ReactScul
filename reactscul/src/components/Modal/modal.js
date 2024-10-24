import { createPortal } from 'react-dom'

const Modal = ({ active, children }) => {
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
