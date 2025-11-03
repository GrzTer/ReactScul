import React from 'react'
import './h1vertical.css'

const H1Vertical = ({ side = 'left', text = 'Note Taker' }) => {
  return (
    <div className={`vertical-container ${side}`}>
      <h1 className={`h1vertical text-white text-5xl font-bold`}>{text}</h1>
    </div>
  )
}

export default H1Vertical
