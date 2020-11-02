import React from 'react'
import { Character } from '../../types'
import CharacterCard from '../Card/Character'

const List = ({ list, classList }: any) => {
  return (
    <ul className={classList}>
      {list.map((character: Character) => {
        const { id } = character
        return <CharacterCard {...character} key={id} />
      })}
    </ul>
  )
}

export default List
