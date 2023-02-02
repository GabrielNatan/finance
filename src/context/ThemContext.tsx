import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../style/theme'

interface ThemeProps {
  children: JSX.Element
}

export const ThemeContext = createContext({ toggleTheme: () => {}, light: lightTheme, dark: darkTheme, theme: 'light' })

export const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [isDarkTheme, setisDarkTheme] = useState('light')

  function toggleTheme () {
    setisDarkTheme(isDarkTheme === 'light' ? 'dark' : 'light')
  }
  const value = {
    light: lightTheme,
    dark: darkTheme,
    toggleTheme,
    theme: isDarkTheme
  }

  return (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={isDarkTheme === 'light' ? value.light : value.dark} >
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
  )
}
