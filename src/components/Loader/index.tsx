import React from 'react'

const Loader = ({ loading }: any) => {
  return (
    <div className={`loader ${loading ? 'loader--show' : ''}`}>
      <div className="loader__spinner" />
    </div>
  )
}

export default Loader
