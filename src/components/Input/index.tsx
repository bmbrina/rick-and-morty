import React, { useRef } from 'react'

const Input = ({ name, type, placeholder, value, onInput, label, hideLabel, classList }: any) => {
  const $input = useRef<HTMLInputElement>(null)
  const handleInput = () => {
    if ($input.current) {
      onInput($input.current.value)
    }
  }
  return (
    <div className="form-group">
      <label className={`form-group__label ${hideLabel ? 'visually-hidden' : ''}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`form-group__input ${classList}`}
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onInput={handleInput}
        ref={$input}
      />
    </div>
  )
}

export default Input
