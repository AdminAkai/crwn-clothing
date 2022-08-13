import { initializeApp } from 'firebase/app'
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc 
} from 'firebase/firestore'

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCtjpepXD3wLUf50CCmK7-Bf67nV6GUHbI",
  authDomain: "crwn-clothing-db-ae724.firebaseapp.com",
  projectId: "crwn-clothing-db-ae724",
  storageBucket: "crwn-clothing-db-ae724.appspot.com",
  messagingSenderId: "44347165414",
  appId: "1:44347165414:web:15aed1eac7707f696c8927"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()

// Google Sign in functions
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

// Check if user exists, if not create new user in db
export const createUserDocumentFromAuth = async (userAuth, other = {}) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  
  if (!userSnapshot.exists()) {
    const { email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        ...other
      })
    } catch(err) {
      console.log('error creating the user', err.message)
    }
  }

  return userDocRef

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  
  return await createUserWithEmailAndPassword(auth, email, password)
}