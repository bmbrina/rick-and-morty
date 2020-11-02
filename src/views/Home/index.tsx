import React from 'react'
import Characters from '../../components/Characters'
import Filters from '../../components/Filters'
import Hero from '../../components/Hero'
import data from '../../data/app.json'

const Home = () => {
  const { home, filters } = data

  return (
    <main className="home">
      <Hero title={home.title} />
      <div className="home__content container">
        <Filters filters={filters.characters} />
        <Characters />
      </div>
    </main>
  )
}

export default Home
