import { Container, Title, SubTitle, Input } from './style'

export const Tag = ({ title, text, edit, color = '#CCC' }: { title: string, text: string, edit: boolean, color?: string }) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      {edit
        ? <Input message={true}/>
        : <SubTitle>{text}</SubTitle>
      }
    </Container>
  )
}
