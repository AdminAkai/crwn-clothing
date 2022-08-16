import SignUpForm from '../../components/SignUpForm'
import SignInForm from '../../components/SignInForm'

import {
  AuthenticationContainer
} from './styledComponents.js'

function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication