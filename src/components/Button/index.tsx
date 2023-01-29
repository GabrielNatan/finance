import {
  Container
} from './style'

interface ButtonProps {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ text, type }: ButtonProps) => {
  return (
        <Container type={type}>
            {text}
        </Container>
  )
}
