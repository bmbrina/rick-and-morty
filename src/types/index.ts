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

interface Action {
  type: string
  payload?: any
}

interface AppDataProps {
  currentPage: number
  totalPages: number
  characters: Character[]
  filters: object
  appDispatch: (action: Action) => void
}

interface ReactChildrenProps {
  children: React.ReactNode
}

export type { Status, Gender, Character, Action, AppDataProps, ReactChildrenProps }
