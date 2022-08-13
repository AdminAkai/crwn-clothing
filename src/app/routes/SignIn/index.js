import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
} from '../../utils/firebase'

import SignUpForm from '../../components/SignUpForm'

function SignIn() {
  
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup()
      console.log(user)
      
      const userDocRef = await createUserDocumentFromAuth(user)
      console.log(userDocRef)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn