import React from 'react'
import data from '../../data/app.json'

const Footer = () => {
  const { author } = data
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__copuright">
          Copyright &#169; {year} |&nbsp;
          <a className="footer__link" href={author.url} target="blank" rel="noopener noreferrer">
            {author.name}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
