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
    case appConstants.SET_FILTERS:
      return {
        ...state,
        currentPage: 1,
        filters: {
          ...state.filters,
          [payload.name]: payload.value
        }
      }
    case appConstants.SET_LOADING_STATE:
      return {
        ...state,
        loading: !state.loading
      }
    default:
      return state
  }
}

export default appReducer
