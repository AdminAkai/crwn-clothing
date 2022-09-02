import { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../FormInput'
import Button, { BUTTON_TYPE_CLASSES } from '../Button'

import { googleSigninStart, emailSigninStart } from '../../redux/features/userSlice'

import {
  SignUpContainer,
  Title,
  ButtonsContainer
} from './styledComponents.js'

const defaultFormFields = {
  email: '',
  password: '',
}

function SignInForm() { 
  const dispatch = useDispatch()

  const [formFields, setFormFields] = useState(defaultFormFields)
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => {
    setFormFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const SignInWithGoogle = () => {
    dispatch(googleSigninStart())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
       dispatch(emailSigninStart({ 
        email: formFields.email, 
        password: formFields.password 
      }))

      resetFormFields()
    } catch(err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break
        default:
          console.log(err, err.code)
      }
    }
  }

  return (
    <SignUpContainer>
      <Title>Already have an account?</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          inputOptions={{
            type: 'email', 
            required: true, 
            onChange: handleChange,
            name: "email",
            value: formFields.email,
          }}
          />
        
        <FormInput 
          label="Password"
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: "password",
            value: formFields.password
          }}
          />

        <ButtonsContainer>
          <Button 
            buttonOptions={{
              type: 'submit'
            }}
          >
            Sign In
          </Button>
          <Button 
            buttonType={BUTTON_TYPE_CLASSES.google}
            buttonOptions={{
              type: 'button',
              onClick: SignInWithGoogle
            }}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}

export default SignInForm