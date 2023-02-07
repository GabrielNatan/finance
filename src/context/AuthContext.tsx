import { createContext, useEffect, useState } from 'react'
import { db } from '../api/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import PropTypes from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'
import moment from 'moment'

interface Customer { activated: string | undefined, displayName: string | null, email: string | null, phoneNumber: string | null, photoURL: string | null, uid: string | null }
const userElement: Customer = { activated: '', displayName: '', email: '', phoneNumber: '', photoURL: '', uid: '' }

export const AuthContext = createContext(
  {
    token: false,
    toggleToken: (value: boolean) => { console.log('aqui') },
    user: userElement
  }
)
AuthContext.displayName = 'Auth'

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState(useLocalStorage('user'))
  const [user, setUser] = useState<Customer>({ activated: '', displayName: '', email: '', phoneNumber: '', photoURL: '', uid: '' })
  const { auth } = db

  function toggleToken (value: boolean) {
    setToken(value)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        console.log('Null ', user)
        const currentUser = { activated: moment(user.metadata.creationTime).fromNow(), displayName: user.displayName, email: user.email, phoneNumber: user.phoneNumber, photoURL: user.photoURL, uid: user.uid }
        setUser(currentUser)
        setToken(true)
      } else {
        toggleToken(false)
      }
    })
  }, [])

  const value = {
    token,
    toggleToken,
    user
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
