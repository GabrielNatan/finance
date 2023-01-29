import { useState } from 'react'

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function toggleTheme () {
    setIsDarkTheme(!isDarkTheme)
  }

  return {
    toggleTheme,
    isDarkTheme
  }
}
