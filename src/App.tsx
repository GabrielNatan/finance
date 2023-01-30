import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/globalStyle'
import { darkTheme, lightTheme } from './style/theme'
import { Home } from './pages/Home'
import { useTheme } from './hooks/useTheme'
import { Login } from './pages/Login'
import { PrivateRoutes } from './utils/PrivateRoutes'

function App () {
  const { isDarkTheme } = useTheme()

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme} >
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
