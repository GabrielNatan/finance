import { Container } from './style'

interface CardProps {
  text: string
  icon: JSX.Element
  onClick: () => void
}
export const Card = ({ text, icon, onClick }: CardProps) => {
  return (
    <Container onClick={onClick}>
      {icon}
      {text}
    </Container>
  )
}
