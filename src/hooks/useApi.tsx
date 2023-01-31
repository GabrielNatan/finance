import { db } from '../api/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const useApi = () => {
  const { auth } = db
  async function login (email: string, password: string) {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
  }

  async function createUser (name: string, lastName: string, email: string, password: string) {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user.user, {
      displayName: `${name} ${lastName}`
    })
  }

  return {
    login,
    createUser
  }
}
