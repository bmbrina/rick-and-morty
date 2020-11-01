import appConstants from '../constants/appConstants'
import { Action } from '../../types'

const appReducer = (state: any, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case appConstants.UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload
      }
    case appConstants.RESET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: 1
      }
    case appConstants.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: payload
      }
    case appConstants.SET_CHARACTERS:
      return {
        ...state,
        characters: payload
      }
    default:
      return state
  }
}

export default appReducer
