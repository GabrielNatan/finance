import {
  Container
} from './style'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined
  children: JSX.Element | string
  disabled: boolean
}

export const Button = ({ type, children, disabled }: ButtonProps) => {
  return (
        <Container
          type={type}
          disabled={disabled}
        >
            {children}
        </Container>
  )
}
