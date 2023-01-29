import {
  Container
} from './style'

interface ButtonProps {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
  return (
        <Container>
            {text}
        </Container>
  )
}
