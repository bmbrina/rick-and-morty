import React from 'react'

const Button = ({ text, classList, handleClick, hideText }: any) => {
  return (
    <button
      className={`btn ${classList}`}
      type="button"
      onClick={handleClick}
      onKeyPress={handleClick}
    >
      <span className={`btn__text ${hideText ? 'visually-hidden' : ''}`}>{text}</span>
    </button>
  )
}

export default Button
