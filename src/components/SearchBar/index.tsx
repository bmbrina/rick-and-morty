import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const SearchBar = ({ input, handleClick }: any) => {
  const [searchString, setSearchString] = useState('')
  const search = () => {
    handleClick(input.name, searchString)
  }
  return (
    <div className="search-bar">
      <Input
        {...input}
        onInput={setSearchString}
        value={searchString}
        classList="search-bar__input"
      />
      <Button handleClick={search} classList="search-bar__btn" text="Search" hideText />
    </div>
  )
}

export default SearchBar
