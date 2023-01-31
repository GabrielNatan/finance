import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/globalStyle'
import { darkTheme, lightTheme } from './style/theme'
import { Home } from './pages/Home'
import { useTheme } from './hooks/useTheme'
import { Login } from './pages/Login'
import { PrivateRoutes } from './utils/PrivateRoutes'
import { AuthProvider } from './context/AuthContext'
import { CreateAccount } from './pages/CreateAccount'

function App () {
  const { isDarkTheme } = useTheme()

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme} >
      <AuthProvider>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create-account" element={<CreateAccount/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
