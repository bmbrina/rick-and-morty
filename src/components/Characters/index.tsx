/* eslint-disable no-nested-ternary */
import React, { Fragment, useEffect, useRef } from 'react'
import { useAppContext } from '../../context/AppCtx'
import { setCharacters, setTotalPages, setLoadingState } from '../../store/actions/appActions'
import API from '../../helpers/API'
import List from '../List'
import Pagination from '../Pagination'
import Loader from '../Loader'

const Characters = () => {
  const { loading, currentPage, filters, characters, appDispatch } = useAppContext()
  const charactersRef = useRef(null)
  useEffect(() => {
    appDispatch(setLoadingState())
    API.getCharacters({ page: currentPage, ...filters }).then((response: any) => {
      appDispatch(setTotalPages(response.pages))
      appDispatch(setCharacters(response.characters))
      appDispatch(setLoadingState())
    })
  }, [currentPage, filters, appDispatch])

  return (
    <div className="characters" ref={charactersRef}>
      {loading ? (
        <Loader loading={loading} />
      ) : characters.length > 0 ? (
        <>
          <List list={characters} classList="characters__list" />
          <Pagination scrollRef={charactersRef} />
        </>
      ) : (
        <div className="characters__not-found">
          Sorry, we couldn't find any results with the filters your provided. Please try again.
        </div>
      )}
    </div>
  )
}

export default Characters
