import { createGlobalStyle } from 'styled-components'

interface themeProps {
  color: string
  background: string
  backgroundSecondary: string
  borderColor: string
  shadowColor: string
  buttonPrimary: string
  active: string
  green: string
  green30: string
  red: string
  red30: string
}

export const GlobalStyle = createGlobalStyle<{ theme: themeProps }>`

    *{
        margin: 0;
        padding: 0;
        font-family: "Poppins";
        box-sizing: border-box;
    }

`
