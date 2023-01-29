import {
  Container,
  InputText,
  Text
} from './style'

interface InputProps {
  text: string
}

export const Input = ({ text }: InputProps) => {
  return (
        <Container>
            <Text>{text}</Text>
            <InputText type="text"/>
        </Container>
  )
}
