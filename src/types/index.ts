type Status = 'Alive' | 'Dead' | 'unknown'
type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown'

interface Place {
  name: string
  url: string
}

interface Character {
  id: number
  name: string
  status: Status
  species: string
  type: string
  gender: Gender
  origin: Place
  location: Place
  image: string
  episode: string[]
  url: string
  created: string
}

export type { Status, Gender, Character }
