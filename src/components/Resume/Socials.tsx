import { AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/joana-querido-419606271/">
        <AiFillLinkedin />
      </a>
      <a href="https://www.instagram.com/joanaquerido07/?hl=pt">
        <FaInstagram />
      </a>
    </div>
  )
}

export default Socials
