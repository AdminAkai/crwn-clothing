import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from './styledComponents.js'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
  }[buttonType]
)


function Button({ buttonType, children, buttonOptions }) {
  const CustomButton = getButton(buttonType)

  return (
    <CustomButton 
      {...buttonOptions}
    >
      {children}
    </CustomButton>
  )
}

export default Button