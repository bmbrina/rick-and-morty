import React from 'react'
import { useHistory } from 'react-router-dom'
import Hero from '../../components/Hero'
import data from '../../data/app.json'

const NotFound = () => {
  const history = useHistory()
  const { notFound } = data
  const goToHome = () => {
    history.push('/')
  }
  return (
    <main className="not-found">
      <Hero title={notFound.title} buttonText={notFound.buttonText} buttonClick={goToHome} />
    </main>
  )
}

export default NotFound
