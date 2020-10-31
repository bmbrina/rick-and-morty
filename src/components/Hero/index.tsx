import React from 'react'
import data from '../../data/app.json'
import { ReactComponent as RickAndMorty } from '../../images/rick-and-morty.svg'

const Hero = () => {
  const { hero } = data
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container container">
        <h1 className="hero__title" id="hero-title">
          {hero.title}
        </h1>
        <div className="hero__img">
          <RickAndMorty />
        </div>
      </div>
    </section>
  )
}

export default Hero
