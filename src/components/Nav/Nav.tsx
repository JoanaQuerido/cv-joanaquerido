import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { RiToolsLine } from 'react-icons/ri'
import { BsBook } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'

import './nav.scss'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#qualifications"
        onClick={() => setActiveNav('#qualifications')}
        className={activeNav === '#qualifications' ? 'active' : ''}
      >
        <RiToolsLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BsBook />
      </a>
      <a
        href="/contact"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <TfiEmail />
      </a>
    </nav>
  )
}

export default Nav
