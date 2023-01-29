import { type UseFormRegister } from 'react-hook-form'
import { type FormData } from '../../interface'

import {
  Container,
  InputText,
  Text,
  MessageError
} from './style'

interface InputProps {
  text: string
  name: 'email' | 'password'
  type: React.HTMLInputTypeAttribute
  register: UseFormRegister<FormData>
  validation: { required: boolean }
  message: string
}

export const Input = ({ text, type, name, register, validation, message }: InputProps) => {
  return (
        <Container>
            <Text>{text}</Text>
            <InputText
                {...register(name, validation)}
                type={type}
                name={name}
                message={message !== ''}
            />
            <MessageError>{message}</MessageError>
        </Container>
  )
}
