import React, { useState } from 'react'
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
import logo from '../../assets/media/svg/afrahly.svg'
import cx from '../../assets/styles/sections/Navbar.module.scss'

const Navbar = () => {
  const [isClicked, setClick] = useState(false)
  // const [navbar, setNavbar] = useState(false)

  const handleClick = () => {
    return (
      setClick(!isClicked)
    )
  }
  // const closeMobileMenu = () => setClick(false)

  // const changeBackground = () => {
  //   if (window.scrollY >= 60) {
  //     setNavbar(true)
  //   } else {
  //     setNavbar(false)
  //   }
  // }

  // window.addEventListener('scroll', changeBackground)

  return (
    <BrowserRouter>
      <div className={cx.navbar}>
        <Link to='/' className={cx.navbar__logo}>
          <img src={logo} alt="Logo"/>
        </Link>
        <div className={cx.navbar__hamburger} onClick={handleClick}>
          <div className={isClicked ? cx.navbar__hamburger__line__active : cx.navbar__hamburger__line}></div>
        </div>
        <nav>
          <ul className={isClicked ? cx.navbar__menu__active : cx.navbar__menu}>
            <li className={cx.navbar__menu__link}>
              <Link to="/">
                About
              </Link>
            </li>
            <li className={cx.navbar__menu__link}>
              <Link to="/">
                Experience
              </Link>
            </li>
            <li className={cx.navbar__menu__link}>
              <Link to="/">
                Projects
              </Link>
            </li>
            <li className={cx.navbar__menu__link}>
              <Link to="/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  )
}

export default Navbar
