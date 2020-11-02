import appConstants from '../constants/appConstants'
import { Character } from '../../types'

const updateCurrentPage = (payload: number) => ({
  type: appConstants.UPDATE_CURRENT_PAGE,
  payload
})

const setTotalPages = (payload: number) => ({
  type: appConstants.SET_TOTAL_PAGES,
  payload
})

const setCharacters = (payload: Character[]) => ({
  type: appConstants.SET_CHARACTERS,
  payload
})

const setFilters = (payload: object) => ({
  type: appConstants.SET_FILTERS,
  payload
})

export { updateCurrentPage, setTotalPages, setCharacters, setFilters }
