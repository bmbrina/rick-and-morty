/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import MaterialPagination from '@material-ui/lab/Pagination'
import { useAppContext } from '../../context/AppCtx'
import { updateCurrentPage } from '../../store/actions/appActions'
import { scrollToRef } from '../../helpers/utils'

const Pagination = ({ scrollRef }: any) => {
  const { currentPage, totalPages, appDispatch } = useAppContext()
  const handleChange = (event: any, value: number) => {
    appDispatch(updateCurrentPage(value))
    scrollToRef(scrollRef)
  }
  return <MaterialPagination count={totalPages} page={currentPage} onChange={handleChange} />
}

export default Pagination
