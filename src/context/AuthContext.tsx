import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext({ token: false, toggleToken: () => { console.log('aqui') } })

AuthContext.displayName = 'Auth'

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState(false)
  const value = {
    token,
    toggleToken
  }

  function toggleToken () {
    setToken(!token)
  }
  return (
        <AuthContext.Provider value={{ ...value }}>
            {children}
        </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
