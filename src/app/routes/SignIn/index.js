import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase'

function SignIn() {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup()
      console.log(user)

      const userDocRef = await createUserDocumentFromAuth(user)
      
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn