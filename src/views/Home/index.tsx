import React from 'react'
import Hero from '../../components/Hero'
import data from '../../data/app.json'

const Home = () => {
  const { home } = data

  return (
    <main className="home">
      <Hero title={home.title} />
      <div className="home__content">Characters list and filters go here</div>
    </main>
  )
}

export default Home
