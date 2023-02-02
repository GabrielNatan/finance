import { type UseFormRegister } from 'react-hook-form'
import { type FormDataOptions, type FormData } from '../../interface'

import {
  Container,
  InputText,
  Text,
  MessageError
} from './style'

interface InputProps {
  text: string
  name: FormDataOptions
  type: React.HTMLInputTypeAttribute
  register: UseFormRegister<FormData>
  validation: validation
  message: FormData
}

interface validation {
  required: boolean
  validate?: () => boolean
}

export const Input = ({ text, type, name, register, validation, message }: InputProps) => {
  return (
        <Container>
            <Text>{text}</Text>
            <InputText
                {...register(name, validation)}
                type={type}
                name={name}
                message={(message[name] !== '')}
            />
            <MessageError>{message[name]}</MessageError>
        </Container>
  )
}
