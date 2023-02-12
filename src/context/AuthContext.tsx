import { createContext, useEffect, useState } from 'react'
import { db } from '../api/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import PropTypes from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'
import moment from 'moment'

interface Customer {
  activated: string | undefined
  displayName: string | null
  email: string | null
  phoneNumber: string | null
  photoURL: string | null
  uid: string | null
  jobTitle: string | null
  streetAddress: string | null
  countryRegion: string | null
  apt: string | null
  city: string | null
  state: string | null
  zipCode: string | null
}

const defaultCustomer: Customer = {
  activated: '',
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  uid: '',
  jobTitle: '',
  streetAddress: '',
  countryRegion: '',
  apt: '',
  city: '',
  state: '',
  zipCode: ''
}

export const AuthContext = createContext(
  {
    token: false,
    toggleToken: (value: boolean) => { console.log('aqui') },
    user: defaultCustomer
  }
)

AuthContext.displayName = 'Auth'

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState(useLocalStorage('user'))
  const [user, setUser] = useState<Customer>(defaultCustomer)
  const { auth } = db

  function toggleToken (value: boolean) {
    setToken(value)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        const currentUser = {
          activated: moment(user.metadata.creationTime).fromNow(),
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          jobTitle: '',
          streetAddress: '',
          countryRegion: '',
          apt: '',
          city: '',
          state: '',
          zipCode: ''
        }
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
