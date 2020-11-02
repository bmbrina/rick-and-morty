import React from 'react'
import { ReactComponent as RickAndMorty } from '../../images/illustrations/rick-and-morty.svg'
import Button from '../Button'

const Hero = ({ title, buttonText, buttonClick }: any) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container container">
        <h1 className="hero__title" id="hero-title">
          {title}
        </h1>
        <div className="hero__img">
          <RickAndMorty />
        </div>
        {buttonText && (
          <Button text={buttonText} handleClick={buttonClick} classList="btn--primary hero__btn" />
        )}
      </div>
    </section>
  )
}

export default Hero
