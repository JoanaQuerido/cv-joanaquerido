import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
    </div>
  )
}

export default HeaderSocials
