const CV = require('../../assets/cv.pdf') as string

const Download = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  )
}

export default Download
