import React, { useState } from 'react'
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
import cx from '../../assets/styles/sections/Navbar.module.scss'

const Navbar = () => {
  const [isClicked, setClick] = useState(false)
  // const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!isClicked)
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
      <nav className={cx.navbar}>
        <div className={cx.navbar__container}>
          <Link to='/' className={cx.navbar__container__logo}>
            <img src="../../assets/media/afrahly_mobile.svg" alt="Logo"/>
          </Link>
          <div className={cx.navbar__container__hamburger} onClick={handleClick}>
            <div className={isClicked ? cx.navbar__container__hamburger__line__active : cx.navbar__container__hamburger__line}></div>
          </div>
        </div>
        <div className={isClicked ? cx.navbar__menu__active : cx.navbar__menu}>
          <ul>
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
        </div>
      </nav>
    </BrowserRouter>
  )
}

export default Navbar
