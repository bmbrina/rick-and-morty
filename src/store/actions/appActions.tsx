import appConstants from '../constants/appConstants'
import { Character } from '../../types'

const updatePage = (payload: number) => ({
  type: appConstants.UPDATE_CURRENT_PAGE,
  payload
})

const setCharacters = (payload: Character[]) => ({
  type: appConstants.SET_CHARACTERS,
  payload
})

export { updatePage, setCharacters }
