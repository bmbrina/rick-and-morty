import React from 'react'

const Button = ({ text, classList, handleClick }: any) => {
  return (
    <button
      className={`btn ${classList}`}
      type="button"
      onClick={handleClick}
      onKeyPress={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
