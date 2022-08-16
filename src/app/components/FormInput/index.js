import {
  FormInputLabel,
  Input,
  Group
} from "./styledComponents.js"

function FormInput({ label, inputOptions }) {
  return (
    <Group>
      {
        label && (
          <FormInputLabel 
            shrink={inputOptions.value.length}
          >
            {label}
          </FormInputLabel> 
        )
      }
      <Input {...inputOptions} />
    </Group>
  )
}

export default FormInput