import React, { useEffect, useRef } from 'react'
import { useAppContext } from '../../context/AppCtx'
import { setCharacters, setTotalPages } from '../../store/actions/appActions'
import API from '../../helpers/API'
import List from '../List'
import Pagination from '../Pagination'

const Characters = () => {
  const { currentPage, characters, appDispatch } = useAppContext()
  const charactersRef = useRef(null)
  useEffect(() => {
    API.getCharacters({ page: currentPage }).then((response: any) => {
      appDispatch(setTotalPages(response.pages))
      appDispatch(setCharacters(response.characters))
    })
  }, [currentPage, appDispatch])

  return (
    <div className="characters" ref={charactersRef}>
      {characters && <List list={characters} classList="characters__list" />}
      <Pagination scrollRef={charactersRef} />
    </div>
  )
}

export default Characters
