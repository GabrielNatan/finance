import { useContext } from 'react'
import { ThemeContext } from '../context/ThemContext'

export const useTheme = () => {
  return useContext(ThemeContext)
}
