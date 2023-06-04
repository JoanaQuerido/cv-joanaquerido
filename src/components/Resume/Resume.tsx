import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/mw2.png'
import './resume.scss'

const Resume = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed Projects</small>
            </article>
          </div>
          <p>
            Enthusiastic about web programming and technology fields, with
            strong communication and teamwork skills acquired through academic
            and personal projects. Over the past year, I have dedicated my time
            working extensively with HTML, CSS, JavaScript, focusing on the
            development of both frontend and backend components. My journey as a
            master's student has not only increased my passion for web
            development but has also given me the determination to take on new
            challenges and pursue professional growth opportunities.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
