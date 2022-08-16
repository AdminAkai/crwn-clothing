import { useState } from 'react'

import FormInput from '../FormInput'
import Button from '../Button'

import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
} from '../../utils/firebase'

import {
  SignUpContainer,
  Title
} from './styledComponents.js'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


function SignUpForm() { 
  const [formFields, setFormFields] = useState(defaultFormFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => {
    setFormFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formFields.password !== formFields.confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(formFields.email, formFields.password)

      const newUser = {
        ...user,
        displayName: formFields.displayName
      }

      await createUserDocumentFromAuth(newUser)
      resetFormFields()
    } catch(err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      }
      console.log('user creation encountered an error', err)
    }
  }

  return (
    <SignUpContainer>
      <Title>Don't have an account?</Title>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          inputOptions = {{
            type: 'text', 
            required: true, 
            onChange: handleChange,
            name: "displayName",
            value: formFields.displayName
          }}
        />
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
        <FormInput 
          label="Confirm Password"
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: formFields.confirmPassword
          }}
        />
        <Button 
          buttonOptions={{
            type: 'submit'
          }}
        >
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm