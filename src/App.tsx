import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style/globalStyle'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { PrivateRoutes } from './utils/PrivateRoutes'
import { AuthProvider } from './context/AuthContext'
import { CreateAccount } from './pages/CreateAccount'
import { TemplateDefault } from './Template/Default/Default'
import { ThemeContextProvider } from './context/ThemContext'

function App () {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route path="/" element={<TemplateDefault><Home/></TemplateDefault>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create-account" element={<CreateAccount/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeContextProvider>
  )
}

export default App
