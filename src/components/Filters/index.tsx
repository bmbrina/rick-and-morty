import React from 'react'
import { useAppContext } from '../../context/AppCtx'
import { setFilters } from '../../store/actions/appActions'
import Input from '../Input'
import SearchBar from '../SearchBar'
import Select from '../Select'

const Filters = ({ filters }: any) => {
  const { appDispatch } = useAppContext()
  const setFilter = (name: string, value: string) => {
    appDispatch(setFilters({ name, value }))
  }
  return (
    <form className="filters">
      <p className="filters__title">Filters</p>
      <div className="filters__container">
        {filters.map((filter: any) => {
          const { type } = filter
          let component = null
          if (type === 'search-bar') {
            component = <SearchBar input={filter} key={filter.name} handleClick={setFilter} />
          }
          if (type === 'input') {
            component = <Input {...filter} key={filter.name} handleInput={setFilter} />
          }
          if (type === 'select') {
            component = <Select {...filter} key={filter.name} onChange={setFilter} />
          }

          return component
        })}
      </div>
    </form>
  )
}

export default Filters
