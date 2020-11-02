import React from 'react'

const Select = ({ name, onChange, label, hideLabel, options }: any) => {
  const handleChange = (e: any) => {
    onChange(e.target.name, e.target.value)
  }
  return (
    <div className="form-group">
      <label className={`form-group__label ${hideLabel ? 'visually-hidden' : ''}`} htmlFor={name}>
        {label}
      </label>
      <select className="form-group__select" name={name} id={name} onChange={handleChange}>
        {options.map((option: any) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
