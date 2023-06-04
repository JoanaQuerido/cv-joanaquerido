import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { useTheme, useThemeUpdate } from '../Theme/ThemeContext'
import { BsSun, BsMoon } from 'react-icons/bs'
import './footer.scss'

const Footer = () => {
  const { theme } = useTheme()
  const { toggleTheme } = useThemeUpdate()

  return (
    <footer id="footer">
      <a href="#home" className="footer__logo">
        Joana Querido
      </a>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/joana-querido-419606271/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/JoanaQuerido"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/joanaquerido07"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram />
        </a>
        <a href="#mode2">
          {theme === 'light' ? (
            <BsSun onClick={toggleTheme}></BsSun>
          ) : (
            <BsMoon onClick={toggleTheme}></BsMoon>
          )}
        </a>
      </div>
    </footer>
  )
}

export default Footer
