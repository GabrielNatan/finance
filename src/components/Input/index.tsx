import {
  Container,
  InputText,
  Text
} from './style'

interface InputProps {
  text: string
  type: React.HTMLInputTypeAttribute
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
