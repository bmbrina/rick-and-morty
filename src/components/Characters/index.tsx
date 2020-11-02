import React, { useEffect, useRef } from 'react'
import { useAppContext } from '../../context/AppCtx'
import { setCharacters, setTotalPages } from '../../store/actions/appActions'
import API from '../../helpers/API'
import List from '../List'
import Pagination from '../Pagination'

const Characters = () => {
  const { currentPage, filters, characters, appDispatch } = useAppContext()
  const charactersRef = useRef(null)
  useEffect(() => {
    API.getCharacters({ page: currentPage, ...filters }).then((response: any) => {
      appDispatch(setTotalPages(response.pages))
      appDispatch(setCharacters(response.characters))
    })
  }, [currentPage, filters, appDispatch])

  return (
    <div className="characters" ref={charactersRef}>
      {characters.length > 0 ? (
        <List list={characters} classList="characters__list" />
      ) : (
        <div className="characters__not-found">
          Sorry, we couldn't find any results with the filters your provided. Please try again.
        </div>
      )}
      <Pagination scrollRef={charactersRef} />
    </div>
  )
}

export default Characters
