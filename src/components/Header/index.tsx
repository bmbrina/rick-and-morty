import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
      </div>
    </header>
  )
}

export default Header
