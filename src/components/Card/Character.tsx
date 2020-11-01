import React from 'react'
import { Character } from '../../types'

const CharacterCard = (character: Character) => {
  const { name, image, status, species, location, origin } = character

  return (
    <li className="characters__card">
      <img src={image} alt={name} className="characters__card-img" />
      <div className="characters__card-content">
        <p className="characters__card-name">{name}</p>
        <div className="characters__card-info">
          <span
            className={`characters__card-status characters__card-status--${status.toLowerCase()}`}
          >
            {status}
          </span>
          <span className="characters__card-species"> - {species}</span>
        </div>
        {origin && (
          <p className="characters__card-origin">
            <span className="characters__card-subtitle">From:</span>
            {origin.name}
          </p>
        )}
        {location && (
          <p className="characters__card-last-seen">
            <span className="characters__card-subtitle">Last known location:</span>
            {location.name}
          </p>
        )}
      </div>
    </li>
  )
}

export default CharacterCard
