import { initializeApp } from 'firebase/app'
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc 
} from 'firebase/firestore'

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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(err) {
      console.log('error creating the user', err.message)
    }
  }

  return userDocRef

}