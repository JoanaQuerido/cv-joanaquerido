import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

interface ThemeUpdateContextProps {
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)
const ThemeUpdateContext = createContext<ThemeUpdateContextProps | undefined>(
  undefined
)

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function useThemeUpdate(): ThemeUpdateContextProps {
  const context = useContext(ThemeUpdateContext)
  if (!context) {
    throw new Error('useThemeUpdate must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light')

  const setDarkMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'dark')
  }
  const setLightMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'light')
  }

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  // }

  const toggleTheme = () => {
    setTheme((curr) => {
      if (curr === 'light') {
        setDarkMode()
        return 'dark' // Chama a função setLightMode()
      } else {
        setLightMode()
        return 'light' // Chama a função setDarkMode()
      }
    })
  }

  useEffect(() => {
    const currentTheme = theme === 'light' ? 'light' : 'dark'
    document.querySelector('body')?.setAttribute('data-theme', currentTheme)
  }, [theme])
  setDarkMode()

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeUpdateContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
