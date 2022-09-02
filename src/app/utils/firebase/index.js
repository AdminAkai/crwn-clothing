import { initializeApp } from 'firebase/app'
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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

// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()

// Google Sign in functions
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object[field].toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()

  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

// Check if user exists, if not create new user in db
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  
  const userSnapshot = await getDoc(userDocRef)
  
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    const newUser = {
      displayName,
      email,
      createdAt
    }

    try {
      await setDoc(userDocRef, newUser)
    } catch(err) {
      console.log('error creating the user', err.message)
    }
  }

  return userSnapshot

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}