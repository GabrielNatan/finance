import { db } from '../api/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

export const useApi = () => {
  const { auth } = db
  async function login (email: string, password: string) {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
  }

  async function createUser (name: string, lastName: string, email: string, password: string) {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user.user, {
      displayName: `${name} ${lastName}`,
      photoURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    })
  }

  async function updateUser (file: File) {
    const { storage, auth } = db
    const imageRef = ref(storage, 'perfil/' + file.name)
    uploadBytesResumable(imageRef, file)
      .then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then(async (url) => {
          console.log('File available at', url)
          if (auth.currentUser !== null) {
            await updateProfile(auth.currentUser, { photoURL: url })
          }
        })
      }).catch((error) => {
        console.error('Upload failed', error)
        // ...
      })
  }

  return {
    login,
    createUser,
    updateUser
  }
}
