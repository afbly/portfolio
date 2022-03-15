import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/media/svg/afrahly.svg'
import cx from '../../assets/styles/sections/Navbar.module.scss'

const Navbar = () => {
  const [isClicked, setClick] = useState(false)
  // const [navbar, setNavbar] = useState(false)

  const handleclick = () => {
    setClick(!isClicked)
    if (isClicked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = null
    }
  }

  // useEffect(() => {
  //   if (isClicked) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.overflow = null
  //   }
  // })

  // const changeBackground = () => {
  //   if (window.scrollY >= 60) {
  //     setNavbar(true)
  //   } else {
  //     setNavbar(false)
  //   }
  // }

  // window.addEventListener('scroll', changeBackground)

  return (
    <div className={cx.navbar}>
      <HashLink to='/#home' className={cx.navbar__logo}>
        <img src={logo} alt="Logo"/>
      </HashLink>
      <div className={cx.navbar__hamburger} onClick={handleclick}>
        <div className={isClicked ? cx.navbar__hamburger__line__active : cx.navbar__hamburger__line}></div>
      </div>
      <nav>
        <ul className={isClicked ? cx.navbar__menu__active : cx.navbar__menu}>
          <li className={cx.navbar__menu__link}>
            <HashLink smooth to="/#about" onClick={() => setClick(false)}>
              About
            </HashLink>
          </li>
          <li className={cx.navbar__menu__link}>
            <HashLink smooth to="/#experience" onClick={() => setClick(false)}>
              Experience
            </HashLink>
          </li>
          <li className={cx.navbar__menu__link}>
            <HashLink smooth to="/#projects" onClick={() => setClick(false)}>
              Projects
            </HashLink>
          </li>
          <li className={cx.navbar__menu__link}>
            <HashLink smooth to="/#contact" onClick={() => setClick(false)}>
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
