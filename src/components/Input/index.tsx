import {
  Container,
  InputText,
  Text
} from './style'

interface InputProps {
  text: string
  name: 'email' | 'password'
  type: React.HTMLInputTypeAttribute
  register: UseFormRegister<FormData>
  validation: { required: boolean }
  message: string
}

export const Input = ({ text, type }: InputProps) => {
  return (
        <Container>
            <Text>{text}</Text>
            <InputText
                type={type}
            />
        </Container>
  )
}
