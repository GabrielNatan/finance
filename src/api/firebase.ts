import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB_ONbsEBOZLQwIs_b4PHVp7FTpNvmO2KA',
  authDomain: 'auth-contex-2fbed.firebaseapp.com',
  projectId: 'auth-contex-2fbed',
  storageBucket: 'auth-contex-2fbed.appspot.com',
  messagingSenderId: '683735459418',
  appId: '1:683735459418:web:500f4f6af11497e9591a63'
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const auth = getAuth(app)
export const db = {
  firestore,
  auth
}
