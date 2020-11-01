import React, { useReducer } from 'react'
import createCtx from '../helpers/createCtx'
import appReducer from '../store/reducers/appReducer'
import { AppDataProps, ReactChildrenProps } from '../types'

const [useAppContext, AppCtxProvider] = createCtx<AppDataProps>()

const initialState = {
  currentPage: 1,
  totalPages: 0,
  characters: []
}

const AppProvider = ({ children }: ReactChildrenProps) => {
  const [state, appDispatch] = useReducer(appReducer, initialState)

  return (
    <AppCtxProvider
      value={{
        ...state,
        appDispatch
      }}
    >
      {children}
    </AppCtxProvider>
  )
}

export { useAppContext }
export default AppProvider
