import {
  Container
} from './style'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined
  children: JSX.Element | string
  disabled: boolean
  onclick?: () => void
}

export const Button = ({ type, children, disabled, onclick }: ButtonProps) => {
  return (
        <Container
          type={type}
          disabled={disabled}
          onClick={onclick}
        >
            {children}
        </Container>
  )
}
