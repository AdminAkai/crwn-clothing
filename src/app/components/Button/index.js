import './styles.scss'

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

function Button({ buttonType, children, buttonOptions }) {
  return (
    <button 
      className={`button-container ${buttonType ? BUTTON_TYPES_CLASSES[buttonType] : ''}`} 
      {...buttonOptions}
    >
      {children}
    </button>
  )
}

export default Button