import React, { useEffect } from 'react'
import CV from './CV'
import HeaderSocials from './HeaderSocials'
import './header.scss'
import { useTheme, useThemeUpdate } from '../Theme/ThemeContext'
import { BsSun, BsMoon } from 'react-icons/bs'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const { toggleTheme } = useThemeUpdate()

  useEffect(() => {
    const data = window.localStorage.getItem('react-cv')
    if (data !== null && (data === 'light' || data === 'dark')) {
      setTheme(data)
    }
    console.log('data', data)
  }, [setTheme])

  useEffect(() => {
    window.localStorage.setItem('react-cv', theme)
    console.log('theme', theme)
  }, [theme])

  return (
    <header id="home">
      <div className="container header__container">
        <h5>HELLO I'M</h5>
        <h1>JOANA QUERIDO</h1>
        <h5 className="text-light">FULLSTACK DEVELOPER</h5>
        <CV />
        <a href="#mode" className="scroll__down">
          {theme === 'light' ? (
            <BsSun onClick={toggleTheme}></BsSun>
          ) : (
            <BsMoon onClick={toggleTheme}></BsMoon>
          )}
        </a>

        <a href="#footer" className="scroll__down">
          Scroll Down
          <p />
        </a>
        <HeaderSocials />
      </div>
    </header>
  )
}
export default Header
