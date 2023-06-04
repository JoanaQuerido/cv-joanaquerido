import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contactpage from './pages/Contactpage'

import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'
import { ThemeProvider, useTheme } from './components/Theme/ThemeContext'
import ParticlesComponent from './components/Theme/Particles'

function App() {
  return (
    <ThemeProvider>
      <ParticlesComponent />
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent() {
  const { theme } = useTheme()

  return (
    <div id={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
