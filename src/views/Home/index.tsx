import React from 'react'
import Characters from '../../components/Characters'
import Hero from '../../components/Hero'
import data from '../../data/app.json'

const Home = () => {
  const { home } = data

  return (
    <main className="home">
      <Hero title={home.title} />
      <div className="home__content container">
        <Characters />
      </div>
    </main>
  )
}

export default Home
