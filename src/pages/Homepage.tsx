import React from 'react'
import Qualification from '../components/Qualifications/Qualification'
import Skills from '../components/Skills/Skills'
import Resume from '../components/Resume/Resume'
import Portfolio from '../components/Portfolio/Portfolio'
import Nav from '../components/Nav/Nav'

const Homepage: React.FC = () => {
  return (
    <>
      <Nav />
      <Resume />
      <Qualification />
      <Skills />
      <Portfolio />
    </>
  )
}

export default Homepage
