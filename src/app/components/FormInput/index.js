import "./styles.scss"

function FormInput({ label, inputOptions }) {
  return (
    <div className="group">
      {
        label && (
          <label 
          className={`${inputOptions.value.length ? 'shrink' : null} form-input-label`}
          >
            {label}
          </label> 
        )
      }
      <input className="form-input" {...inputOptions} />
    </div>
  )
}

export default FormInput